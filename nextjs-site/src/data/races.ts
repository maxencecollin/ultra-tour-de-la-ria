export type RaceFormat = 'ultra' | 'relais' | '30km'

export interface GpxTrack {
  id: string
  name: string
  file: string
  color: string
  distance: number
  elevation: number
}

export interface RaceSegment {
  id: string
  name: string
  description: string
  gpxFile: string
  distance: number
  elevation: number
  startLocation: string
  endLocation: string
}

export interface Race {
  id: RaceFormat
  name: string
  shortName: string
  distance: number
  elevation: number
  description: string
  longDescription: string
  startTime: string
  startLocation: string
  price: number
  priceEarly?: number
  maxParticipants: number
  barrierTime?: string
  gpxTracks: GpxTrack[]
  segments?: RaceSegment[]
  highlights: string[]
  requirements: string[]
}

export const EVENT_DATE = '23 Mai 2027'
export const EVENT_LOCATION = 'Locoal-Mendon, Bretagne'

export const races: Race[] = [
  {
    id: 'ultra',
    name: 'Ultra 80km',
    shortName: '80KM',
    distance: 80,
    elevation: 1800,
    description: 'Le defi roi. Le tour complet de la Ria.',
    longDescription: 'L\'Ultra 80km vous emmene pour un tour complet de la Ria d\'Etel. Une immersion totale dans les paysages bretons, entre pinedes, sentiers cotiers et traversee maritime. Un parcours exigeant qui revelera le trailer qui sommeille en vous.',
    startTime: '06:00',
    startLocation: 'Locoal-Mendon',
    price: 75,
    priceEarly: 65,
    maxParticipants: 400,
    barrierTime: '20:00 (14h de course)',
    gpxTracks: [
      {
        id: 'ultra-complet',
        name: 'Ultra 80km - Parcours complet',
        file: '/docs/UtR-complet.gpx',
        color: '#d97e1a',
        distance: 80,
        elevation: 1800,
      },
    ],
    highlights: [
      'Traversee bateau (temps neutralise)',
      'Passage sur les sites Natura 2000',
      'Ravitaillements tous les 10-15km',
      'Finisher medal et t-shirt',
    ],
    requirements: [
      'Certificat medical ou licence FFA',
      'Experience trail longue distance recommandee',
      'Equipement obligatoire (liste fournie)',
    ],
  },
  {
    id: 'relais',
    name: 'Relais Duo',
    shortName: 'RELAIS',
    distance: 80,
    elevation: 1800,
    description: 'L\'aventure partagee. 80km a deux.',
    longDescription: 'Le Relais Duo permet de partager l\'aventure de l\'Ultra 80km en equipe de deux. Le premier relayeur effectue 47km jusqu\'a Sainte-Helene, ou le second prend le relais pour les 33km restants. Une experience de cohesion unique.',
    startTime: '06:00',
    startLocation: 'Locoal-Mendon (Relayeur 1) / Sainte-Helene (Relayeur 2)',
    price: 120,
    priceEarly: 100,
    maxParticipants: 150,
    gpxTracks: [
      {
        id: 'relais-a',
        name: 'Segment A - Relayeur 1 (47km)',
        file: '/docs/UTR-47-Locoal-saint_hélène.gpx',
        color: '#3a7eb3',
        distance: 47,
        elevation: 1050,
      },
      {
        id: 'relais-b',
        name: 'Segment B - Relayeur 2 (33km)',
        file: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        color: '#e59a42',
        distance: 33,
        elevation: 750,
      },
    ],
    segments: [
      {
        id: 'segment-a',
        name: 'Segment A',
        description: 'Relayeur 1',
        gpxFile: '/docs/UTR-47-Locoal-saint_hélène.gpx',
        distance: 47,
        elevation: 1050,
        startLocation: 'Locoal-Mendon',
        endLocation: 'Sainte-Helene',
      },
      {
        id: 'segment-b',
        name: 'Segment B',
        description: 'Relayeur 2',
        gpxFile: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        distance: 33,
        elevation: 750,
        startLocation: 'Sainte-Helene',
        endLocation: 'Locoal-Mendon',
      },
    ],
    highlights: [
      'Partage de l\'experience en duo',
      'Zone de relais equipee a Sainte-Helene',
      'Suivi GPS des deux equipiers',
      'Classement individuel et par equipe',
    ],
    requirements: [
      'Inscription par equipe de 2',
      'Certificat medical ou licence FFA pour chaque relayeur',
      'Equipement obligatoire identique au solo',
    ],
  },
  {
    id: '30km',
    name: 'Le 30km',
    shortName: '30KM',
    distance: 30,
    elevation: 750,
    description: 'Un format explosif ou decouverte.',
    longDescription: 'Le 30km est le format ideal pour decouvrir l\'univers du trail ou pour les coureurs recherchant un format plus court mais intense. Depart depuis Sainte-Helene, vous rejoindrez Locoal-Mendon par les plus beaux sentiers de la Ria.',
    startTime: '08:30',
    startLocation: 'Sainte-Helene',
    price: 40,
    priceEarly: 35,
    maxParticipants: 600,
    gpxTracks: [
      {
        id: '30km-parcours',
        name: 'Le 30km - Parcours complet',
        file: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        color: '#2a9d5c',
        distance: 30,
        elevation: 750,
      },
    ],
    highlights: [
      'Format accessible a tous niveaux',
      'Depart groupe depuis Sainte-Helene',
      'Ravitaillements au km 10 et km 20',
      'Arrivee festive a Locoal-Mendon',
    ],
    requirements: [
      'Certificat medical ou licence FFA',
      'Ouvert a tous les niveaux',
      'Equipement obligatoire allege',
    ],
  },
]

export function getRaceById(id: RaceFormat): Race | undefined {
  return races.find((race) => race.id === id)
}

export function getAllGpxTracks(): GpxTrack[] {
  return races.flatMap((race) => race.gpxTracks)
}
