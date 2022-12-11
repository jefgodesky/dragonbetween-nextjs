import { isLoreIndexEntry } from '../types/LoreIndexEntry'
import addSlugToLoreIndexEntry from './add-slug-to-lore-index-entry'

describe('addSlugToLoreIndexEntry', () => {
  it('adds the slug provided to the lore index entry', () => {
    const actual = addSlugToLoreIndexEntry({ title: 'Test', text: {} }, 'test')
    expect(actual.slug).toBe('test')
  })

  it('is immutable', () => {
    const original = { title: 'Test', text: {} }
    const modified = addSlugToLoreIndexEntry(original, 'test')
    expect(isLoreIndexEntry(modified)).toBe(true)
    expect(modified).not.toBe(original)
  })
})
