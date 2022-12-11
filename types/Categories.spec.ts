import { isCategories } from './Categories'

describe('isCategories', () => {
  it('returns false if given null', () => {
    expect(isCategories(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isCategories(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isCategories(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isCategories(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isCategories(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isCategories('test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isCategories([1, 2, 3])).toBe(false)
  })

  it('returns true if given an empty array', () => {
    expect(isCategories({})).toBe(true)
  })

  it('returns false if given null as a category', () => {
    expect(isCategories({ test: null })).toBe(false)
  })

  it('returns false if given undefined as a category', () => {
    expect(isCategories({ test: undefined })).toBe(false)
  })

  it('returns false if given true as a category', () => {
    expect(isCategories({ test: true })).toBe(false)
  })

  it('returns false if given false as a category', () => {
    expect(isCategories({ test: false })).toBe(false)
  })

  it('returns false if given a number as a category', () => {
    expect(isCategories({ test: 1 })).toBe(false)
  })

  it('returns false if given a string as a category', () => {
    expect(isCategories({ test: 'test' })).toBe(false)
  })

  it('returns false if given an array as a category', () => {
    expect(isCategories({ test: [1, 2, 3] })).toBe(false)
  })

  it('returns false if given an empty object as a category', () => {
    expect(isCategories({ test: {} })).toBe(false)
  })

  it('returns true if given a Category as a category', () => {
    expect(isCategories({ test: { title: 'Test' } })).toBe(true)
  })
})
