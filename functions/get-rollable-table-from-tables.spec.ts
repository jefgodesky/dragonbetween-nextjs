import getRollableTableFromTables from './get-rollable-table-from-tables'

describe('getRollableTableFromTables', () => {
  const tables = {
    easy: {
      dice: '1d6',
      rows: [
        { min: 1, max: 2, result: 'Failure' },
        { min: 3, max: 6, result: 'Success' }
      ]
    },
    normal: {
      dice: '1d6',
      rows: [
        { min: 1, max: 3, result: 'Failure' },
        { min: 4, max: 6, result: 'Success' }
      ]
    },
    hard: {
      dice: '1d6',
      rows: [
        { min: 1, max: 4, result: 'Failure' },
        { min: 5, max: 6, result: 'Success' }
      ]
    }
  }

  it('returns the table if it\'s there', () => {
    const actual = getRollableTableFromTables('normal', tables)
    expect(actual?.rows[0].max).toEqual(3)
  })

  it('returns null if there is no such table', () => {
    const actual = getRollableTableFromTables('nope', tables)
    expect(actual).toBeNull()
  })
})
