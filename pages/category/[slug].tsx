import { GetServerSideProps } from 'next'
import { ReactElement, useState } from 'react'
import parse from 'html-react-parser'
import { getCookie } from 'cookies-next'
import Category from '../../types/Category'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import LoreIndexEntry from '../../types/LoreIndexEntry'
import PageHead from '../../components/PageHead/PageHead'
import Header from '../../components/Header/Header'
import Subcategories from '../../components/Subcategories/Subcategories'
import CategoryEntries from '../../components/CategoryEntries/CategoryEntries'
import Categories from '../../components/Categories/Categories'
import getCategory from '../../functions/get-category'
import getParentCategories from '../../functions/get-parent-categories'
import getSubcategories from '../../functions/get-subcategories'
import getCategoryMain from '../../functions/get-category-main'
import getLoreIndexEntriesInCategory from '../../functions/get-lore-index-entries-in-category'
import getSelectedPOV from '../../functions/get-selected-pov'
import loadCharacterKnowledge from '../../functions/load-character-knowledge'
import renderMarkdown from '../../functions/render-markdown'

interface CategoryPageProperties {
  knowledge: CharacterKnowledge
  initPOV: string
  title: string
  markup: string
  main: LoreIndexEntry | null,
  entries: LoreIndexEntry[]
  subcategories: Category[]
  categories: Category[]
}

export default function CategoryPage (props: CategoryPageProperties): ReactElement {
  const { knowledge, initPOV, title, markup, main, entries, subcategories, categories } = props
  const [pov, setPOV] = useState(initPOV)
  const onPOVChange = getSelectedPOV(setPOV)
  const seeMain = main === null
    ? (<></>)
    : (<aside className='main'><em>See</em> <a href={`/lore/${main.slug}`}>{main.title}</a></aside>)
  return (
    <>
      <PageHead />
      <Header knowledge={knowledge} pov={pov} onPOVChange={onPOVChange} />
      <main className='category'>
        <h1>{title}</h1>
        {seeMain}
        {parse(markup)}
        <Subcategories categories={subcategories} />
        <CategoryEntries title={`Lore on ${title}`} entries={entries} />
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
  const cat = getCategory(id)
  const pov = typeof initPOV === 'string' ? initPOV : 'None'
  const know = knowledge[pov] ?? {}
  const title = cat === null ? 'What’s that?' : cat.title
  const markup = cat === null
    ? '<p>You&rsquo;ve never heard of such a thing&hellip;</p>'
    : cat.description === undefined ? '' : await renderMarkdown(cat.description)
  const categories = cat === null ? [] : getParentCategories(cat, know)
  const subcategories = cat === null ? [] : getSubcategories(cat, know)
  const main = cat === null ? null : getCategoryMain(cat)
  const entries = cat === null ? [] : getLoreIndexEntriesInCategory(cat, know)

  return { props: { knowledge, initPOV, title, markup, main, entries, subcategories, categories } }
}
