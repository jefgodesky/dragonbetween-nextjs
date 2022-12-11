import WikiLink from '../types/WikiLink'
import findWikiLinks from './find-wiki-links'

export default function processWikiLinks (text: string, fn: (text: string, link: WikiLink) => void): void {
  const links = findWikiLinks(text)
  for (const link of links) { fn(text, link) }
}
