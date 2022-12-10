import addSpecialCharacter from './add-special-character'

describe('addSpecialCharacter', () => {
  const knowledge = {
    Alice: { secret1: true, secret2: true },
    Bob: { secret1: true, secret2: false },
    Charlie: { secret1: false, secret2: true }
  }

  it('is immutable', () => {
    const actual = addSpecialCharacter(knowledge, 'Debra')
    expect(actual).not.toBe(knowledge)
  })

  it('adds a new character who knows nothing by default', () => {
    const actual = addSpecialCharacter(knowledge, 'Debra')
    expect(actual.Debra.secret1).toBe(false)
    expect(actual.Debra.secret2).toBe(false)
  })

  it('can add a new character who knows everything', () => {
    const actual = addSpecialCharacter(knowledge, 'Debra', true)
    expect(actual.Debra.secret1).toBe(true)
    expect(actual.Debra.secret2).toBe(true)
  })
})
