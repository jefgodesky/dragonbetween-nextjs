import { isWikiLink } from '../types/WikiLink'
import processWikiLinks from './process-wiki-links'

describe('processWikiLinks', () => {
  const fn = jest.fn()

  it('runs the function provided on each link', () => {
    const text = '[[Test 1]] Hello, [[Test2 | Test]]! [[test-slug | Test this!]]'
    processWikiLinks(text, (text, link) => {
      if (isWikiLink(link)) fn()
    })
    expect(fn).toHaveBeenCalledTimes(3)
  })
})
