import { ReactElement } from 'react'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import POVSelect from '../POVSelect/POVSelect'
import getCharacters from '../../functions/get-characters'

interface HeaderProps {
  characterKnowledge: CharacterKnowledge

}

export default function Header ({ characterKnowledge }: HeaderProps): ReactElement {
  const characters = getCharacters(characterKnowledge)
  return (
    <header>
      <POVSelect characters={characters} current='None' onChange={() => {}} />
      <h1>
        <a href='/'>
          <img src='/img/dragonbetween.png' alt='The Dragon Between' />
        </a>
      </h1>
    </header>
  )
}
