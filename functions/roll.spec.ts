import isInRange from './is-in-range'
import roll from './roll'

describe('roll', () => {
  it('rolls the dice', () => {
    const actual = roll('3d4')
    expect(isInRange(actual, 3, 12)).toBe(true)
  })
})
