import { ReactElement } from 'react'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import POVSelect from '../POVSelect/POVSelect'
import getCharacters from '../../functions/get-characters'

interface HeaderProps {
  knowledge: CharacterKnowledge
  onPOVChange: Function
  pov: string
}

export default function Header ({ knowledge, onPOVChange, pov }: HeaderProps): ReactElement {
  const characters = getCharacters(knowledge)
  return (
    <header>
      <POVSelect characters={characters} current={pov} onChange={onPOVChange} />
      <h1>
        <a href='/'>
          <img src='/img/dragonbetween.png' alt='The Dragon Between' />
        </a>
      </h1>
    </header>
  )
}
