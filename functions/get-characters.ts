import CharacterKnowledge from '../types/CharacterKnowledge'

const getCharacters = (knowledge: CharacterKnowledge): string[] => Object.keys(knowledge)

export default getCharacters
