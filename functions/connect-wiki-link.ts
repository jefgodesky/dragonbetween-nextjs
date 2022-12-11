import rfdc from 'rfdc'
import Knowledge from '../types/Knowledge'
import LoreIndex from '../types/LoreIndex'
import WikiLink from '../types/WikiLink'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'
import clear from './clear'
import json from '../lore/index.json'

const clone = rfdc()

const addSlug = (link: WikiLink, slug: string): WikiLink => {
  const working = clone(link)
  working.slug = slug
  return working
}

export default function connectWikiLink (link: WikiLink, knowledge: Knowledge, index: LoreIndex = json): WikiLink {
  const { id } = link
  if (index[id] !== undefined && clear(knowledge, index[id].secret ?? 'true')) return addSlug(link, id)
  const titleMatches = Object.keys(index)
    .map(slug => addSlugToLoreIndexEntry(index[slug], slug))
    .filter(entry => entry.title === id)
    .filter(entry => entry.slug !== undefined)
    .filter(entry => clear(knowledge, entry.secret ?? 'true'))
  if (titleMatches.length > 0) return addSlug(link, titleMatches[0].slug ?? '')
  return clone(link)
}
