import Head from 'next/head'
import PageHeadGoogleFonts from '../PageHeadGoogleFonts/PageHeadGoogleFonts'
import PageHeadTwitterCard from '../PageHeadTwitterCard/PageHeadTwitterCard'
import PageHeadOG from '../PageHeadOG/PageHeadOG'

interface PageHeadProps {
  title?: string
  path?: string
  description?: string
  image?: string
}

export default function PageHead (props: PageHeadProps) {
  const title = props.title ?? 'The Dragon Between'
  const description = props.description ?? 'Welcome to Eberron.'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style.css" />
      <PageHeadGoogleFonts />
      <PageHeadTwitterCard {...props} />
      <PageHeadOG {...props} />
    </Head>
  )
}

export type { PageHeadProps }
