import Category, { isCategory } from './Category'

interface CategoryWithSubcategories extends Category {
  subcategories: {
    [slug: string]: string | null
  }
}

const isCategoryWithSubcategories = (obj: any): obj is CategoryWithSubcategories => {
  return isCategory(obj) && obj.subcategories !== undefined
}

export default CategoryWithSubcategories
export { isCategoryWithSubcategories }
