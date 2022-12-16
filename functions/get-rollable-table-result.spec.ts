import getRollableTableResult from './get-rollable-table-result'

describe('getRollableTableResult', () => {
  const table = {
    dice: '1d6',
    rows: [
      { min: 1, max: 3, result: 'Failure' },
      { min: 4, max: 6, result: 'Success' }
    ]
  }

  it('returns the correct result', () => {
    expect(getRollableTableResult(table, 1)).toBe(table.rows[0].result)
    expect(getRollableTableResult(table, 4)).toBe(table.rows[1].result)
  })

  it('returns an error if given a number not in the table', () => {
    expect(getRollableTableResult(table, 7)).toBe('Error')
  })
})
