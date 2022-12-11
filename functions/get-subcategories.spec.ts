import Category, { isCategory } from '../types/Category'
import getSubcategories from './get-subcategories'

describe('getSubcategories', () => {
  const categories = {
    parent: { title: 'Parent Category', subcategories: { child1: null, child2: null, child3: 'Child3IsChild' } },
    child1: { title: 'First Child' },
    child2: { title: 'Second Child', secret: 'Child2Exists' },
    child3: { title: 'Third Child' }
  }

  const expectCategories = (actual: any, slugs: string[]): void => {
    expect(Array.isArray(actual)).toBe(true)
    expect(actual).toHaveLength(slugs.length)
    for (const category of actual) expect(isCategory(category)).toBe(true)
    expect(actual.map((cat: Category) => cat.slug).join(' ')).toEqual(slugs.join(' '))
  }

  it('returns subcategories', () => {
    const actual = getSubcategories(categories.parent, {}, categories)
    expectCategories(actual, ['child1'])
  })

  it('returns subcategories if you know about them', () => {
    const actual = getSubcategories(categories.parent, { Child2Exists: true }, categories)
    expectCategories(actual, ['child1', 'child2'])
  })

  it('returns secret subcategories if you know about them', () => {
    const actual = getSubcategories(categories.parent, { Child3IsChild: true }, categories)
    expectCategories(actual, ['child1', 'child3'])
  })
})
