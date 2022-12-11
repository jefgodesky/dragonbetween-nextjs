import LoreIndex from '../types/LoreIndex'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'

export default function getLoreIndexEntry (index: LoreIndex, id: string): LoreIndexEntry | null {
  if (index[id] !== undefined) return addSlugToLoreIndexEntry(index[id], id)
  for (const key of Object.keys(index)) {
    if (index[key].title === id) return addSlugToLoreIndexEntry(index[key], key)
  }
  return null
}
