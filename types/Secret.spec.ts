import { isSecret } from './Secret'

describe('isSecret', () => {
  const condition = 'secret1'
  const text = 'shhhh'
  const orig = `{{if ${condition}}}${text}{{/if}}`

  it('returns false if given null', () => {
    expect(isSecret(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isSecret(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isSecret(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isSecret(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isSecret(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isSecret(text)).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isSecret(text.split(''))).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isSecret({})).toBe(false)
  })

  it('returns true if given a string for condition and text', () => {
    expect(isSecret({ condition, text })).toBe(true)
  })

  it('returns false if not given a condition', () => {
    expect(isSecret({ text })).toBe(false)
  })

  it('returns false if given null as a condition', () => {
    expect(isSecret({ condition: null, text })).toBe(false)
  })

  it('returns false if given undefined as a condition', () => {
    expect(isSecret({ condition: undefined, text })).toBe(false)
  })

  it('returns false if given true as a condition', () => {
    expect(isSecret({ condition: true, text })).toBe(false)
  })

  it('returns false if given false as a condition', () => {
    expect(isSecret({ condition: false, text })).toBe(false)
  })

  it('returns false if given a number as a condition', () => {
    expect(isSecret({ condition: 1, text })).toBe(false)
  })

  it('returns false if given an array as a condition', () => {
    expect(isSecret({ condition: condition.split(''), text })).toBe(false)
  })

  it('returns false if given an object as a condition', () => {
    expect(isSecret({ condition: {}, text })).toBe(false)
  })

  it('returns false if not given text', () => {
    expect(isSecret({ condition })).toBe(false)
  })

  it('returns false if given null as text', () => {
    expect(isSecret({ condition, text: null })).toBe(false)
  })

  it('returns false if given undefined as text', () => {
    expect(isSecret({ condition, text: undefined })).toBe(false)
  })

  it('returns false if given true as text', () => {
    expect(isSecret({ condition, text: true })).toBe(false)
  })

  it('returns false if given false as text', () => {
    expect(isSecret({ condition, text: false })).toBe(false)
  })

  it('returns false if given a number as text', () => {
    expect(isSecret({ condition, text: 1 })).toBe(false)
  })

  it('returns false if given an array as text', () => {
    expect(isSecret({ condition, text: text.split('') })).toBe(false)
  })

  it('returns false if given an object as text', () => {
    expect(isSecret({ condition, text: {} })).toBe(false)
  })

  it('returns false if given null as orig', () => {
    expect(isSecret({ condition, orig: null, text })).toBe(false)
  })

  it('returns true if given undefined as orig', () => {
    expect(isSecret({ condition, orig: undefined, text })).toBe(true)
  })

  it('returns false if given true as orig', () => {
    expect(isSecret({ condition, orig: true, text })).toBe(false)
  })

  it('returns false if given false as orig', () => {
    expect(isSecret({ condition, orig: false, text })).toBe(false)
  })

  it('returns false if given a number as orig', () => {
    expect(isSecret({ condition, orig: 1, text })).toBe(false)
  })

  it('returns true if given a string as orig', () => {
    expect(isSecret({ condition, orig, text })).toBe(true)
  })

  it('returns false if given an array as orig', () => {
    expect(isSecret({ condition, orig: orig.split(''), text })).toBe(false)
  })

  it('returns false if given an object as orig', () => {
    expect(isSecret({ condition, orig: {}, text })).toBe(false)
  })
})
