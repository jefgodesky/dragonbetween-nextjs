import getCharacters from './get-characters'

describe('getCharacters', () => {
  it('returns the characters in the CharacterKnowledge object', () => {
    const knowledge = {
      Alice: { msg: true },
      Bob: { msg: false },
      Charlie: { msg: false }
    }
    expect(getCharacters(knowledge).join(' ')).toBe('Alice Bob Charlie')
  })
})
