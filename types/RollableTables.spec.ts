import { isRollableTables } from './RollableTables'

describe('isRollableTables', () => {
  const easy = {
    dice: '1d6',
    rows: [
      { min: 1, max: 2, result: 'Failure' },
      { min: 3, max: 6, result: 'Success' }
    ]
  }

  const normal = {
    dice: '1d6',
    rows: [
      { min: 1, max: 3, result: 'Failure' },
      { min: 4, max: 6, result: 'Success' }
    ]
  }

  const hard = {
    dice: '1d6',
    rows: [
      { min: 1, max: 4, result: 'Failure' },
      { min: 5, max: 6, result: 'Success' }
    ]
  }

  it('returns false if given null', () => {
    expect(isRollableTables(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isRollableTables(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isRollableTables(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isRollableTables(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isRollableTables(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isRollableTables('test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isRollableTables([1, 2, 3])).toBe(false)
  })

  it('returns true if given an empty object', () => {
    expect(isRollableTables({})).toBe(true)
  })

  it('returns false if given null for a property', () => {
    expect(isRollableTables({ test: null })).toBe(false)
  })

  it('returns false if given undefined for a property', () => {
    expect(isRollableTables({ test: undefined })).toBe(false)
  })

  it('returns false if given true for a property', () => {
    expect(isRollableTables({ test: true })).toBe(false)
  })

  it('returns false if given false for a property', () => {
    expect(isRollableTables({ test: false })).toBe(false)
  })

  it('returns false if given a number for a property', () => {
    expect(isRollableTables({ test: 1 })).toBe(false)
  })

  it('returns false if given a string for a property', () => {
    expect(isRollableTables({ test: '1' })).toBe(false)
  })

  it('returns false if given an array for a property', () => {
    expect(isRollableTables({ test: [1, 2, 3] })).toBe(false)
  })

  it('returns false if given an empty object for a property', () => {
    expect(isRollableTables({ test: {} })).toBe(false)
  })

  it('returns true if given RollableTable objects for properties', () => {
    expect(isRollableTables({ easy, normal, hard })).toBe(true)
  })
})
