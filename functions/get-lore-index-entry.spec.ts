import { isLoreIndexEntry } from '../types/LoreIndexEntry'
import getLoreIndexEntry from './get-lore-index-entry'

describe('getLoreIndexEntry', () => {
  const index = {
    test: { title: 'Test Title', text: {} }
  }

  it('finds an entry by slug', () => {
    const actual = getLoreIndexEntry('test', index)
    expect(isLoreIndexEntry(actual)).toBe(true)
    expect(actual?.title).toBe(index.test.title)
    expect(actual?.slug).toBe('test')
  })

  it('finds an entry by title', () => {
    const actual = getLoreIndexEntry(index.test.title, index)
    expect(isLoreIndexEntry(actual)).toBe(true)
    expect(actual?.title).toBe(index.test.title)
    expect(actual?.slug).toBe('test')
  })

  it('returns null if nothing matches', () => {
    const actual = getLoreIndexEntry('nope', index)
    expect(actual).toBeNull()
  })
})
