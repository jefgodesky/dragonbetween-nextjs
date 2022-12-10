import { isLoreIndex } from './LoreIndex'

describe('isLoreIndex', () => {
  it('returns false if given null', () => {
    expect(isLoreIndex(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isLoreIndex(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isLoreIndex(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isLoreIndex(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isLoreIndex(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isLoreIndex('test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isLoreIndex([1, 2, 3])).toBe(false)
  })

  it('returns true if given an empty array', () => {
    expect(isLoreIndex({})).toBe(true)
  })

  it('returns false if given null as an entry', () => {
    expect(isLoreIndex({ test: null })).toBe(false)
  })

  it('returns false if given undefined as an entry', () => {
    expect(isLoreIndex({ test: undefined })).toBe(false)
  })

  it('returns false if given true as an entry', () => {
    expect(isLoreIndex({ test: true })).toBe(false)
  })

  it('returns false if given false as an entry', () => {
    expect(isLoreIndex({ test: false })).toBe(false)
  })

  it('returns false if given a number as an entry', () => {
    expect(isLoreIndex({ test: 1 })).toBe(false)
  })

  it('returns false if given a string as an entry', () => {
    expect(isLoreIndex({ test: 'test' })).toBe(false)
  })

  it('returns false if given an array as an entry', () => {
    expect(isLoreIndex({ test: [1, 2, 3] })).toBe(false)
  })

  it('returns false if given an empty array as an entry', () => {
    expect(isLoreIndex({ test: {} })).toBe(false)
  })

  it('returns true if given a LoreIndexEntry as an entry', () => {
    expect(isLoreIndex({ test: { title: 'Test', text: {}, categories: {} } })).toBe(true)
  })
})
