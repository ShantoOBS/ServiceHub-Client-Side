import React from 'react'
import Hero from './Components/Hero'
import HowItWork from './Components/HowItWork'
import ServiceCount from './Components/ServiceCount'
import WhyChooseUS from './Components/WhyChooseUS'
import FQA from './Components/FQA'
import NewHero from './Components/NewHero'
import RevealOnScroll from '../../components/RevealOnScroll'

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <RevealOnScroll>
        <NewHero />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServiceCount />
      </RevealOnScroll>
      <RevealOnScroll>
        <HowItWork />
      </RevealOnScroll>
      <RevealOnScroll>
        <WhyChooseUS />
      </RevealOnScroll>
      <RevealOnScroll>
        <FQA />
      </RevealOnScroll>
    </main>
  )
}
