import CharacterKnowledge from '../types/CharacterKnowledge'
import getSecrets from './get-secrets'

interface AddSpecialCharacterOptions {
  knows?: boolean
  top?: boolean
}

const addSpecialCharacter = (before: CharacterKnowledge, name: string, options?: AddSpecialCharacterOptions): CharacterKnowledge => {
  const alone: CharacterKnowledge = {}
  alone[name] = {}
  for (const secret of getSecrets(before)) {
    alone[name][secret] = options?.knows === true
  }
  return options?.top === true ? Object.assign({}, alone, before) : Object.assign({}, before, alone)
}

export default addSpecialCharacter
