import { ReactElement } from 'react'
import Knowledge from '../../types/Knowledge'
// import getSortingString from '../../functions/get-sorting-string'
// import getLoreIndexEntries from '../../functions/get-lore-index-entries'

interface SearchProps {
  knowledge?: Knowledge
}

export default function Search ({ knowledge }: SearchProps): ReactElement {
  /**
  const options = getLoreIndexEntries(knowledge ?? {})
    .sort((a, b) => getSortingString(a).localeCompare(getSortingString(b)))
    .map((entry, id) => ({ id, label: entry.title, slug: entry.slug }))
   **/

  return (
    <nav className='search'>
      <button>Go</button>
    </nav>
  )
}

export type { SearchProps }
