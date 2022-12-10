import Knowledge from '../types/Knowledge'
import clear from './clear'

describe('clear', () => {
  const knowledge: Knowledge = { secret1: true, secret2: true, secret3: false }

  it('returns true if not given a secret', () => {
    expect(clear(knowledge)).toBe(true)
  })

  it('returns true if it\'s in knowledge', () => {
    expect(clear(knowledge, 'secret1')).toBe(true)
  })

  it('returns false if it\'s explicitly not in knowledge', () => {
    expect(clear(knowledge, 'secret3')).toBe(false)
  })

  it('returns false if it\'s not included in knowledge', () => {
    expect(clear(knowledge, 'secret4')).toBe(false)
  })

  it('evaluates complex logical expressions', () => {
    expect(clear(knowledge, '(secret2 || secret3) && secret1')).toBe(true)
    expect(clear(knowledge, '(secret1 || secret2) && (secret1 && secret3)')).toBe(false)
  })
})
