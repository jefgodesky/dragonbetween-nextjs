import { isWikiLink } from './WikiLink'

describe('isWikiLink', () => {
  const id = 'test'
  const display = 'Test Link'
  const orig = `[[${id} | ${display}]]`

  it('returns false if given null', () => {
    expect(isWikiLink(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isWikiLink(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isWikiLink(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isWikiLink(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isWikiLink(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isWikiLink(id)).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isWikiLink(id.split(''))).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isWikiLink({})).toBe(false)
  })

  it('returns true if given an id and a display string', () => {
    expect(isWikiLink({ id, display })).toBe(true)
  })

  it('returns false if not given an id', () => {
    expect(isWikiLink({ display })).toBe(false)
  })

  it('returns false if given null for id', () => {
    expect(isWikiLink({ id: null, display })).toBe(false)
  })

  it('returns false if given undefined for id', () => {
    expect(isWikiLink({ id: undefined, display })).toBe(false)
  })

  it('returns false if given true for id', () => {
    expect(isWikiLink({ id: true, display })).toBe(false)
  })

  it('returns false if given false for id', () => {
    expect(isWikiLink({ id: false, display })).toBe(false)
  })

  it('returns false if given a number for id', () => {
    expect(isWikiLink({ id: 1, display })).toBe(false)
  })

  it('returns false if given an array for id', () => {
    expect(isWikiLink({ id: id.split(''), display })).toBe(false)
  })

  it('returns false if given an object for id', () => {
    expect(isWikiLink({ id: { id }, display })).toBe(false)
  })

  it('returns false if not given a display string', () => {
    expect(isWikiLink({ id })).toBe(false)
  })

  it('returns false if given null for a display string', () => {
    expect(isWikiLink({ id, display: null })).toBe(false)
  })

  it('returns false if given undefined for a display string', () => {
    expect(isWikiLink({ id, display: undefined })).toBe(false)
  })

  it('returns false if given true for a display string', () => {
    expect(isWikiLink({ id, display: true })).toBe(false)
  })

  it('returns false if given false for a display string', () => {
    expect(isWikiLink({ id, display: false })).toBe(false)
  })

  it('returns false if given a number for a display string', () => {
    expect(isWikiLink({ id, display: 1 })).toBe(false)
  })

  it('returns false if given an array for a display string', () => {
    expect(isWikiLink({ id, display: display.split('') })).toBe(false)
  })

  it('returns false if given an object for a display string', () => {
    expect(isWikiLink({ id, display: { display } })).toBe(false)
  })

  it('returns false if given null as orig', () => {
    expect(isWikiLink({ id, display, orig: null })).toBe(false)
  })

  it('returns true if given undefined as orig', () => {
    expect(isWikiLink({ id, display, orig: undefined })).toBe(true)
  })

  it('returns false if given true as orig', () => {
    expect(isWikiLink({ id, display, orig: true })).toBe(false)
  })

  it('returns false if given false as orig', () => {
    expect(isWikiLink({ id, display, orig: false })).toBe(false)
  })

  it('returns false if given a number as orig', () => {
    expect(isWikiLink({ id, display, orig: 1 })).toBe(false)
  })

  it('returns true if given a string as orig', () => {
    expect(isWikiLink({ id, display, orig })).toBe(true)
  })

  it('returns false if given an array as orig', () => {
    expect(isWikiLink({ id, display, orig: orig.split('') })).toBe(false)
  })

  it('returns false if given an object as orig', () => {
    expect(isWikiLink({ id, display, orig: { orig } })).toBe(false)
  })
})
