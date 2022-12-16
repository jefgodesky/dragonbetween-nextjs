import { isRollableTable } from './RollableTable'

describe('isRollableTable', () => {
  const dice = '1d6'
  const rows = [
    { min: 1, max: 3, result: 'Failure' },
    { min: 4, max: 6, result: 'Success' }
  ]

  it('returns true if given minimum values', () => {
    expect(isRollableTable({ dice, rows })).toBe(true)
  })

  it('returns false if given null', () => {
    expect(isRollableTable(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isRollableTable(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isRollableTable(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isRollableTable(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isRollableTable(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isRollableTable('test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isRollableTable([1, 2, 3])).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isRollableTable({})).toBe(false)
  })

  it('returns false if given null for dice', () => {
    expect(isRollableTable({ dice: null, rows })).toBe(false)
  })

  it('returns false if given undefined for dice', () => {
    expect(isRollableTable({ dice: undefined, rows })).toBe(false)
  })

  it('returns false if given true for dice', () => {
    expect(isRollableTable({ dice: true, rows })).toBe(false)
  })

  it('returns false if given false for dice', () => {
    expect(isRollableTable({ dice: false, rows })).toBe(false)
  })

  it('returns false if given a number for dice', () => {
    expect(isRollableTable({ dice: 1, rows })).toBe(false)
  })

  it('returns false if given an array for dice', () => {
    expect(isRollableTable({ dice: ['d6'], rows })).toBe(false)
  })

  it('returns false if given an object for dice', () => {
    expect(isRollableTable({ dice: { sides: 6, num: 1 }, rows })).toBe(false)
  })

  it('returns false if given null for rows', () => {
    expect(isRollableTable({ dice, rows: null })).toBe(false)
  })

  it('returns false if given undefined for rows', () => {
    expect(isRollableTable({ dice, rows: undefined })).toBe(false)
  })

  it('returns false if given true for rows', () => {
    expect(isRollableTable({ dice, rows: true })).toBe(false)
  })

  it('returns false if given false for rows', () => {
    expect(isRollableTable({ dice, rows: false })).toBe(false)
  })

  it('returns false if given a number for rows', () => {
    expect(isRollableTable({ dice, rows: 2 })).toBe(false)
  })

  it('returns false if given a string for rows', () => {
    expect(isRollableTable({ dice, rows: 'Failure;Success' })).toBe(false)
  })

  it('returns false if given an object for rows', () => {
    expect(isRollableTable({ dice, rows: {} })).toBe(false)
  })

  it('returns false if given rows that include null', () => {
    expect(isRollableTable({ dice, rows: [null] })).toBe(false)
  })

  it('returns false if given rows that include undefined', () => {
    expect(isRollableTable({ dice, rows: [undefined] })).toBe(false)
  })

  it('returns false if given rows that include true', () => {
    expect(isRollableTable({ dice, rows: [true] })).toBe(false)
  })

  it('returns false if given rows that include false', () => {
    expect(isRollableTable({ dice, rows: [false] })).toBe(false)
  })

  it('returns false if given rows that include numbers', () => {
    expect(isRollableTable({ dice, rows: [0, 1] })).toBe(false)
  })

  it('returns false if given rows that include strings', () => {
    expect(isRollableTable({ dice, rows: ['Failure', 'Success'] })).toBe(false)
  })

  it('returns false if given rows that include arrays', () => {
    expect(isRollableTable({ dice, rows: [[]] })).toBe(false)
  })

  it('returns false if given rows that include empty objects', () => {
    expect(isRollableTable({ dice, rows: [{}] })).toBe(false)
  })
})
