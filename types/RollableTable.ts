import RollableTableRow, { isRollableTableRow } from './RollableTableRow'

interface RollableTable {
  dice: string
  rows: RollableTableRow[]
}

const isRollableTable = (obj: any): obj is RollableTable => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  if (typeof obj.dice !== 'string') return false
  const checkRows = Array.isArray(obj.rows) && obj.rows.map((row: any) => isRollableTableRow(row))
    .reduce((acc: boolean, curr: boolean) => acc && curr, true)
  return checkRows
}

export default RollableTable
export { isRollableTable }
