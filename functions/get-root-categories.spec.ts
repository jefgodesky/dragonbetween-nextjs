import getRootCategories from './get-root-categories'

describe('getRootCategories', () => {
  const categories = {
    root1: { title: 'Root 1', subcategories: { child1: null, child2: null } },
    root2: { title: 'Root 2' },
    child1: { title: 'Child 1' },
    child2: { title: 'Child 2' }
  }
  it('returns root categories', () => {
    const actual = getRootCategories(categories).map(category => category.slug)
    expect(actual.join(' ')).toEqual('root1 root2')
  })
})
