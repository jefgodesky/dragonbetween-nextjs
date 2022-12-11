import LoreIndexEntry, { isLoreIndexEntry } from '../types/LoreIndexEntry'
import getLoreIndexEntriesInCategory from './get-lore-index-entries-in-category'

describe('getLoreIndexEntriesInCategory', () => {
  const index = {
    uncategorized: { title: 'Uncategorized Entry', text: {} },
    'in-cat1': { title: 'In First Category', text: {}, categories: { cat1: null } },
    'in-cat2': { title: 'In Second Category', text: {}, categories: { cat2: null } },
    'in-cat12': { title: 'In First & Second Categories', text: {}, categories: { cat1: null, cat2: null } },
    'secret-cat1': { title: 'Secretly in First Category', text: {}, categories: { cat1: 'TestSecret' } },
    'cat2-secret': { title: 'Secret in Second Category', text: {}, categories: { cat2: null }, secret: 'TestSecret' }
  }
  const cat1 = { title: 'First Category', slug: 'cat1' }
  const cat2 = { title: 'Second Category', slug: 'cat2' }
  const unslugged = { title: 'Unslugged Category' }

  const expectEntires = (actual: any, entries: string[]): void => {
    expect(Array.isArray(actual)).toBe(true)
    expect(actual).toHaveLength(entries.length)
    for (const entry of actual) expect(isLoreIndexEntry(entry)).toBe(true)
    expect(actual.map((entry: LoreIndexEntry) => entry.slug).join(' ')).toEqual(entries.join(' '))
  }

  it('returns an empty arry if the category has no slug', () => {
    const actual = getLoreIndexEntriesInCategory(unslugged, index, {})
    expect(JSON.stringify(actual)).toEqual('[]')
  })

  it('returns the pages in a category that you know about', () => {
    const actual = getLoreIndexEntriesInCategory(cat1, index, {})
    expectEntires(actual, ['in-cat1', 'in-cat12'])
  })

  it('returns pages that are secretly in a category if you know that', () => {
    const actual = getLoreIndexEntriesInCategory(cat1, index, { TestSecret: true })
    expectEntires(actual, ['in-cat1', 'in-cat12', 'secret-cat1'])
  })

  it('returns secret pages that you know about in a category', () => {
    const actual = getLoreIndexEntriesInCategory(cat2, index, { TestSecret: true })
    expectEntires(actual, ['in-cat2', 'in-cat12', 'cat2-secret'])
  })
})
