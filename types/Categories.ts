import Category, { isCategory } from './Category'

interface Categories {
  [slug: string]: Category
}

const isCategories = (obj: any): obj is Categories => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  return Object.values(obj)
    .map(entry => isCategory(entry))
    .reduce((acc, curr) => acc && curr, true)
}

export default Categories
export { isCategories }
