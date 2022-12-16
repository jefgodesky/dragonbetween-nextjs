import pickRandomElemFromArr from './pick-random-elem-from-arr'

describe('pickRandomElemFromArr', () => {
  it('returns a random number from an array of numbers', () => {
    const arr = [1, 2, 3, 4]
    expect(arr).toContain(pickRandomElemFromArr(arr))
  })

  it('returns a random string from an array of strings', () => {
    const arr = ['one', 'two', 'three', 'four']
    expect(arr).toContain(pickRandomElemFromArr(arr))
  })

  it('returns a random element from an array of mixed elements', () => {
    const arr = [1, 'two', 3, 'four']
    expect(arr).toContain(pickRandomElemFromArr(arr))
  })
})
