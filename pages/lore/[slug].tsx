import { GetServerSideProps } from 'next'
import { ReactElement, useState } from 'react'
import parse from 'html-react-parser'
import { getCookie } from 'cookies-next'
import Category from '../../types/Category'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import PageHead from '../../components/PageHead/PageHead'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import getLoreIndexEntry from '../../functions/get-lore-index-entry'
import getLoreIndexEntryCategories from '../../functions/get-lore-index-entry-categories'
import getSelectedPOV from '../../functions/get-selected-pov'
import loadCharacterKnowledge from '../../functions/load-character-knowledge'
import renderLoreText from '../../functions/render-lore-text'

interface LoreProperties {
  knowledge: CharacterKnowledge
  initPOV: string
  title: string
  image?: string
  description?: string
  markup: string
  path: string
  categories: Category[]
}

export default function Lore ({ knowledge, initPOV, title, image, description, markup, path, categories }: LoreProperties): ReactElement {
  const [pov, setPOV] = useState(initPOV)
  const onPOVChange = getSelectedPOV(setPOV)
  return (
    <>
      <PageHead title={title} path={path} description={description} image={image} />
      <Header knowledge={knowledge} pov={pov} onPOVChange={onPOVChange} />
      <main className='lore'>
        <h1>{title}</h1>
        {parse(markup)}
        <Categories categories={categories} />
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
  const image = entry?.image === undefined ? '/img/social.jog' : entry.image
  const description = entry?.description === undefined ? 'Welcome to Eberron.' : entry.description
  const markup = entry === null
    ? '<p>You&rsquo;ve never heard of such a thing&hellip;</p>'
    : await renderLoreText(entry, know)
  const path = `/lore/${id}`
  const categories = entry === null ? [] : getLoreIndexEntryCategories(entry, know)

  return { props: { knowledge, initPOV, title, image, description, markup, path, categories } }
}
