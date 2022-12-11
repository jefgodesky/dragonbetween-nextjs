import getLoreText from './get-lore-text'

describe('getLoreText', () => {
  const knowledge = { secret1: true }

  it('returns the first text that the user knows', () => {
    const entry = { title: 'Test', text: { secret2: 'Two', secret1: 'One', default: 'Zero' }, categories: {} }
    expect(getLoreText(entry, knowledge)).toEqual('One')
  })

  it('returns default if the user doesn\'t know anything else', () => {
    const entry = { title: 'Test', text: { secret2: 'Two', default: 'Zero' }, categories: {} }
    expect(getLoreText(entry, knowledge)).toEqual('Zero')
  })

  it('returns a blank string if the user doesn\'t know anything and there is no default', () => {
    const entry = { title: 'Test', text: { secret2: 'Two' }, categories: {} }
    expect(getLoreText(entry, knowledge)).toEqual('')
  })
})
