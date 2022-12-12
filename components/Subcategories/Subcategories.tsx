import { ReactElement } from 'react'
import Category from '../../types/Category'

interface SubcategoriesProps {
  categories: Category[]
}

export default function Subcategories ({ categories }: SubcategoriesProps): ReactElement {
  if (categories.length === 0) return (<></>)

  const items = categories.map((cat, index) => (
    <li key={`category-${index}`}>
      <a href={`/category/${cat.slug ?? ''}`}>
        {cat.title}
      </a>
    </li>
  ))

  return (
    <section className='subcategories'>
      <h2>Subcategories</h2>
      <ul>
        {items}
      </ul>
    </section>
  )
}
