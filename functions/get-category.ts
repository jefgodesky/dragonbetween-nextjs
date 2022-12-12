import Category from '../types/Category'
import Categories from '../types/Categories'
import addSlugToCategory from './add-slug-to-category'
import json from '../lore/categories.json'

export default function getCategory (id: string, index: Categories = json): Category | null {
  if (index[id] !== undefined) return addSlugToCategory(index[id], id)
  for (const key of Object.keys(index)) {
    if (index[key].title === id) return addSlugToCategory(index[key], key)
  }
  return null
}
