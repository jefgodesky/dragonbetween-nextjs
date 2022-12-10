import rfdc from 'rfdc'
import { isLoreIndexEntry } from './LoreIndexEntry'

describe('isLoreIndexEntry', () => {
  const clone = rfdc()
  const min = { title: 'Test', text: {}, categories: {} }
  let cpy: any

  beforeEach(() => { cpy = clone(min) })

  it('returns true if it meets minimum requirements', () => {
    expect(isLoreIndexEntry(min)).toBe(true)
  })

  it('returns false if given null', () => {
    expect(isLoreIndexEntry(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isLoreIndexEntry(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isLoreIndexEntry(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isLoreIndexEntry(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isLoreIndexEntry(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isLoreIndexEntry('Test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isLoreIndexEntry([1, 2, 3])).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isLoreIndexEntry({})).toBe(false)
  })

  it('returns false if given null for title', () => {
    cpy.title = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given undefined for title', () => {
    cpy.title = undefined
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given true for title', () => {
    cpy.title = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given false for title', () => {
    cpy.title = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given a number for title', () => {
    cpy.title = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an array for title', () => {
    cpy.title = min.title.split('')
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an object for title', () => {
    cpy.title = { title: min.title }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given null for sort', () => {
    cpy.sort = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given undefined for sort', () => {
    cpy.sort = undefined
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given true for sort', () => {
    cpy.sort = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given false for sort', () => {
    cpy.sort = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given a number for sort', () => {
    cpy.sort = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given a string for sort', () => {
    cpy.sort = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given an array for sort', () => {
    cpy.sort = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an object for sort', () => {
    cpy.sort = { text: 'test' }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given null for secret', () => {
    cpy.secret = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given undefined for secret', () => {
    cpy.secret = undefined
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given true for secret', () => {
    cpy.secret = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given false for secret', () => {
    cpy.secret = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given a number for secret', () => {
    cpy.secret = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given a string for secret', () => {
    cpy.secret = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given an array for secret', () => {
    cpy.secret = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an object for secret', () => {
    cpy.secret = { text: 'test' }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given null for description', () => {
    cpy.description = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given undefined for description', () => {
    cpy.description = undefined
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given true for description', () => {
    cpy.description = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given false for description', () => {
    cpy.description = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given a number for description', () => {
    cpy.description = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given a string for description', () => {
    cpy.description = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given an array for description', () => {
    cpy.description = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an object for description', () => {
    cpy.description = { text: 'test' }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given null for image', () => {
    cpy.image = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given undefined for image', () => {
    cpy.image = undefined
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given true for image', () => {
    cpy.image = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given false for image', () => {
    cpy.image = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given a number for image', () => {
    cpy.image = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if given a string for image', () => {
    cpy.image = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if given an array for image', () => {
    cpy.image = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if given an object for image', () => {
    cpy.image = { text: 'test' }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is not provided', () => {
    delete cpy.text
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is null', () => {
    cpy.text = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is undefined', () => {
    cpy.text = undefined
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is true', () => {
    cpy.text = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is false', () => {
    cpy.text = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is a number', () => {
    cpy.text = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is a string', () => {
    cpy.text = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if text is an array', () => {
    cpy.text = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if text is an empty object', () => {
    cpy.text = {}
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if a text property is null', () => {
    cpy.text = { test: null }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a text property is undefined', () => {
    cpy.text = { test: undefined }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a text property is true', () => {
    cpy.text = { test: true }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a text property is false', () => {
    cpy.text = { test: false }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a text property is a number', () => {
    cpy.text = { test: 1 }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if a text property is a string', () => {
    cpy.text = { test: 'Test' }
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if a text property is an array', () => {
    cpy.text = { test: ['T', 'e', 's', 't'] }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a text property is an object', () => {
    cpy.text = { test: { text: 'Test' } }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is not provided', () => {
    delete cpy.categories
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is null', () => {
    cpy.categories = null
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is undefined', () => {
    cpy.categories = undefined
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is true', () => {
    cpy.categories = true
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is false', () => {
    cpy.categories = false
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is a number', () => {
    cpy.categories = 1
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is a string', () => {
    cpy.categories = 'Test'
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if categories is an array', () => {
    cpy.categories = ['T', 'e', 's', 't']
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if categories is an empty object', () => {
    cpy.categories = {}
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns true if a categories property is null', () => {
    cpy.categories = { test: null }
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if a categories property is undefined', () => {
    cpy.categories = { test: undefined }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a categories property is true', () => {
    cpy.categories = { test: true }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a categories property is false', () => {
    cpy.categories = { test: false }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a categories property is a number', () => {
    cpy.categories = { test: 1 }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns true if a categories property is a string', () => {
    cpy.categories = { test: 'Test' }
    expect(isLoreIndexEntry(cpy)).toBe(true)
  })

  it('returns false if a categories property is an array', () => {
    cpy.categories = { test: ['T', 'e', 's', 't'] }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })

  it('returns false if a categories property is an object', () => {
    cpy.categories = { test: { text: 'Test' } }
    expect(isLoreIndexEntry(cpy)).toBe(false)
  })
})
