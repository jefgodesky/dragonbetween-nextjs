import renderWikiLinks from './render-wiki-links'

describe('renderWikiLinks', () => {
  const orig = 'Hello world! [[known|Public]] [[secret1|Secret]] [[secret2|Secret]]'
  const index = {
    known: { title: 'Everyone Knows About This', text: {} },
    secret1: { title: 'Secret #1', text: {}, secret: 'Secret1' },
    secret2: { title: 'Secret #2', text: {}, secret: 'Secret1 && Secret2' }
  }

  it('populates Markdown links to public pages', () => {
    const actual = renderWikiLinks(orig, {}, index)
    expect(actual).toBe('Hello world! [Public](/lore/known) Secret Secret')
  })

  it('populates Markdown links to secret pages you know about', () => {
    const actual = renderWikiLinks(orig, { Secret1: true }, index)
    expect(actual).toBe('Hello world! [Public](/lore/known) [Secret](/lore/secret1) Secret')
  })
})
