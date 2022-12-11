import { isLoreIndexEntryWithCategories } from './LoreIndexEntryWithCategories'

describe('isLoreIndexEntryWithCategories', () => {
  it('returns false if not given a LoreIndexEntry object', () => {
    expect(isLoreIndexEntryWithCategories(null)).toBe(false)
  })

  it('returns false if given a LoreIndexEntry object without categories', () => {
    expect(isLoreIndexEntryWithCategories({ title: 'Test', text: {} })).toBe(false)
  })

  it('returns true if given a LoreIndexEntry object with categories', () => {
    expect(isLoreIndexEntryWithCategories({ title: 'Test', text: {}, categories: {} })).toBe(true)
  })
})
