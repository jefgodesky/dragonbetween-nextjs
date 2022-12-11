import { isCategory } from './Category'

describe('isCategory', () => {
  const title = 'Test Title'
  const description = 'This is a description.'
  const main = 'tests'
  const secret = 'Secret1'
  const slug = 'tests'
  const subcategories = ['unit-tests', 'integration-tests']

  it('returns false if given null', () => {
    expect(isCategory(null)).toBe(false)
  })

  it('returns false if given undefined', () => {
    expect(isCategory(undefined)).toBe(false)
  })

  it('returns false if given true', () => {
    expect(isCategory(true)).toBe(false)
  })

  it('returns false if given false', () => {
    expect(isCategory(false)).toBe(false)
  })

  it('returns false if given a number', () => {
    expect(isCategory(1)).toBe(false)
  })

  it('returns false if given a string', () => {
    expect(isCategory(title)).toBe(false)
  })

  it('returns false if given an array', () => {
    expect(isCategory(title.split(''))).toBe(false)
  })

  it('returns false if given an empty object', () => {
    expect(isCategory({})).toBe(false)
  })

  it('returns false if given null for a title', () => {
    expect(isCategory({ title: null })).toBe(false)
  })

  it('returns false if given undefined for a title', () => {
    expect(isCategory({ title: undefined })).toBe(false)
  })

  it('returns false if given true for a title', () => {
    expect(isCategory({ title: true })).toBe(false)
  })

  it('returns false if given false for a title', () => {
    expect(isCategory({ title: false })).toBe(false)
  })

  it('returns false if given a number for a title', () => {
    expect(isCategory({ title: 1 })).toBe(false)
  })

  it('returns true if given a string for a title', () => {
    expect(isCategory({ title })).toBe(true)
  })

  it('returns false if given an array for a title', () => {
    expect(isCategory({ title: title.split('') })).toBe(false)
  })

  it('returns false if given an object for a title', () => {
    expect(isCategory({ title: { title } })).toBe(false)
  })

  it('returns false if given null for a description', () => {
    expect(isCategory({ title, description: null })).toBe(false)
  })

  it('returns true if given undefined for a description', () => {
    expect(isCategory({ title, description: undefined })).toBe(true)
  })

  it('returns false if given true for a description', () => {
    expect(isCategory({ title, description: true })).toBe(false)
  })

  it('returns false if given false for a description', () => {
    expect(isCategory({ title, description: false })).toBe(false)
  })

  it('returns false if given a number for a description', () => {
    expect(isCategory({ title, description: 1 })).toBe(false)
  })

  it('returns true if given a string for a description', () => {
    expect(isCategory({ title, description })).toBe(true)
  })

  it('returns false if given an array for a description', () => {
    expect(isCategory({ title, description: description.split('') })).toBe(false)
  })

  it('returns false if given an object for a description', () => {
    expect(isCategory({ title, description: { description } })).toBe(false)
  })

  it('returns false if given null for main', () => {
    expect(isCategory({ title, main: null })).toBe(false)
  })

  it('returns true if given undefined for main', () => {
    expect(isCategory({ title, main: undefined })).toBe(true)
  })

  it('returns false if given true for main', () => {
    expect(isCategory({ title, main: true })).toBe(false)
  })

  it('returns false if given false for main', () => {
    expect(isCategory({ title, main: false })).toBe(false)
  })

  it('returns false if given a number for main', () => {
    expect(isCategory({ title, main: 1 })).toBe(false)
  })

  it('returns true if given a string for main', () => {
    expect(isCategory({ title, main })).toBe(true)
  })

  it('returns false if given an array for main', () => {
    expect(isCategory({ title, main: main.split('') })).toBe(false)
  })

  it('returns false if given an object for main', () => {
    expect(isCategory({ title, main: { main } })).toBe(false)
  })

  it('returns false if given null for a secret', () => {
    expect(isCategory({ title, secret: null })).toBe(false)
  })

  it('returns true if given undefined for a secret', () => {
    expect(isCategory({ title, secret: undefined })).toBe(true)
  })

  it('returns false if given true for a secret', () => {
    expect(isCategory({ title, secret: true })).toBe(false)
  })

  it('returns false if given false for a secret', () => {
    expect(isCategory({ title, secret: false })).toBe(false)
  })

  it('returns false if given a number for a secret', () => {
    expect(isCategory({ title, secret: 1 })).toBe(false)
  })

  it('returns true if given string for a secret', () => {
    expect(isCategory({ title, secret })).toBe(true)
  })

  it('returns false if given an array for a secret', () => {
    expect(isCategory({ title, secret: secret.split('') })).toBe(false)
  })

  it('returns false if given an object for a secret', () => {
    expect(isCategory({ title, secret: { secret } })).toBe(false)
  })

  it('returns false if given null for a slug', () => {
    expect(isCategory({ title, slug: null })).toBe(false)
  })

  it('returns true if given undefined for a slug', () => {
    expect(isCategory({ title, slug: undefined })).toBe(true)
  })

  it('returns false if given true for a slug', () => {
    expect(isCategory({ title, slug: true })).toBe(false)
  })

  it('returns false if given false for a slug', () => {
    expect(isCategory({ title, slug: false })).toBe(false)
  })

  it('returns false if given a number for a slug', () => {
    expect(isCategory({ title, slug: 1 })).toBe(false)
  })

  it('returns true if given a string for a slug', () => {
    expect(isCategory({ title, slug })).toBe(true)
  })

  it('returns false if given an array for a slug', () => {
    expect(isCategory({ title, slug: slug.split('') })).toBe(false)
  })

  it('returns false if given an object for a slug', () => {
    expect(isCategory({ title, slug: { slug } })).toBe(false)
  })

  it('returns false if given null for subcategories', () => {
    expect(isCategory({ title, subcategories: null })).toBe(false)
  })

  it('returns true if given undefined for subcategories', () => {
    expect(isCategory({ title, subcategories: undefined })).toBe(true)
  })

  it('returns false if given true for subcategories', () => {
    expect(isCategory({ title, subcategories: true })).toBe(false)
  })

  it('returns false if given false for subcategories', () => {
    expect(isCategory({ title, subcategories: false })).toBe(false)
  })

  it('returns false if given a number for subcategories', () => {
    expect(isCategory({ title, subcategories: 1 })).toBe(false)
  })

  it('returns false if given a string for subcategories', () => {
    expect(isCategory({ title, subcategories: subcategories.join(';') })).toBe(false)
  })

  it('returns true if given an empty array for subcategories', () => {
    expect(isCategory({ title, subcategories: [] })).toBe(true)
  })

  it('returns false if given an array that includes null for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, null] })).toBe(false)
  })

  it('returns false if given an array that includes undefined for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, undefined] })).toBe(false)
  })

  it('returns false if given an array that includes true for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, true] })).toBe(false)
  })

  it('returns false if given an array that includes false for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, false] })).toBe(false)
  })

  it('returns false if given an array that includes a number for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, 1] })).toBe(false)
  })

  it('returns true if given an array of strings for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories] })).toBe(true)
  })

  it('returns false if given an array that includes arrays for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, []] })).toBe(false)
  })

  it('returns false if given an array that includes objects for subcategories', () => {
    expect(isCategory({ title, subcategories: [...subcategories, {}] })).toBe(false)
  })

  it('returns false if given an object for subcategories', () => {
    expect(isCategory({ title, subcategories: { subcategories } })).toBe(false)
  })
})
