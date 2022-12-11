import renderSecrets from './render-secrets'

describe('renderSecrets', () => {
  it('hides secrets', () => {
    const actual = renderSecrets('Hello, world! {{if Secret}}It\'s all a lie!{{/if}}', {})
    expect(actual).toEqual('Hello, world! ')
  })

  it('shows secrets you know', () => {
    const actual = renderSecrets('Hello, world! {{if Secret}}It\'s all a lie!{{/if}}', { Secret: true })
    expect(actual).toEqual('Hello, world! It\'s all a lie!')
  })

  it('can handle nested secrets', () => {
    const orig = 'Hello, world! {{if Secret}}This is a {{if Testing}}unit {{/if}}test.{{/if}}'
    const secret = renderSecrets(orig, { Secret: true })
    const tester = renderSecrets(orig, { Testing: true })
    const secretTester = renderSecrets(orig, { Secret: true, Testing: true })
    expect(secret).toEqual('Hello, world! This is a test.')
    expect(tester).toEqual('Hello, world! ')
    expect(secretTester).toEqual('Hello, world! This is a unit test.')
  })
})
