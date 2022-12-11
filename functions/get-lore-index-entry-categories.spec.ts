import getLoreIndexEntryCategories from './get-lore-index-entry-categories'

describe('getLoreIndexEntryCategories', () => {
  const categories = {
    test1: { title: 'First Test Category' },
    test2: { title: 'Secret Test Category', secret: 'TestSecret' },
    test3: { title: 'Third Test Category', main: 'test3' },
    test4: { title: 'Second Secret Test Category', main: 'test4', secret: 'TestSecret' }
  }

  it('returns the categories that an entry lists', () => {
    const entry = { title: 'Test', text: {}, categories: { test1: null } }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test1')
  })

  it('excludes unknown secret categories', () => {
    const entry = { title: 'Test', text: {}, categories: { test1: 'TestSecret' } }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('')
  })

  it('includes secret categories if you know the secret', () => {
    const entry = { title: 'Test', text: {}, categories: { test1: 'TestSecret' } }
    const actual = getLoreIndexEntryCategories(entry, { TestSecret: true }, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test1')
  })

  it('excludes secret categories', () => {
    const entry = { title: 'Test', text: {}, categories: { test1: null, test2: null } }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test1')
  })

  it('includes secret categories if you know the secret', () => {
    const entry = { title: 'Test', text: {}, categories: { test1: null, test2: null } }
    const actual = getLoreIndexEntryCategories(entry, { TestSecret: true }, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test1, test2')
  })

  it('includes categories the entry is implicitly the main for', () => {
    const entry = { title: 'Test', slug: 'test1', text: {} }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test1')
  })

  it('doesn\'t inlcude categories the entry is implicitly the main for if it\'s secret', () => {
    const entry = { title: 'Test', slug: 'test2', text: {} }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('')
  })

  it('includes categories the entry is implicitly the main for if it\'s a secret you know', () => {
    const entry = { title: 'Test', slug: 'test2', text: {} }
    const actual = getLoreIndexEntryCategories(entry, { TestSecret: true }, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test2')
  })

  it('includes categories the entry is explicitly the main for', () => {
    const entry = { title: 'Test', slug: 'test3', text: {} }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test3')
  })

  it('doesn\'t include categories the entry is explicitly the main for if it\s a secret', () => {
    const entry = { title: 'Test', slug: 'test4', text: {} }
    const actual = getLoreIndexEntryCategories(entry, {}, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('')
  })

  it('includes categories the entry is explicitly the main for if it\s a secret you know', () => {
    const entry = { title: 'Test', slug: 'test4', text: {} }
    const actual = getLoreIndexEntryCategories(entry, { TestSecret: true }, categories)
    expect(actual.map(cat => cat.slug).join(', ')).toBe('test4')
  })
})
