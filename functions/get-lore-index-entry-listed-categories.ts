import Category from '../types/Category'
import Categories from '../types/Categories'
import Knowledge from '../types/Knowledge'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToCategory from './add-slug-to-category'
import clear from './clear'
import json from '../lore/categories.json'

export default function getLoreIndexEntryListedCategories (entry: LoreIndexEntry, knowledge: Knowledge, categories: Categories = json): Category[] {
  const cats = entry.categories === undefined ? {} : entry.categories
  return Object.keys(cats)
    .filter(cat => clear(knowledge, cats[cat] ?? 'true'))
    .map(slug => addSlugToCategory(categories[slug], slug))
    .filter(cat => cat.secret === undefined || clear(knowledge, cat.secret))
}
