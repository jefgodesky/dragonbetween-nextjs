interface RollableTableRow {
  min: number
  max: number
  result: string
}

const isRollableTableRow = (obj: any): obj is RollableTableRow => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  const { min, max, result } = obj
  if (typeof min !== 'number' || typeof max !== 'number' || typeof result !== 'string') return false
  return true
}

export default RollableTableRow
export { isRollableTableRow }
