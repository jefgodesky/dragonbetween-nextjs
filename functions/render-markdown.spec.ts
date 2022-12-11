import renderMarkdown from './render-markdown'

describe('renderMarkdown', () => {
  it('renders Markdown into HTML', async () => {
    const html = await renderMarkdown('*emphasis* and **strong**')
    expect(html).toBe('<p><em>emphasis</em> and <strong>strong</strong></p>')
  })

  it('allows basic HTML', async () => {
    const html = await renderMarkdown('<span class="test">This is a test.</span>')
    expect(html).toBe('<p><span class="test">This is a test.</span></p>')
  })

  it('sanitizes dangerous HTML', async () => {
    const html = await renderMarkdown('<script>This is a test.</script>')
    expect(html).toBe('')
  })

  it('allows divs', async () => {
    const html = await renderMarkdown('<div class="test">This is a test.</div>')
    expect(html).toBe('<div class="test">This is a test.</div>')
  })

  it('allows blockquotes', async () => {
    const html = await renderMarkdown('<blockquote>This is a test.</blockquote>')
    expect(html).toBe('<blockquote>This is a test.</blockquote>')
  })

  it('allows figures', async () => {
    const html = await renderMarkdown('<figure><figcaption>This is a test.</figcaption></figure>')
    expect(html).toBe('<figure><figcaption>This is a test.</figcaption></figure>')
  })

  it('allows asides', async () => {
    const html = await renderMarkdown('<aside>This is a test.</aside>')
    expect(html).toBe('<aside>This is a test.</aside>')
  })

  it('allows sections', async () => {
    const html = await renderMarkdown('<section>This is a test.</section>')
    expect(html).toBe('<section>This is a test.</section>')
  })

  it('allows headers', async () => {
    const html = await renderMarkdown('<header>This is a test.</header>')
    expect(html).toBe('<header>This is a test.</header>')
  })

  it('allows footers', async () => {
    const html = await renderMarkdown('<footer>This is a test.</footer>')
    expect(html).toBe('<footer>This is a test.</footer>')
  })

  it('adds ID\'s to headings', async () => {
    const html = await renderMarkdown('## Test Heading\n\nHello, world!')
    expect(html).toBe('<h2 id="test-heading">Test Heading</h2>\n<p>Hello, world!</p>')
  })
})
