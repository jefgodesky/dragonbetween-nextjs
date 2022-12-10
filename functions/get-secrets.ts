import CharacterKnowledge from '../types/CharacterKnowledge'

const getSecrets = (knowledge: CharacterKnowledge): string[] => {
  const full = Object.keys(knowledge).flatMap(name => Object.keys(knowledge[name]))
  return [...new Set(full)]
}

export default getSecrets
