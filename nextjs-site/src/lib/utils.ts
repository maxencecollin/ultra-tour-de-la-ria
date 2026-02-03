// Base path for assets (GitHub Pages deployment)
export const basePath = process.env.NODE_ENV === 'production' ? '/ultra-tour-de-la-ria' : ''

// Helper to get asset URL with base path
export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
