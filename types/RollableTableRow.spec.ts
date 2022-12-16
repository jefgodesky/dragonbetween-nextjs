import { isRollableTableRow } from './RollableTableRow'

describe('isRollableTableRow', () => {
  const min = 1
  const max = 2
  const result = 'Test'

  it('returns true if given minimum values', () => {
    expect(isRollableTableRow({ min, max, result })).toBe(true)
  })

  it('returns false if given null', () => {
    expect(isRollableTableRow(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isRollableTableRow(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isRollableTableRow(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isRollableTableRow(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isRollableTableRow(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isRollableTableRow('test')).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isRollableTableRow([1, 2, 3])).toBe(false)
  })

  it('returns false if given an empty array', () => {
    expect(isRollableTableRow({})).toBe(false)
  })

  it('returns false if given null as a min', () => {
    expect(isRollableTableRow({ min: null, max, result })).toBe(false)
  })

  it('returns false if given undefined as a min', () => {
    expect(isRollableTableRow({ min: undefined, max, result })).toBe(false)
  })

  it('returns false if given true as a min', () => {
    expect(isRollableTableRow({ min: true, max, result })).toBe(false)
  })

  it('returns false if given false as a min', () => {
    expect(isRollableTableRow({ min: false, max, result })).toBe(false)
  })

  it('returns false if given a string as a min', () => {
    expect(isRollableTableRow({ min: '1', max, result })).toBe(false)
  })

  it('returns false if given an array as a min', () => {
    expect(isRollableTableRow({ min: [1, 2, 3], max: 4, result })).toBe(false)
  })

  it('returns false if given an object as a min', () => {
    expect(isRollableTableRow({ min: {}, max, result })).toBe(false)
  })

  it('returns false if given null as a max', () => {
    expect(isRollableTableRow({ min, max: null, result })).toBe(false)
  })

  it('returns false if given undefined as a max', () => {
    expect(isRollableTableRow({ min, max: undefined, result })).toBe(false)
  })

  it('returns false if given true as a max', () => {
    expect(isRollableTableRow({ min, max: true, result })).toBe(false)
  })

  it('returns false if given false as a max', () => {
    expect(isRollableTableRow({ min, max: false, result })).toBe(false)
  })

  it('returns false if given a string as a max', () => {
    expect(isRollableTableRow({ min, max: '1', result })).toBe(false)
  })

  it('returns false if given an array as a max', () => {
    expect(isRollableTableRow({ min, max: [2, 3, 4], result })).toBe(false)
  })

  it('returns false if given an object as a max', () => {
    expect(isRollableTableRow({ min, max: {}, result })).toBe(false)
  })

  it('returns false if given null as a result', () => {
    expect(isRollableTableRow({ min, max, result: null })).toBe(false)
  })

  it('returns false if given undefined as a result', () => {
    expect(isRollableTableRow({ min, max, result: undefined })).toBe(false)
  })

  it('returns false if given true as a result', () => {
    expect(isRollableTableRow({ min, max, result: true })).toBe(false)
  })

  it('returns false if given false as a result', () => {
    expect(isRollableTableRow({ min, max, result: false })).toBe(false)
  })

  it('returns false if given a number as a result', () => {
    expect(isRollableTableRow({ min, max, result: 1 })).toBe(false)
  })

  it('returns false if given an array as a result', () => {
    expect(isRollableTableRow({ min, max, result: ['one', 'two', 'three'] })).toBe(false)
  })

  it('returns false if given an object as a result', () => {
    expect(isRollableTableRow({ min, max, result: {} })).toBe(false)
  })
})
