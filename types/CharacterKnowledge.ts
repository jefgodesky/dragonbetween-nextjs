interface CharacterKnowledge {
  [key: string]: boolean
}

const isCharacterKnowledge = (obj: any): obj is CharacterKnowledge => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'boolean') return false
  }
  return true
}

export default CharacterKnowledge
export { isCharacterKnowledge }
