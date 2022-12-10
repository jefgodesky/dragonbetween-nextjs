import { ReactElement } from 'react'

interface PageHeadOGProps {
  title?: string
  path?: string
  description?: string
  image?: string
}

export default function PageHeadOG (props: PageHeadOGProps): ReactElement {
  const title = props.title ?? 'The Dragon Between'
  const url = props.path !== undefined ? `http://dragonbetween.net${props.path}` : 'https://dragonbetween.net'
  const description = props.description ?? 'Welcome to Eberron.'
  const image = props.image ?? 'https://dragonbetween.net/img/social.jpg'

  return (
    <>
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='The Dragon Between' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </>
  )
}

export type { PageHeadOGProps }
