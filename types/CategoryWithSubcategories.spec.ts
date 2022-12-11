import { isCategoryWithSubcategories } from './CategoryWithSubcategories'

describe('isCategoryWithSubcategories', () => {
  it('returns false if not given a Category object', () => {
    expect(isCategoryWithSubcategories(null)).toBe(false)
  })

  it('returns false if given a Category object without categories', () => {
    expect(isCategoryWithSubcategories({ title: 'Test' })).toBe(false)
  })

  it('returns true if given a Category object with subcategories', () => {
    expect(isCategoryWithSubcategories({ title: 'Test', subcategories: {} })).toBe(true)
  })
})
