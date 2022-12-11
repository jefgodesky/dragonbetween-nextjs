import Knowledge from '../types/Knowledge'
import findSecrets from './find-secrets'
import clear from './clear'

export default function renderSecrets (orig: string, knowledge: Knowledge): string {
  let working = orig
  const secrets = findSecrets(orig)
  for (const secret of secrets) {
    const { orig, condition, text } = secret
    if (orig === undefined) continue
    const replacement = clear(knowledge, condition) ? text : ''
    working = working.replace(orig, replacement)
  }
  return secrets.length === 0 ? working : renderSecrets(working, knowledge)
}
