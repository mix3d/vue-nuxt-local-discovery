export type SpotCategory = 'cafe' | 'park' | 'shop' | 'event'

export interface Spot {
  id: string
  name: string
  category: SpotCategory
  description: string
  address: string
  neighborhood?: string
  tip?: string
  image?: string
}
