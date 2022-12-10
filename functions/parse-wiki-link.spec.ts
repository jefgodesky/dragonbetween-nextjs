import { isWikiLink } from '../types/WikiLink'
import parseWikiLink from './parse-wiki-link'

describe('parseWikiLink', () => {
  it('returns null if it isn\'t a wiki link', () => {
    expect(parseWikiLink('lol nope')).toBeNull()
  })

  it('parses a simple wiki link expression', () => {
    const orig = '[[Test Page]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).toBe(true)
    expect(actual?.id).toEqual('Test Page')
    expect(actual?.display).toEqual('Test Page')
    expect(actual?.orig).toEqual(orig)
  })

  it('parses a wiki link with an alias', () => {
    const orig = '[[Test Page | Hello, world!]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).toBe(true)
    expect(actual?.id).toEqual('Test Page')
    expect(actual?.display).toEqual('Hello, world!')
    expect(actual?.orig).toEqual(orig)
  })

  it('parses a wiki link that links to a slug', () => {
    const orig = '[[test-page | Hello, world!]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).toBe(true)
    expect(actual?.id).toEqual('test-page')
    expect(actual?.display).toEqual('Hello, world!')
    expect(actual?.orig).toEqual(orig)
  })
})
