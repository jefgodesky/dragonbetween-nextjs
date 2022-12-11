interface Category {
  title: string
  description?: string
  main?: string
  secret?: string
  slug?: string
  subcategories?: string[]
}

const isCategory = (obj: any): obj is Category => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  const { title, description, main, secret, slug, subcategories } = obj
  if (typeof title !== 'string') return false
  if (!(description === undefined || typeof description === 'string')) return false
  if (!(main === undefined || typeof main === 'string')) return false
  if (!(secret === undefined || typeof secret === 'string')) return false
  if (!(slug === undefined || typeof slug === 'string')) return false

  if (subcategories === undefined) return true
  if (!Array.isArray(subcategories)) return false
  const subcatCheck = subcategories
    .map(el => typeof el === 'string')
    .reduce((acc, curr) => acc && curr, true)
  if (!subcatCheck) return false

  return true
}

export default Category
export { isCategory }
