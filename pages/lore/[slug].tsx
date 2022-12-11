import { GetServerSideProps } from 'next'
import { ReactElement, useState } from 'react'
import parse from 'html-react-parser'
import { getCookie } from 'cookies-next'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import PageHead from '../../components/PageHead/PageHead'
import Header from '../../components/Header/Header'
import getLoreIndexEntry from '../../functions/get-lore-index-entry'
import getSelectedPOV from '../../functions/get-selected-pov'
import loadCharacterKnowledge from '../../functions/load-character-knowledge'
import renderLoreText from '../../functions/render-lore-text'

interface LoreProperties {
  knowledge: CharacterKnowledge
  initPOV: string
  title: string
  markup: string
}

export default function Lore ({ knowledge, initPOV, title, markup }: LoreProperties): ReactElement {
  const [pov, setPOV] = useState(initPOV)
  const onPOVChange = getSelectedPOV(setPOV)
  return (
    <>
      <PageHead />
      <Header knowledge={knowledge} pov={pov} onPOVChange={onPOVChange} />
      <main className='lore'>
        <h1>{title}</h1>
        {parse(markup)}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=150')
  const knowledge = await loadCharacterKnowledge()
  const initPOV = getCookie('POV', { req: context.req }) ?? 'None'

  const { slug } = context.query
  const id = Array.isArray(slug) ? slug[0] : slug === undefined ? '' : slug
  const entry = getLoreIndexEntry(id)
  const pov = typeof initPOV === 'string' ? initPOV : 'None'
  const know = knowledge[pov] ?? {}
  const title = entry === null ? 'What’s that?' : entry.title
  const markup = entry === null
    ? '<p>You&rsquo;ve never heard of such a thing&hellip;</p>'
    : await renderLoreText(entry, know)

  return { props: { knowledge, initPOV, title, markup } }
}
