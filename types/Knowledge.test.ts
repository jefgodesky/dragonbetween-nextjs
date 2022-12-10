import { isKnowledge } from './Knowledge'

describe('Knowledge', () => {
  it('returns false if given null', () => {
    expect(isKnowledge(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isKnowledge(undefined)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isKnowledge(false)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isKnowledge(true)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isKnowledge(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isKnowledge('true')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isKnowledge([1, 2, 3])).toBe(false)
  })

  it('returns true if given an empty object', () => {
    expect(isKnowledge({})).toBe(true)
  })

  it('returns false if given an object with a null property', () => {
    expect(isKnowledge({ test: null })).toBe(false)
  })

  it('returns false if given an object with an undefined property', () => {
    expect(isKnowledge({ test: undefined })).toBe(false)
  })

  it('returns true if given an object with a false property', () => {
    expect(isKnowledge({ test: false })).toBe(true)
  })

  it('returns true if given an object with a true property', () => {
    expect(isKnowledge({ test: true })).toBe(true)
  })

  it('returns false if given an object with a number property', () => {
    expect(isKnowledge({ test: 1 })).toBe(false)
  })

  it('returns false if given an object with a string property', () => {
    expect(isKnowledge({ test: 'true' })).toBe(false)
  })

  it('returns false if given an object with an array property', () => {
    expect(isKnowledge({ test: [1, 2, 3] })).toBe(false)
  })

  it('returns false if given an object with an object property', () => {
    expect(isKnowledge({ test: {} })).toBe(false)
  })
})
