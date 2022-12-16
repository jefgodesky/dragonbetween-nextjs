import RollableTables from '../types/RollableTables'
import getTable from './get-table'
import getRollableTableResult from './get-rollable-table-result'
import pickRandomElemFromArr from './pick-random-elem-from-arr'
import roll from './roll'

export default function rollTable (name: string, tables: RollableTables, variantSeparator?: string, depth: number = 0): string {
  const table = getTable(name, tables)
  if (table === null) return ''
  let result = getRollableTableResult(table, roll(table.dice))
  if (depth > 25) return result

  for (const name of Object.keys(tables)) {
    const ref = `<${name.toUpperCase()}>`
    if (result.includes(ref)) {
      result = result.replace(ref, rollTable(name, tables, variantSeparator, depth + 1))
    }
  }

  return variantSeparator === undefined
    ? result
    : pickRandomElemFromArr(result.split(variantSeparator))
}
