import Category from '../types/Category'
import Categories from '../types/Categories'
import Knowledge from '../types/Knowledge'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToCategory from './add-slug-to-category'
import getLoreIndexEntryListedCategories from './get-lore-index-entry-listed-categories'
import clear from './clear'
import json from '../lore/categories.json'

export default function getLoreIndexEntryCategories (entry: LoreIndexEntry, knowledge: Knowledge, categories: Categories = json): Category[] {
  const all = Object.keys(categories).map(slug => addSlugToCategory(categories[slug], slug))
  const listed = getLoreIndexEntryListedCategories(entry, knowledge, categories)
  const implicitMains = entry.slug === undefined ? [] : all.filter(cat => cat.slug === entry.slug && cat.main === undefined)
  const explicitMains = entry.slug === undefined ? [] : all.filter(cat => cat.main === entry.slug)
  const combined = [...implicitMains, ...explicitMains, ...listed]
  return combined.filter(cat => cat.secret === undefined || clear(knowledge, cat.secret))
}
