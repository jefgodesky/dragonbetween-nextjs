interface Category {
  title: string
  sort?: string
  description?: string
  main?: string
  secret?: string
  slug?: string
  subcategories?: {
    [slug: string]: string | null
  }
}

const isCategory = (obj: any): obj is Category => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  const { title, sort, description, main, secret, slug, subcategories } = obj
  if (typeof title !== 'string') return false
  if (sort !== undefined && typeof sort !== 'string') return false
  if (description !== undefined && typeof description !== 'string') return false
  if (main !== undefined && typeof main !== 'string') return false
  if (secret !== undefined && typeof secret !== 'string') return false
  if (slug !== undefined && typeof slug !== 'string') return false

  if (subcategories === undefined) return true
  if (subcategories === null) return false
  if (typeof subcategories !== 'object' || Array.isArray(subcategories)) return false
  const checkCats = Object.values(subcategories)
    .map(val => val === null || typeof val === 'string')
    .reduce((acc, curr) => acc && curr, true)
  return checkCats
}

export default Category
export { isCategory }
