import Secret from '../types/Secret'
import parseSecret from './parse-secret'

export default function findSecrets (orig: string): Secret[] {
  const stack: Array<{ begin: number, end?: number }> = []
  const secrets: Secret[] = []
  let i = 0
  const opener = '{{if '
  const closer = '{{/if}}'

  while (i < orig.length) {
    const iono = orig.indexOf(opener, i) // Index of next opener
    const ionc = orig.indexOf(closer, i) // Index of next closer
    const oa = iono > -1 // There is an opener ahead
    const ca = ionc > -1 // There is a closer ahead
    const next = !oa && !ca ? 'none' : oa && !ca ? 'opener' : !oa && ca ? 'closer' : iono < ionc ? 'opener' : 'closer'

    if (next === 'none') {
      i = orig.length
    } else if (next === 'opener') {
      stack.push({ begin: iono })
      i = iono + opener.length
    } else {
      const working = stack.length > 0 ? stack[stack.length - 1] : null
      if (working !== null) working.end = ionc + closer.length
      i = ionc + closer.length
      const span = stack.pop()
      const secret = parseSecret(orig.substring(span?.begin ?? 0, span?.end ?? 0))
      if (secret !== null) secrets.push(secret)
    }
  }

  return secrets
}
