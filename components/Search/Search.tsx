import { ReactElement } from 'react'
import {NextRouter, useRouter} from 'next/router'
import { Typeahead } from 'react-bootstrap-typeahead'
import Knowledge from '../../types/Knowledge'
import getSortingString from '../../functions/get-sorting-string'
import getLoreIndexEntries from '../../functions/get-lore-index-entries'

interface SearchProps {
  knowledge?: Knowledge
}

const onChange = (option: any, router: NextRouter): void => {
  if (option === undefined) return
  if (typeof option === 'string') router.push(option)
  if (typeof option.slug === 'string') router.push(option.slug)
}

export default function Search ({ knowledge }: SearchProps): ReactElement {
  const router = useRouter()
  const options = getLoreIndexEntries(knowledge ?? {})
    .sort((a, b) => getSortingString(a).localeCompare(getSortingString(b)))
    .map((entry, id) => ({ id, label: entry.title, slug: entry.slug }))

  return (
    <nav className='search'>
      <Typeahead
        id='search'
        onChange={selected => onChange(selected[0], router)}
        options={options}
        multiple={false}
        placeholder='Search'
      />
    </nav>
  )
}

export type { SearchProps }
