import { isEntitled } from './Entitled'

describe('isEntitled', () => {
  const title = 'Test Title'
  const sort = 'Title, Test'

  it('returns false if given null', () => {
    expect(isEntitled(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isEntitled(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isEntitled(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isEntitled(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isEntitled(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isEntitled(title)).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isEntitled(title.split(''))).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isEntitled({})).toBe(false)
  })

  it('returns false if given null for a title', () => {
    expect(isEntitled({ title: null })).toBe(false)
  })

  it('returns false if given undefined for a title', () => {
    expect(isEntitled({ title: undefined })).toBe(false)
  })

  it('returns false if given true for a title', () => {
    expect(isEntitled({ title: true })).toBe(false)
  })

  it('returns false if given false for a title', () => {
    expect(isEntitled({ title: false })).toBe(false)
  })

  it('returns false if given a number for a title', () => {
    expect(isEntitled({ title: 1 })).toBe(false)
  })

  it('returns true if given a string for a title', () => {
    expect(isEntitled({ title })).toBe(true)
  })

  it('returns false if given an array for a title', () => {
    expect(isEntitled({ title: title.split('') })).toBe(false)
  })

  it('returns false if given an object for a title', () => {
    expect(isEntitled({ title: { title } })).toBe(false)
  })

  it('returns false if given null for a sort', () => {
    expect(isEntitled({ title, sort: null })).toBe(false)
  })

  it('returns true if given undefined for a sort', () => {
    expect(isEntitled({ title, sort: undefined })).toBe(true)
  })

  it('returns false if given true for a sort', () => {
    expect(isEntitled({ title, sort: true })).toBe(false)
  })

  it('returns false if given false for a sort', () => {
    expect(isEntitled({ title, sort: false })).toBe(false)
  })

  it('returns false if given a number for a sort', () => {
    expect(isEntitled({ title, sort: 1 })).toBe(false)
  })

  it('returns true if given a string for a sort', () => {
    expect(isEntitled({ title, sort })).toBe(true)
  })

  it('returns false if given an array for a sort', () => {
    expect(isEntitled({ title, sort: sort.split('') })).toBe(false)
  })

  it('returns false if given an object for a sort', () => {
    expect(isEntitled({ title, sort: { sort } })).toBe(false)
  })
})
