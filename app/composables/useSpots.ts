import { spots, categoryLabels } from '~/data/spots'
import type { Spot, SpotCategory } from '~/types/spot'

export function useSpots() {
  function getByCategory(category: SpotCategory | null): Spot[] {
    if (!category) return spots
    return spots.filter((s) => s.category === category)
  }

  function getById(id: string): Spot | undefined {
    return spots.find((s) => s.id === id)
  }

  return { spots, categoryLabels, getByCategory, getById }
}
