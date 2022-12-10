import Knowledge from '../types/Knowledge'
import { evaluate } from '@bluemarblepayroll/logicality'

export default function clear (knowledge: Knowledge, secret?: string): boolean {
  return evaluate(secret ?? 'true', knowledge)
}
