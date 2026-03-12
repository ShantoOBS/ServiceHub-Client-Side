import React, { useMemo, useState } from 'react'
import { SERVICES } from './Components/ServiceData'
import ServiceSearchBar from './Components/ServiceSearchBar'
import ServiceGrid from './Components/ServiceGrid'
import RevealOnScroll from '../../components/RevealOnScroll'

export default function Services() {
  const [query, setQuery] = useState('')

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SERVICES
    return SERVICES.filter((service) => {
      const haystack = `${service.name} ${service.description}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  return (
    <main className="min-h-[70vh] bg-[#f3f4f6] px-5  py-3 ">
      <RevealOnScroll>
        <section className="mx-auto max-w-7xl rounded-3xl bg-white/60  shadow-sm backdrop-blur p-5">
          <ServiceSearchBar
            value={query}
            onChange={setQuery}
            total={filteredServices.length}
          />
          <ServiceGrid services={filteredServices} />
        </section>
      </RevealOnScroll>
    </main>
  )
}
