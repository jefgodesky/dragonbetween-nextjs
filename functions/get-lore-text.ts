import Knowledge from '../types/Knowledge'
import LoreIndexEntry from '../types/LoreIndexEntry'
import clear from './clear'

export default function getLoreText (entry: LoreIndexEntry, knowledge: Knowledge): string {
  for (const key of Object.keys(entry.text)) {
    if (key === 'default') return entry.text.default
    if (clear(knowledge, key)) return entry.text[key]
  }
  return ''
}
