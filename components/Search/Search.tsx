import { ReactElement, useRef } from 'react'
import { useRouter } from 'next/router'
import Select, { SelectInstance } from 'react-select'
import Knowledge from '../../types/Knowledge'
import LoreIndexEntry, { isLoreIndexEntry } from '../../types/LoreIndexEntry'
import getSortingString from '../../functions/get-sorting-string'
import getLoreIndexEntries from '../../functions/get-lore-index-entries'

interface SearchProps {
  knowledge?: Knowledge
}

export default function Search ({ knowledge }: SearchProps): ReactElement {
  const ref = useRef<SelectInstance>()
  const router = useRouter()
  const entries = getLoreIndexEntries(knowledge ?? {})
    .sort((a, b) => getSortingString(a).localeCompare(getSortingString(b)))

  const onSelect = (entry: LoreIndexEntry | null): void => {
    if (isLoreIndexEntry(entry) && entry.slug !== undefined) {
      router.push(`/lore/${entry.slug}`)
        .then(() => { if (ref.current !== undefined) ref.current.clearValue() })
        .catch(err => console.error(err))
    }
  }

  return (
    <nav className='search'>
      <Select<LoreIndexEntry>
        ref={ref as any}
        options={entries}
        getOptionLabel={entry => entry.title}
        getOptionValue={entry => entry.slug ?? ''}
        onChange={onSelect}
        instanceId='search'
        placeholder='Search'
        isClearable
        blurInputOnSelect
        closeMenuOnSelect
      />
    </nav>
  )
}

export type { SearchProps }
