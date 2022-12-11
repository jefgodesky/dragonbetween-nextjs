import { isCategory } from '../types/Category'
import addSlugToCategory from './add-slug-to-category'

describe('addSlugToCategory', () => {
  it('adds the slug provided to the category', () => {
    const actual = addSlugToCategory({ title: 'Test' }, 'test')
    expect(actual.slug).toBe('test')
  })

  it('is immutable', () => {
    const original = { title: 'Test' }
    const modified = addSlugToCategory(original, 'test')
    expect(isCategory(modified)).toBe(true)
    expect(modified).not.toBe(original)
  })
})
