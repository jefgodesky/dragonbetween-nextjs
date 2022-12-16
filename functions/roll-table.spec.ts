import rollTable from './roll-table'

describe('rollTable', () => {
  const tables = {
    Names: {
      dice: '2d4',
      rows: [
        { min: 2, max: 8, result: '<FIRST NAMES> <LAST NAMES>' }
      ]
    },
    'First Names': {
      dice: '5d100',
      rows: [
        { min: 5, max: 500, result: 'Jimothy' }
      ]
    },
    'Last Names': {
      dice: '25d100',
      rows: [
        { min: 25, max: 2500, result: 'Christmas' }
      ]
    },
    Variants: {
      dice: '1d4',
      rows: [
        { min: 1, max: 2, result: '#1/#2' },
        { min: 3, max: 4, result: '#3/#4' }
      ]
    }
  }

  it('rolls on the tables provided', () => {
    expect(rollTable('Names', tables)).toEqual('Jimothy Christmas')
  })

  it('can randomly choose a variant', () => {
    const possibilities = ['#1', '#2', '#3', '#4']
    expect(possibilities).toContain(rollTable('Variants', tables, '/'))
  })
})
