import Knowledge from '../types/Knowledge'
import LoreIndex from '../types/LoreIndex'
import LoreIndexEntry from '../types/LoreIndexEntry'
import getLoreText from './get-lore-text'
import renderSecrets from './render-secrets'
import renderWikiLinks from './render-wiki-links'
import renderMarkdown from './render-markdown'
import json from '../lore/index.json'

export default async function renderLoreText (entry: LoreIndexEntry, knowledge: Knowledge, index: LoreIndex = json): Promise<string> {
  const text = getLoreText(entry, knowledge)
  const wSecrets = renderSecrets(text, knowledge)
  const wLinks = renderWikiLinks(wSecrets, knowledge, index)
  return await renderMarkdown(wLinks)
}
