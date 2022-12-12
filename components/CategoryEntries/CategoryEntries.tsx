import { ReactElement } from 'react'
import LoreIndexEntry from '../../types/LoreIndexEntry'

interface CategoryEntriesProps {
  title: string
  entries: LoreIndexEntry[]
}

export default function CategoryEntries ({ title, entries }: CategoryEntriesProps): ReactElement {
  if (entries.length === 0) return (<></>)

  const items = entries.map((cat, index) => (
    <li key={`entry-${index}`}>
      <a href={`/lore/${cat.slug ?? ''}`}>
        {cat.title}
      </a>
    </li>
  ))

  return (
    <section className='entries'>
      <h1>{title}</h1>
      <ul>
        {items}
      </ul>
    </section>
  )
}
