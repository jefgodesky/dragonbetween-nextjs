import { ReactElement } from 'react'
import Category from '../../types/Category'

interface CategoriesProps {
  categories: Category[]
}

export default function Categories ({ categories }: CategoriesProps): ReactElement {
  if (categories.length === 0) return (<></>)

  const items = categories.map((cat, index) => (
    <li key={`category-${index}`}>
      <a href={`/category/${cat.slug}`}>
        {cat.title}
      </a>
    </li>
  ))

  return (
    <nav className='categories'>
      <ul>
        {items}
      </ul>
    </nav>
  )
}
