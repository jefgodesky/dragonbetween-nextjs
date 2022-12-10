import findWikiLinks from './find-wiki-links'

describe('findWikiLinks', () => {
  it('finds all the wiki links in the string', () => {
    const orig = '[[Test 1]] Hello, [[Test2 | Test]]! [[test-slug | Test this!]]'
    const links = findWikiLinks(orig)
    expect(links).toHaveLength(3)
    expect(JSON.stringify(links[0])).toEqual('{"id":"Test 1","display":"Test 1","orig":"[[Test 1]]"}')
    expect(JSON.stringify(links[1])).toEqual('{"id":"Test2","display":"Test","orig":"[[Test2 | Test]]"}')
    expect(JSON.stringify(links[2])).toEqual('{"id":"test-slug","display":"Test this!","orig":"[[test-slug | Test this!]]"}')
  })
})
