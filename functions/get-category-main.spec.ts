import { isLoreIndexEntry } from '../types/LoreIndexEntry'
import getCategoryMain from './get-category-main'

describe('getCategoryMain', () => {
  const index = {
    test1: { title: 'First Test', text: {} },
    test2: { title: 'Second Test', text: {} },
    test3: { title: 'Third Test', text: {} }
  }

  it('returns the explicit main', () => {
    const actual = getCategoryMain({ title: 'First Test', main: 'test1' }, index)
    expect(isLoreIndexEntry(actual)).toBe(true)
    expect(actual?.slug).toBe('test1')
  })

  it('returns the implicit main', () => {
    const actual = getCategoryMain({ title: 'Second Test', slug: 'test2' }, index)
    expect(isLoreIndexEntry(actual)).toBe(true)
    expect(actual?.slug).toBe('test2')
  })

  it('returns null if no main is provided', () => {
    const actual = getCategoryMain({ title: 'Third Test' }, index)
    expect(actual).toBeNull()
  })

  it('returns null if no main is found', () => {
    const actual = getCategoryMain({ title: 'Fourth Test', main: 'test4' }, index)
    expect(actual).toBeNull()
  })
})
