import Knowledge from '../types/Knowledge'
import LoreIndex from '../types/LoreIndex'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'
import clear from './clear'
import json from '../lore/index.json'

export default function getLoreIndexEntries (knowledge: Knowledge, index: LoreIndex = json): LoreIndexEntry[] {
  return Object.keys(index)
    .map(slug => addSlugToLoreIndexEntry(index[slug], slug))
    .filter(entry => entry.secret === undefined || clear(knowledge, entry.secret))
}
