import Router from 'next/router'
import { setCookie } from 'cookies-next'
import challengeGM from './challenge-gm'

interface PossibleEvent {
  target?: {
    value?: string
  }
}

function setPOV (setter: Function, pov: string, testing = false): void {
  setCookie('POV', pov)
  setter(pov)
  if (!testing) Router.reload()
}

export default function getSelectedPOV (setter: Function, testing = false) {
  return function (event: PossibleEvent) {
    const val = (event.target as HTMLSelectElement)?.value
    if (val === 'GM' && challengeGM()) setPOV(setter, 'GM', testing)
    if (val !== 'GM' && val !== undefined) setPOV(setter, val, testing)
  }
}

export type { PossibleEvent }
