import axios from 'axios'
import loadCharacterKnowledge, { spreadsheetUrl } from './load-character-knowledge'
import { isCharacterKnowledge } from '../types/CharacterKnowledge'
import getCharacters from './get-characters'
import getSecrets from './get-secrets'

describe('loadCharacterKnowledge', () => {
  jest.mock('axios')
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get = jest.fn()

  afterEach(() => mockedAxios.get.mockReset())

  it('loads Google Spreadsheet', async () => {
    mockedAxios.get.mockResolvedValue({ data: '' })
    await loadCharacterKnowledge()
    expect(mockedAxios.get).toHaveBeenCalledWith(spreadsheetUrl)
  })

  it('returns parsed CharacterKnowledge', async () => {
    const data = '"","Alice","Bob","Charlie"\n"secret1","x","",""\n"secret2","","x",""'
    mockedAxios.get.mockResolvedValue({ data })
    const knowledge = await loadCharacterKnowledge()
    expect(isCharacterKnowledge(knowledge)).toBe(true)
    expect(isCharacterKnowledge(knowledge)).toBe(true)
    expect(getCharacters(knowledge).join(' ')).toBe('None Alice Bob Charlie GM')
    expect(getSecrets(knowledge).join(' ')).toBe('secret1 secret2')
    expect(Object.values(knowledge.None).join(' ')).toBe('false false')
    expect(Object.values(knowledge.Alice).join(' ')).toBe('true false')
    expect(Object.values(knowledge.Bob).join(' ')).toBe('false true')
    expect(Object.values(knowledge.Charlie).join(' ')).toBe('false false')
    expect(Object.values(knowledge.GM).join(' ')).toBe('true true')
  })
})
