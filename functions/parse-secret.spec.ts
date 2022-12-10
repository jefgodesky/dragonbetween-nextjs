import { isSecret } from '../types/Secret'
import parseSecret from './parse-secret'

const testSecret = (condition: string, text: string, orig: string): void => {
  const actual = parseSecret(orig)
  expect(isSecret(actual)).toBe(true)
  expect(actual?.condition).toEqual(condition)
  expect(actual?.orig).toEqual(orig)
  expect(actual?.text).toEqual(text)
}

describe('parseSecret', () => {
  it('parses a secret', () => {
    const condition = 'secret1'
    const text = 'shhhh'
    const orig = `{{if ${condition}}}${text}{{/if}}`
    testSecret(condition, text, orig)
  })

  it('parses nested secrets', () => {
    const condition = 'secret1'
    const text = 'shhhh {{if secret2}}shhhhhh{{/if}}'
    const orig = `{{if ${condition}}}${text}{{/if}}`
    testSecret(condition, text, orig)
  })

  it('returns null if there is no secret', () => {
    const actual = parseSecret('lol nope')
    expect(actual).toBeNull()
  })
})
