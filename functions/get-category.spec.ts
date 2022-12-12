import { isCategory } from '../types/Category'
import getCategory from './get-category'

describe('getCategory', () => {
  const categories = {
    test: { title: 'Test Title' }
  }

  it('finds a category by slug', () => {
    const actual = getCategory('test', categories)
    expect(isCategory(actual)).toBe(true)
    expect(actual?.title).toBe(categories.test.title)
    expect(actual?.slug).toBe('test')
  })

  it('finds a category by title', () => {
    const actual = getCategory(categories.test.title, categories)
    expect(isCategory(actual)).toBe(true)
    expect(actual?.title).toBe(categories.test.title)
    expect(actual?.slug).toBe('test')
  })

  it('returns null if nothing matches', () => {
    const actual = getCategory('nope', categories)
    expect(actual).toBeNull()
  })
})
