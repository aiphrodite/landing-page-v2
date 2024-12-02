export const metadata = {
  title: 'aiphrodite.ai - About',
  description: 'testing ads, the smarter way',
}

import Intro from './intro'
import Values from './values'
import Team from './team'
import Career from './career'
import Cta from './cta-career'

export default function About() {
  return (
    <>
      <Intro />
      <Values />
      <Team />
      <Career />
      <Cta />
    </>
  )
}
