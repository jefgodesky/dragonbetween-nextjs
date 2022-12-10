import Knowledge, { isKnowledge } from './Knowledge'

interface CharacterKnowledge {
  [name: string]: Knowledge
}

const isCharacterKnowledge = (obj: any): obj is CharacterKnowledge => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) {
    if (!isKnowledge(obj[key])) return false
  }
  return true
}

export default CharacterKnowledge
export { isCharacterKnowledge }
