import Category, { isCategory } from '../types/Category'
import Categories from '../types/Categories'
import Knowledge from '../types/Knowledge'
import addSlugToCategory from './add-slug-to-category'
import clear from './clear'
import json from '../lore/categories.json'

export default function getSubcategories (category: Category, knowledge: Knowledge, categories: Categories = json): Category[] {
  const { subcategories } = category
  if (subcategories === undefined) return []
  return Object.keys(subcategories)
    .filter(slug => clear(knowledge, subcategories[slug] ?? 'true'))
    .filter(slug => isCategory(categories[slug]))
    .map(slug => addSlugToCategory(categories[slug], slug))
    .filter(category => clear(knowledge, category.secret ?? 'true'))
}
