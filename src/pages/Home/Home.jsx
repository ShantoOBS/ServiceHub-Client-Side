import React from 'react'
import Hero from './Components/Hero'
import HowItWork from './Components/HowItWork'
import FQA from './Components/FQA'

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-black">Our services</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['AC repair', 'Plumbing', 'Cleaning', 'Electrical'].map((name) => (
            <li
              key={name}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="font-medium text-black">{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <HowItWork />
      <FQA />
    </main>
  )
}
