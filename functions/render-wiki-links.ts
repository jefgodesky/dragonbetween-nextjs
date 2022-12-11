import Knowledge from '../types/Knowledge'
import LoreIndex from '../types/LoreIndex'
import connectWikiLink from './connect-wiki-link'
import findWikiLinks from './find-wiki-links'
import json from '../lore/index.json'

export default function renderWikiLinks (orig: string, knowledge: Knowledge, index: LoreIndex = json): string {
  let working = orig
  const links = findWikiLinks(orig).map(link => connectWikiLink(link, knowledge, index))
  for (const link of links) {
    const { display, slug, orig } = link
    if (orig === undefined) continue
    const replacement = slug === undefined ? display : `[${display}](/lore/${slug})`
    working = working.replace(orig, replacement)
  }
  return working
}
