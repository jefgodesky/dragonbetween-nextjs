import LoreIndexEntry, { isLoreIndexEntry } from './LoreIndexEntry'

interface LoreIndexEntryWithCategories extends LoreIndexEntry {
  categories: {
    [category: string]: string | null
  }
}

const isLoreIndexEntryWithCategories = (obj: any): obj is LoreIndexEntryWithCategories => {
  return isLoreIndexEntry(obj) && obj.categories !== undefined
}

export default LoreIndexEntryWithCategories
export { isLoreIndexEntryWithCategories }
