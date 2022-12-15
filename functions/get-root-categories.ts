import Category from '../types/Category'
import Categories from '../types/Categories'
import addSlugToCategory from './add-slug-to-category'
import json from '../lore/categories.json'

export default function getRootCategories (categories: Categories = json): Category[] {
  const all = Object.keys(categories)
    .map(slug => addSlugToCategory(categories[slug], slug))
  const roots: Category[] = []
  for (const category of all) {
    let root = true
    const slug = category.slug ?? ''
    for (const other of all) {
      const subcategories = other.subcategories === undefined ? [] : Object.keys(other.subcategories)
      if (subcategories.includes(slug)) root = false
    }
    if (root) roots.push(category)
  }
  return roots
}
