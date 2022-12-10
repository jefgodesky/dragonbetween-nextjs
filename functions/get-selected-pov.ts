import { setCookie } from 'cookies-next'
import challengeGM from './challenge-gm'

interface PossibleEvent {
  target?: {
    value?: string
  }
}

function setPOV (setter: Function, pov: string): void {
  setCookie('POV', pov)
  setter(pov)
}

export default function getSelectedPOV (setter: Function) {
  return function (event: PossibleEvent) {
    const val = (event.target as HTMLSelectElement)?.value
    if (val === 'GM' && challengeGM()) setPOV(setter, 'GM')
    if (val !== 'GM' && val !== undefined) setPOV(setter, val)
  }
}

export type { PossibleEvent }
