import { GetServerSideProps } from 'next'
import { ReactElement, useState } from 'react'
import { getCookie } from 'cookies-next'
import CharacterKnowledge from '../../types/CharacterKnowledge'
import Browse from '../../components/Browse/Browse'
import PageHead from '../../components/PageHead/PageHead'
import Header from '../../components/Header/Header'
import getSelectedPOV from '../../functions/get-selected-pov'
import loadCharacterKnowledge from '../../functions/load-character-knowledge'

interface CategoryRootProps {
  knowledge: CharacterKnowledge
  initPOV: string
}

export default function CategoryRoot ({ knowledge, initPOV }: CategoryRootProps): ReactElement {
  const [pov, setPOV] = useState(initPOV)
  const onPOVChange = getSelectedPOV(setPOV)
  return (
    <>
      <PageHead />
      <Header knowledge={knowledge} pov={pov} onPOVChange={onPOVChange} />
      <Browse />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=150')
  const knowledge = await loadCharacterKnowledge()
  const initPOV = getCookie('POV', { req: context.req }) ?? 'None'
  return { props: { knowledge, initPOV } }
}
