export default function pickRandomElemFromArr<Type> (arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}
