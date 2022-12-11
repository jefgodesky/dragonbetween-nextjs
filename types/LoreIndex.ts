import LoreIndexEntry, { isLoreIndexEntry } from './LoreIndexEntry'

interface LoreIndex {
  [slug: string]: LoreIndexEntry
}

const isLoreIndex = (obj: any): obj is LoreIndex => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  return Object.values(obj)
    .map(entry => isLoreIndexEntry(entry))
    .reduce((acc, curr) => acc && curr, true)
}

export default LoreIndex
export { isLoreIndex }
