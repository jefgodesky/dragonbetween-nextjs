import rfdc from 'rfdc'
import LoreIndexEntry from '../types/LoreIndexEntry'

const clone = rfdc()

export default function addSlugToLoreIndexEntry (entry: LoreIndexEntry, slug: string): LoreIndexEntry {
  const working = clone(entry)
  working.slug = slug
  return working
}
