import { getCookie, setCookie } from 'cookies-next'

const gmpass = '!1Kzf2^QU8k*#LFSL4jUh*bqgcgNOsw$xYKat28#'

export default function challengeGM (): boolean {
  if (getCookie('isGM') === '1') return true
  const given = window.prompt('If GM thou be, speaketh now the word of pass.')
  if (given === gmpass) {
    setCookie('isGM', '1')
    window.alert('Welcome to Eberron, Sovereign.')
    return true
  } else {
    window.alert('Thou art no true GM. Begone, vile pretender!')
    return false
  }
}
