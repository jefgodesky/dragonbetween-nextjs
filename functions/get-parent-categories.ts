import Category from '../types/Category'
import { isCategoryWithSubcategories } from '../types/CategoryWithSubcategories'
import Categories from '../types/Categories'
import Knowledge from '../types/Knowledge'
import addSlugToCategory from './add-slug-to-category'
import clear from './clear'
import json from '../lore/categories.json'

export default function getParentCategories (category: Category, knowledge: Knowledge, categories: Categories = json): Category[] {
  const { slug } = category
  if (slug === undefined) return []
  return Object.keys(categories)
    .map(slug => addSlugToCategory(categories[slug], slug))
    .filter(isCategoryWithSubcategories)
    .filter(cat => Object.keys(cat.subcategories).includes(slug))
    .filter(cat => clear(knowledge, cat.subcategories[slug] ?? 'true'))
    .filter(cat => clear(knowledge, cat.secret ?? 'true'))
}
