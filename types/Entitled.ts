interface Entitled {
  title: string
  sort?: string
}

const isEntitled = (obj: any): obj is Entitled => {
  if (obj === null) return false
  if (typeof obj !== 'object' || Array.isArray(obj)) return false
  const { title, sort } = obj
  if (typeof title !== 'string') return false
  if (sort !== undefined && typeof sort !== 'string') return false
  return true
}

export default Entitled
export { isEntitled }
