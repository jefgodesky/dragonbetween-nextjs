import RollableTable, { isRollableTable } from './RollableTable'

interface RollableTables {
  [name: string]: RollableTable
}

const isRollableTables = (obj: any): obj is RollableTables => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  const check = Object.keys(obj)
    .map(key => isRollableTable(obj[key]))
    .reduce((acc, curr) => acc && curr, true)
  return check
}

export default RollableTables
export { isRollableTables }
