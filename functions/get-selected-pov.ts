interface PossibleEvent {
  target?: {
    value?: string
  }
}

export default function getSelectedPOV (setter: Function) {
  return function (event: PossibleEvent) {
    const val = (event.target as HTMLSelectElement)?.value
    if (val !== undefined) setter(val)
  }
}

export type { PossibleEvent }
