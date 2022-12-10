interface Secret {
  condition: string
  orig?: string
  text: string
}

const isSecret = (obj: any): obj is Secret => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  if (typeof obj.condition !== 'string') return false
  if (!(obj.orig === undefined || typeof obj.orig === 'string')) return false
  if (typeof obj.text !== 'string') return false
  return true
}

export default Secret
export { isSecret }
