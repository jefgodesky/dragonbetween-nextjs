interface LoreIndexEntry {
  title: string
  slug?: string
  sort?: string
  secret?: string
  description?: string
  image?: string
  text: {
    [secret: string]: string
  }
  categories?: {
    [category: string]: string | null
  }
}

const isLoreIndexEntry = (obj: any): obj is LoreIndexEntry => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  const { title, slug, sort, secret, description, image, text, categories } = obj
  if (typeof title !== 'string') return false
  if (!(slug === undefined || typeof slug === 'string')) return false
  if (!(sort === undefined || typeof sort === 'string')) return false
  if (!(secret === undefined || typeof secret === 'string')) return false
  if (!(description === undefined || typeof description === 'string')) return false
  if (!(image === undefined || typeof image === 'string')) return false

  if (text === null) return false
  if (typeof text !== 'object' || Array.isArray(text)) return false
  const textCheck = Object.values(text)
    .map(text => typeof text === 'string')
    .reduce((acc, curr) => acc && curr, true)
  if (!textCheck) return false

  if (categories === undefined) return true
  if (categories === null) return false
  if (typeof categories !== 'object' || Array.isArray(categories)) return false
  const catsCheck = Object.values(categories)
    .map(cat => (cat === null || typeof cat === 'string'))
    .reduce((acc, curr) => acc && curr, true)
  if (!catsCheck) return false

  return true
}

export default LoreIndexEntry
export { isLoreIndexEntry }
