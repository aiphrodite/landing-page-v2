export const metadata = {
  title: 'aiphrodite.ai - About',
  description: 'testing ads, the smarter way',
}

import Intro from './intro'
import Story from './story'
import Stats from '@/components/stats'
import Team from '@/components/team'
import Career from '@/components/career'
import Process from '@/components/process'
import Cta from '@/components/cta-career'

export default function About() {
  return (
    <>
      <Intro />
      <Story />
      {/* <Stats /> */}
      <Team />
      <Career />
      {/* <Process /> */}
      <Cta />
    </>
  )
}
