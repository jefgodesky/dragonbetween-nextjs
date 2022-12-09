import Head from 'next/head'

interface PageHeadProps {
  title?: string
  path?: string
  description?: string
  image?: string
}

export default function PageHead (props: PageHeadProps) {
  const title = props.title ?? 'The Dragon Between'
  const url = props.path !== undefined ? `http://dragonbetween.net${props.path}` : 'https://dragonbetween.net'
  const description = props.description ?? 'Welcome to Eberron.'
  const image = props.image ?? 'https://dragonbetween.net/img/social.jpg'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossOrigin' />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@800&family=Alegreya+Sans:ital,wght@0,300;0,700;1,300;1,700&family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='The Dragon Between' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Head>
  )
}

export type { PageHeadProps }
