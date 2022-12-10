import Secret from '../types/Secret'

export default function parseSecret (orig: string): Secret | null {
  const elements = orig.match(/{{if ((.|\n)*?)}}((.|\n)*?){{\/if}}/m)
  if (elements === null || elements.length < 5) return null
  return { condition: elements[1], orig, text: elements[3] }
}
