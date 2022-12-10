import { ReactElement } from 'react'
import PageHead from '../components/PageHead/PageHead'
import Header from '../components/Header/Header'

export default function Home (): ReactElement {
  return (
    <>
      <PageHead />
      <Header />
      <main className='home'>
        <p><em>This website records the lore of one iteration of the world of <a href='/eberron'>Eberron</a>. There are many Eberrons, but this one is ours.</em></p>
        <section className='current-campaign'>
          <h2>Current Campaign</h2>
          <img src='/img/campaigns/sword-and-shield.png' alt='Eberron: Sword &amp; Shield' />
          <p><em>Two years after the signing of the <a href='/treaty-of-thronehold'>Treaty of Thronehold</a>, a few <a href='/breland/culture'>Brelish</a> patriots in <a href='/sharn'>Sharn</a> seek to join the <a href='/swords-of-liberty'>Swords of Liberty</a> to end the <a href='/monarchy'>monarchy</a> once and for all. It is the beginning of a tale of radicals and revolution that will change the City of Towers &mdash; and <a href='/eberron'>Eberron</a> &mdash; forever.</em></p>
        </section>
      </main>
    </>
  )
}
