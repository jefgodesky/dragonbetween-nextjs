import { isCharacterKnowledge } from './CharacterKnowledge'

describe('isCharacterKnowledge', () => {
  it('returns false if given null', () => {
    expect(isCharacterKnowledge(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isCharacterKnowledge(undefined)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isCharacterKnowledge(false)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isCharacterKnowledge(true)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isCharacterKnowledge(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isCharacterKnowledge('true')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isCharacterKnowledge([1, 2, 3])).toBe(false)
  })

  it('returns true if given an empty object', () => {
    expect(isCharacterKnowledge({})).toBe(true)
  })

  it('returns false if given an object with a null property', () => {
    expect(isCharacterKnowledge({ test: null })).toBe(false)
  })

  it('returns false if given an object with an undefined property', () => {
    expect(isCharacterKnowledge({ test: undefined })).toBe(false)
  })

  it('returns false if given an object with a false property', () => {
    expect(isCharacterKnowledge({ test: false })).toBe(false)
  })

  it('returns false if given an object with a true property', () => {
    expect(isCharacterKnowledge({ test: true })).toBe(false)
  })

  it('returns false if given an object with a number property', () => {
    expect(isCharacterKnowledge({ test: 1 })).toBe(false)
  })

  it('returns false if given an object with a string property', () => {
    expect(isCharacterKnowledge({ test: 'true' })).toBe(false)
  })

  it('returns false if given an object with an array property', () => {
    expect(isCharacterKnowledge({ test: [1, 2, 3] })).toBe(false)
  })

  it('returns true if given an object with an object property', () => {
    expect(isCharacterKnowledge({ test: {} })).toBe(true)
  })

  it('returns false if given a nested object that is null', () => {
    expect(isCharacterKnowledge({ test: { test: null } })).toBe(false)
  })

  it('returns false if given a nested object that is undefined', () => {
    expect(isCharacterKnowledge({ test: { test: undefined } })).toBe(false)
  })

  it('returns true if given a nested object that is false', () => {
    expect(isCharacterKnowledge({ test: { test: false } })).toBe(true)
  })

  it('returns true if given a nested object that is true', () => {
    expect(isCharacterKnowledge({ test: { test: true } })).toBe(true)
  })

  it('returns false if given a nested object that is a number', () => {
    expect(isCharacterKnowledge({ test: { test: 1 } })).toBe(false)
  })

  it('returns false if given a nested object that is a string', () => {
    expect(isCharacterKnowledge({ test: { test: 'true' } })).toBe(false)
  })

  it('returns false if given a nested object that is an array', () => {
    expect(isCharacterKnowledge({ test: { test: [1, 2, 3] } })).toBe(false)
  })

  it('returns false if given a nested object that is an object', () => {
    expect(isCharacterKnowledge({ test: { test: {} } })).toBe(false)
  })
})
