import { ReactElement } from 'react'
import Head from 'next/head'
import PageHeadFavicons from '../PageHeadFavicons/PageHeadFavicons'
import PageHeadTwitterCard from '../PageHeadTwitterCard/PageHeadTwitterCard'
import PageHeadOG from '../PageHeadOG/PageHeadOG'

interface PageHeadProps {
  title?: string
  path?: string
  description?: string
  image?: string
}

export default function PageHead (props: PageHeadProps): ReactElement {
  const title = props.title ?? 'The Dragon Between'
  const description = props.description ?? 'Welcome to Eberron.'

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <PageHeadFavicons />
      <PageHeadTwitterCard {...props} />
      <PageHeadOG {...props} />
    </Head>
  )
}

export type { PageHeadProps }
