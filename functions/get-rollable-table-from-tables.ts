import RollableTable from '../types/RollableTable'
import RollableTables from '../types/RollableTables'

export default function getRollableTableFromTables (name: string, tables: RollableTables): RollableTable | null {
  if (tables[name] !== undefined) return tables[name]
  return null
}
