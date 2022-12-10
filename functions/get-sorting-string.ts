import LoreIndexEntry from '../types/LoreIndexEntry'

export default function getSortingString (entry: LoreIndexEntry): string {
  if (entry.sort !== undefined) return entry.sort
  return entry.title
}
