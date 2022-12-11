import Category, { isCategory } from '../types/Category'
import getParentCategories from './get-parent-categories'

describe('getParentCategories', () => {
  const categories = {
    cat1: { title: 'Category 1', slug: 'cat1', subcategories: { cat2: null, cat3: 'Cat3IsChildOfCat1', cat4: null } },
    cat2: { title: 'Category 2', slug: 'cat2' },
    cat3: { title: 'Category 3', slug: 'cat3' },
    cat4: { title: 'Category 4', slug: 'cat4', secret: 'Cat4Exists', subcategories: { cat5: null } },
    cat5: { title: 'Category 5', slug: 'cat5', subcategories: { cat3: null } }
  }

  const expectCategories = (actual: any, slugs: string[]): void => {
    expect(Array.isArray(actual)).toBe(true)
    expect(actual).toHaveLength(slugs.length)
    for (const cat of actual) expect(isCategory(cat)).toBe(true)
    expect(actual.map((cat: Category) => cat.slug).join(' ')).toEqual(slugs.join(' '))
  }

  it('returns an empty array if given a category with no slug', () => {
    const actual = getParentCategories({ title: 'Unslugged' }, {}, categories)
    expect(JSON.stringify(actual)).toEqual('[]')
  })

  it('returns parent categories', () => {
    const actual = getParentCategories(categories.cat3, {}, categories)
    expectCategories(actual, ['cat5'])
  })

  it('returns secret parent categories if you know about them', () => {
    const actual = getParentCategories(categories.cat3, { Cat3IsChildOfCat1: true }, categories)
    expectCategories(actual, ['cat1', 'cat5'])
  })

  it('doesn\'t return parent categories if you don\'t know about', () => {
    const actual = getParentCategories(categories.cat5, {}, categories)
    expectCategories(actual, [])
  })

  it('returns parent categories if you know about them', () => {
    const actual = getParentCategories(categories.cat5, { Cat4Exists: true }, categories)
    expectCategories(actual, ['cat4'])
  })
})
