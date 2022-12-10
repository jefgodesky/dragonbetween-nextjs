interface WikiLink {
  id: string
  display: string
}

const isWikiLink = (obj: any): obj is WikiLink => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  if (typeof obj.id !== 'string') return false
  if (typeof obj.display !== 'string') return false
  return true
}

export default WikiLink
export { isWikiLink }
