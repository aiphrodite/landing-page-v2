export const metadata = {
  title: 'aiphrodite.ai - AI-based ad testing',
  description: 'testing ads, the smarter way',
}

import Hero from '@/components/hero-home'
import Work from "@/components/work";
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Features />
      <FeaturesBlocks />
      <Cta />
    </>
  )
}
