import Entitled from '../types/Entitled'

export default function getSortingString (item: Entitled): string {
  if (item.sort !== undefined) return item.sort
  return item.title
}
