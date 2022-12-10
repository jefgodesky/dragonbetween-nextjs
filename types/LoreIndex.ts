import LoreIndexEntry, { isLoreIndexEntry } from './LoreIndexEntry'

interface LoreIndex {
  [slug: string]: LoreIndexEntry
}

const isLoreIndex = (obj: any): obj is LoreIndex => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  const checkEntries = Object.values(obj)
    .map(entry => isLoreIndexEntry(entry))
    .reduce((acc, curr) => acc && curr, true)
  if (!checkEntries) return false
  return true
}

export default LoreIndex
export { isLoreIndex }
