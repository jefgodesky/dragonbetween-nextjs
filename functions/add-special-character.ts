import rfdc from 'rfdc'
import CharacterKnowledge from '../types/CharacterKnowledge'
import getSecrets from './get-secrets'

const clone = rfdc()

const addSpecialCharacter = (before: CharacterKnowledge, name: string, knows = false): CharacterKnowledge => {
  const after = clone(before)
  after[name] = {}
  for (const secret of getSecrets(before)) {
    after[name][secret] = knows
  }
  return after
}

export default addSpecialCharacter
