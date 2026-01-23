import gpxParser from 'gpxparser'
import { getAssetPath } from './utils'

export interface GpxPoint {
  lat: number
  lng: number
  ele: number
}

export interface GpxWaypoint {
  lat: number
  lng: number
  name: string
  type?: string
}

export interface ParsedGpx {
  points: GpxPoint[]
  waypoints: GpxWaypoint[]
  bounds: {
    minLat: number
    maxLat: number
    minLng: number
    maxLng: number
  }
  totalDistance: number
  totalElevationGain: number
  totalElevationLoss: number
}

export async function parseGpxFile(url: string): Promise<ParsedGpx> {
  const response = await fetch(getAssetPath(url))
  if (!response.ok) {
    throw new Error(`Failed to fetch GPX file: ${response.status}`)
  }
  const gpxText = await response.text()

  const gpx = new gpxParser()
  gpx.parse(gpxText)

  // Try tracks first, then routes
  let points: GpxPoint[] = []
  let totalDistance = 0
  let totalElevationGain = 0
  let totalElevationLoss = 0

  if (gpx.tracks && gpx.tracks.length > 0) {
    const track = gpx.tracks[0]
    points = track.points.map((point: { lat: number; lon: number; ele: number }) => ({
      lat: point.lat,
      lng: point.lon,
      ele: point.ele || 0,
    }))
    totalDistance = track.distance?.total ? track.distance.total / 1000 : 0
    totalElevationGain = track.elevation?.pos || 0
    totalElevationLoss = track.elevation?.neg || 0
  } else if (gpx.routes && gpx.routes.length > 0) {
    const route = gpx.routes[0]
    points = route.points.map((point: { lat: number; lon: number; ele: number }) => ({
      lat: point.lat,
      lng: point.lon,
      ele: point.ele || 0,
    }))
    totalDistance = route.distance?.total ? route.distance.total / 1000 : 0
    totalElevationGain = route.elevation?.pos || 0
    totalElevationLoss = route.elevation?.neg || 0
  } else if (gpx.waypoints && gpx.waypoints.length > 0) {
    // Fallback to waypoints if no tracks or routes
    points = gpx.waypoints.map((point: { lat: number; lon: number; ele: number }) => ({
      lat: point.lat,
      lng: point.lon,
      ele: point.ele || 0,
    }))
  }

  if (points.length === 0) {
    throw new Error('No track, route, or waypoints found in GPX file')
  }

  // Extract waypoints (ravitaillements, etc.)
  const waypoints: GpxWaypoint[] = gpx.waypoints
    ? gpx.waypoints
        .filter((wpt: { name: string; type?: string }) =>
          wpt.type === 'User' || wpt.name?.toLowerCase().includes('ravit')
        )
        .map((wpt: { lat: number; lon: number; name: string; type?: string }) => ({
          lat: wpt.lat,
          lng: wpt.lon,
          name: wpt.name,
          type: wpt.type,
        }))
    : []

  const lats = points.map((p) => p.lat)
  const lngs = points.map((p) => p.lng)

  return {
    points,
    waypoints,
    bounds: {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    },
    totalDistance,
    totalElevationGain,
    totalElevationLoss,
  }
}

export function calculateCenterAndZoom(bounds: ParsedGpx['bounds']): {
  center: [number, number]
  zoom: number
} {
  const centerLat = (bounds.minLat + bounds.maxLat) / 2
  const centerLng = (bounds.minLng + bounds.maxLng) / 2

  const latDiff = bounds.maxLat - bounds.minLat
  const lngDiff = bounds.maxLng - bounds.minLng
  const maxDiff = Math.max(latDiff, lngDiff)

  let zoom = 12
  if (maxDiff > 0.5) zoom = 10
  if (maxDiff > 1) zoom = 9
  if (maxDiff < 0.2) zoom = 13
  if (maxDiff < 0.1) zoom = 14

  return {
    center: [centerLat, centerLng],
    zoom,
  }
}
