import { ReactElement } from 'react'
import Link from 'next/link'
import getRootCategories from '../../functions/get-root-categories'

export default function PageHeadFavicons (): ReactElement {
  const items = getRootCategories().map(category => (
    <li key={`categry-${category.slug ?? category.title}`}>
      <Link href={`/category/${category.slug ?? category.title}`}>
        {category.title}
      </Link>
    </li>
  ))

  return (
    <main>
      <h1>Explore</h1>
      <ul>
        {items}
      </ul>
    </main>
  )
}
