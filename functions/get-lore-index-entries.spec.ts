import getLoreIndexEntries from './get-lore-index-entries'

describe('getLoreIndexEntries', () => {
  const index = {
    test1: { title: 'Test 1', text: {} },
    test2: { title: 'Test 2', text: {} },
    test3: { title: 'Test 3', text: {}, secret: 'Test3' },
    test4: { title: 'Test 4', text: {}, secret: 'Test4' }
  }

  it('returns all non-secret entries if you know nothing', () => {
    const actual = getLoreIndexEntries({}, index).map(entry => entry.slug).join(' ')
    expect(actual).toBe('test1 test2')
  })

  it('returns entries that you know about', () => {
    const actual = getLoreIndexEntries({ Test3: true }, index).map(entry => entry.slug).join(' ')
    expect(actual).toBe('test1 test2 test3')
  })
})
