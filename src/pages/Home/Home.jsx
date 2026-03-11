import React from 'react'
import Hero from './Components/Hero'
import HowItWork from './Components/HowItWork'
import ServiceCount from './Components/ServiceCount'
import WhyChooseUS from './Components/WhyChooseUS'
import FQA from './Components/FQA'

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <ServiceCount />
  
      <HowItWork />
      <WhyChooseUS />
      <FQA />
    </main>
  )
}
