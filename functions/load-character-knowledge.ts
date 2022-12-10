import axios from 'axios'
import { parse } from 'papaparse'
import CharacterKnowledge from '../types/CharacterKnowledge'
import addSpecialCharacter from './add-special-character'

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPsiUVq85mMWEYH9v7XIyDLT2F7_Ndxzjyum9MP7owtjPea7rdi2D5bZRFDCFHm15vwQ146ML0UzeH/pub?gid=162526228&single=true&output=csv'

const loadCharacterKnowledge = async (): Promise<CharacterKnowledge> => {
  const res = await axios.get(spreadsheetUrl)
  const data: string[][] = parse(res.data).data.map(arr => (arr as string[]).map(el => el.toString()))
  const knowledge: CharacterKnowledge = {}

  if (data.length > 0) {
    for (let i = 1; i < data[0].length; i++) {
      const name = data[0][i]
      knowledge[name] = {}
      for (let j = 1; j < data.length; j++) {
        const key = data[j][0]
        knowledge[name][key] = data[j][i] !== ''
      }
    }
  }

  const withNone = addSpecialCharacter(knowledge, 'None', { top: true })
  const withGM = addSpecialCharacter(withNone, 'GM', { knows: true })
  return withGM
}

export default loadCharacterKnowledge
export { spreadsheetUrl }
