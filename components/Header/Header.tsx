import { ReactElement } from 'react'

export default function Header (): ReactElement {
  return (
    <header>
      <h1>
        <a href='/'>
          <img src='/img/dragonbetween.png' alt='The Dragon Between' />
        </a>
      </h1>
    </header>
  )
}
