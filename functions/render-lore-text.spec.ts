import renderLoreText from './render-lore-text'

describe('renderLoreText', () => {
  const index = {
    entry1: { title: 'Entry 1', text: { default: 'Hello, world!' } },
    entry2: { title: 'Entry 2', text: { Secret: 'Hello, _**WORLD OF THE DISTANT FUTURE!**_', default: 'Hello, perfectly normal world!' } },
    entry3: { title: 'Entry 3', text: { default: 'Have you seen [[Entry 2]]?' } },
    entry4: { title: 'Entry 4', text: { default: 'Hello, {{if Secret}}_**WORLD OF THE DISTANT FUTURE!**_{{/if}}{{if !Secret}}perfectly normal world!{{/if}}' } }
  }

  it('renders the text', async () => {
    const actual = await renderLoreText(index.entry1, {}, index)
    expect(actual).toEqual('<p>Hello, world!</p>')
  })

  it('renders the default if you don\'t know the secret', async () => {
    const actual = await renderLoreText(index.entry2, {}, index)
    expect(actual).toEqual('<p>Hello, perfectly normal world!</p>')
  })

  it('renders the secret if you know it', async () => {
    const actual = await renderLoreText(index.entry2, { Secret: true }, index)
    expect(actual).toEqual('<p>Hello, <em><strong>WORLD OF THE DISTANT FUTURE!</strong></em></p>')
  })

  it('renders links', async () => {
    const actual = await renderLoreText(index.entry3, {}, index)
    expect(actual).toEqual('<p>Have you seen <a href="/lore/entry2">Entry 2</a>?</p>')
  })

  it('renders secrets in text', async () => {
    const knowitall = await renderLoreText(index.entry4, { Secret: true }, index)
    const knownothing = await renderLoreText(index.entry4, {}, index)
    expect(knowitall).toEqual('<p>Hello, <em><strong>WORLD OF THE DISTANT FUTURE!</strong></em></p>')
    expect(knownothing).toEqual('<p>Hello, perfectly normal world!</p>')
  })
})
