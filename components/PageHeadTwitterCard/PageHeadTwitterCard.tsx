import { ReactElement } from 'react'

interface PageHeadTwitterCardProps {
  title?: string
  description?: string
  image?: string
}

export default function PageHeadTwitterCard (props: PageHeadTwitterCardProps): ReactElement {
  const title = props.title ?? 'The Dragon Between'
  const description = props.description ?? 'Welcome to Eberron.'
  const image = props.image ?? 'https://dragonbetween.net/img/social.jpg'

  return (
    <>
      <meta name='twitter:title' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </>
  )
}

export type { PageHeadTwitterCardProps }
