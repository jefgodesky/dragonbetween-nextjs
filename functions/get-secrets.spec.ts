import getSecrets from './get-secrets'

describe('getSecrets', () => {
  it('returns all of the secret keys', () => {
    const knowledge = {
      Alice: { x: true, y: false },
      Bob: { y: true, z: false },
      Charlie: { x: false, z: true }
    }
    expect(getSecrets(knowledge).join(' ')).toBe('x y z')
  })
})
