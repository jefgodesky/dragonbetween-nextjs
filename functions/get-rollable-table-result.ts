import RollableTable from '../types/RollableTable'
import isInRange from './is-in-range'

export default function getRollableTableResult (table: RollableTable, num: number): string {
  const rows = table.rows.filter(row => isInRange(num, row.min, row.max))
  return rows.length > 0 ? rows[0].result : 'Error'
}
