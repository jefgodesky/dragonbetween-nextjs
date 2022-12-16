import { ReactElement } from 'react'

export default function PageHeadFavicons (): ReactElement {
  return (
    <>
      <link rel='icon' href='/favicon-black/favicon.ico' />
      <link rel='icon' media='(prefers-color-scheme: dark)' href='/favicon-white/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon-black/logo192.png' />
      <link rel='apple-touch-icon' media='(prefers-color-scheme: dark)' href='/favicon-white/logo192.png' />
      <link rel='manifest' href='/manifest-light.json' />
      <link rel='manifest' media='(prefers-color-scheme: dark)' href='/manifest-dark.json' />
    </>
  )
}
