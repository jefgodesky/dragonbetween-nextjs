import { Dice } from 'dice-typescript'

export default function roll (expr: string): number {
  const dice = new Dice()
  return dice.roll(expr).total
}
