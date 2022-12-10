import rfdc from 'rfdc'
import LoreIndexEntry from '../types/LoreIndexEntry'
import getSortingString from './get-sorting-string'

describe('getSortingString', () => {
  const min: LoreIndexEntry = { title: 'John Doe', text: {}, categories: {} }

  it('returns the sort if the entry has one', () => {
    const clone = rfdc()
    const cpy = clone(min)
    cpy.sort = 'Doe, John'
    expect(getSortingString(cpy)).toBe(cpy.sort)
  })

  it('returns the title if the entry doesn\'t have a sort', () => {
    expect(getSortingString(min)).toBe(min.title)
  })
})
