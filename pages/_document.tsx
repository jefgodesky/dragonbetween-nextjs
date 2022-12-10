import { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

export default function Document (): ReactElement {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='/style.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='crossOrigin' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@800&family=Alegreya+Sans:ital,wght@0,300;0,700;1,300;1,700&family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&display=swap' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
