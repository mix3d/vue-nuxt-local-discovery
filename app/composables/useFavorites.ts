const STORAGE_KEY = 'local-discovery-favorites'

export function useFavorites() {
  const favoriteIds = useState<string[]>(STORAGE_KEY, () => {
    if (import.meta.client) {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
      } catch {
        return []
      }
    }
    return []
  })

  function toggle(id: string) {
    if (!import.meta.client) return
    const idx = favoriteIds.value.indexOf(id)
    if (idx === -1) favoriteIds.value = [...favoriteIds.value, id]
    else favoriteIds.value = favoriteIds.value.filter((x) => x !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds.value))
  }

  function isFavorite(id: string) {
    return favoriteIds.value.includes(id)
  }

  return { favoriteIds, toggle, isFavorite }
}
