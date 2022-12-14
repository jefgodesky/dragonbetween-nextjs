import Category from '../types/Category'
import LoreIndex from '../types/LoreIndex'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'
import json from '../lore/index.json'

export default function getCategoryMain (category: Category, index: LoreIndex = json): LoreIndexEntry | null {
  const main = category.main ?? category.slug
  if (main === undefined) return null
  if (index[main] !== undefined) return addSlugToLoreIndexEntry(index[main], main)
  return null
}
