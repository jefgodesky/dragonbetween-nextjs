import Category from '../types/Category'
import Knowledge from '../types/Knowledge'
import LoreIndex from '../types/LoreIndex'
import LoreIndexEntry from '../types/LoreIndexEntry'
import { isLoreIndexEntryWithCategories } from '../types/LoreIndexEntryWithCategories'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'
import clear from './clear'
import json from '../lore/index.json'

export default function getLoreIndexEntriesInCategory (category: Category, knowledge: Knowledge, index: LoreIndex = json): LoreIndexEntry[] {
  const { slug } = category
  if (slug === undefined) return []
  return Object.keys(index)
    .map(slug => addSlugToLoreIndexEntry(index[slug], slug))
    .filter(isLoreIndexEntryWithCategories)
    .filter(entry => Object.keys(entry.categories).includes(slug))
    .filter(entry => entry.secret === undefined || clear(knowledge, entry.secret))
    .filter(entry => clear(knowledge, entry.categories[slug] ?? 'true'))
}
