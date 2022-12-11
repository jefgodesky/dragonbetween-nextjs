import { isWikiLink } from '../types/WikiLink'
import connectWikiLink from './connect-wiki-link'

describe('connectWikiLink', () => {
  const index = {
    entry1: { title: 'Entry 1', text: {} },
    entry2: { title: 'Duplicate Title', text: {} },
    entry3: { title: 'Duplicate Title', text: {} },
    entry4: { title: 'Secret Entry', text: {}, secret: 'Entry4' },
    entry5: { title: 'Secret Entry', text: {}, secret: 'Entry5' }
  }

  it('connects by slug', () => {
    const actual = connectWikiLink({ id: 'entry1', display: 'Entry 2' }, {}, index)
    expect(actual.slug).toEqual('entry1')
  })

  it('is immutable', () => {
    const link = { id: 'entry1', display: 'Entry 1' }
    const actual = connectWikiLink(link, {}, index)
    expect(isWikiLink(actual)).toBe(true)
    expect(actual).not.toBe(link)
  })

  it('connects by title', () => {
    const actual = connectWikiLink({ id: 'Duplicate Title', display: 'Entry 1' }, {}, index)
    expect(actual.slug).toEqual('entry2')
  })

  it('won\'t connect a secret by slug', () => {
    const actual = connectWikiLink({ id: 'entry4', display: 'Entry 1' }, {}, index)
    expect(actual.slug).toBe(undefined)
  })

  it('connects a secret you know by slug', () => {
    const actual = connectWikiLink({ id: 'entry4', display: 'Entry 1' }, { Entry4: true }, index)
    expect(actual.slug).toBe('entry4')
  })

  it('won\'t connect a secret by title', () => {
    const actual = connectWikiLink({ id: 'Secret Entry', display: 'Entry 5' }, {}, index)
    expect(actual.slug).toBe(undefined)
  })

  it('connects a secret you know by slug', () => {
    const actual = connectWikiLink({ id: 'Secret Entry', display: 'Entry 5' }, { Entry5: true }, index)
    expect(actual.slug).toBe('entry5')
  })
})
