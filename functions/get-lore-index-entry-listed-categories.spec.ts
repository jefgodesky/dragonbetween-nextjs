import { isCategory } from '../types/Category'
import getLoreIndexEntryListedCategories from './get-lore-index-entry-listed-categories'

describe('getLoreIndexEntryListedCategories', () => {
  const expectSingleCat = (actual: any, title: string): void => {
    expect(Array.isArray(actual)).toBe(true)
    expect(actual).toHaveLength(1)
    expect(isCategory(actual[0])).toBe(true)
    expect(actual[0].title).toBe(title)
  }

  it('returns categories listed', () => {
    const categories = { 'test-cat': { title: 'Test Category' } }
    const entry = { title: 'Test', text: {}, categories: { 'test-cat': null } }
    const actual = getLoreIndexEntryListedCategories(entry, categories, {})
    expectSingleCat(actual, categories['test-cat'].title)
  })

  it('doesn\'t return categories that are secret', () => {
    const categories = { 'test-cat': { title: 'Test Category' } }
    const entry = { title: 'Test', text: {}, categories: { 'test-cat': 'TestSecret' } }
    const actual = getLoreIndexEntryListedCategories(entry, categories, {})
    expect(actual).toHaveLength(0)
  })

  it('returns categories that are secrets you know', () => {
    const categories = { 'test-cat': { title: 'Test Category' } }
    const entry = { title: 'Test', text: {}, categories: { 'test-cat': 'TestSecret' } }
    const actual = getLoreIndexEntryListedCategories(entry, categories, { TestSecret: true })
    expectSingleCat(actual, categories['test-cat'].title)
  })

  it('doesn\'t return secret categories', () => {
    const categories = { 'test-cat': { title: 'Test Category', secret: 'TestSecret' } }
    const entry = { title: 'Test', text: {}, categories: { 'test-cat': null } }
    const actual = getLoreIndexEntryListedCategories(entry, categories, {})
    expect(actual).toHaveLength(0)
  })

  it('returns categories that are secrets you know', () => {
    const categories = { 'test-cat': { title: 'Test Category', secret: 'TestSecret' } }
    const entry = { title: 'Test', text: {}, categories: { 'test-cat': null } }
    const actual = getLoreIndexEntryListedCategories(entry, categories, { TestSecret: true })
    expectSingleCat(actual, categories['test-cat'].title)
  })
})
