import { ReactElement } from 'react'

interface POVSelectProps {
  characters: string[]
  current: string
  onChange: Function
}

export default function POVSelect ({ characters, current, onChange }: POVSelectProps): ReactElement {
  const id = 'pov-select'
  const options = characters.map((name: string, index: number) => (<option key={`pov-option-${index}`}>{name}</option>))
  return (
    <nav className={id}>
      <label htmlFor={id}>POV</label>
      <select id={id} onChange={event => onChange(event)} value={current}>
        {options}
      </select>
    </nav>
  )
}
