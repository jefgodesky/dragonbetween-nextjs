import { isSecret } from '../types/Secret'
import parseSecret from './parse-secret'

describe('parseSecret', () => {
  it('parses a secret', () => {
    const condition = 'secret1'
    const text = 'shhhh'
    const orig = `{{if ${condition}}}${text}{{/if}}`
    const actual = parseSecret(orig)
    expect(isSecret(actual)).toBe(true)
    expect(actual?.condition).toEqual(condition)
    expect(actual?.orig).toEqual(orig)
    expect(actual?.text).toEqual(text)
  })

  it('returns null if there is no secret', () => {
    const actual = parseSecret('lol nope')
    expect(actual).toBeNull()
  })
})
