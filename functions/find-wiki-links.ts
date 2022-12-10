import WikiLink from '../types/WikiLink'
import parseWikiLink, { wikiLinkRegex } from './parse-wiki-link'

export default function findWikiLinks (orig: string): WikiLink[] {
  const links: WikiLink[] = []
  const regex = new RegExp(wikiLinkRegex.source, wikiLinkRegex.flags + 'g')
  for (const instance of orig.match(regex) ?? []) {
    const link = parseWikiLink(instance)
    if (link !== null) links.push(link)
  }
  return links
}
