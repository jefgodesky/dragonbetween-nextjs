export default function isInRange (num: number, ...range: number[]): boolean {
  const min = Math.min(...range)
  const max = Math.max(...range)
  return num >= min && num <= max
}
