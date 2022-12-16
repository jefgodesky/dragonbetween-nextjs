import isInRange from './is-in-range'

describe('isInRange', () => {
  it('returns true if number is in range', () => {
    expect(isInRange(2, 1, 3)).toBe(true)
  })

  it('returns false if number is not in range', () => {
    expect(isInRange(1, 2, 3)).toBe(false)
  })

  it('accepts a range of just one number', () => {
    expect(isInRange(1, 1)).toBe(true)
  })

  it('accepts a range with more than two numbers', () => {
    expect(isInRange(1, 1, 2, 3)).toBe(true)
  })
})
