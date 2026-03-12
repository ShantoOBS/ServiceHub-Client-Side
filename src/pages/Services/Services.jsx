import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { SERVICES } from './Components/ServiceData'
import ServiceSearchBar from './Components/ServiceSearchBar'
import ServiceGrid from './Components/ServiceGrid'
import RevealOnScroll from '../../components/RevealOnScroll'
import useAxios from '../../Hook/useAxios'
import useAuth from '../../Hook/useAuth'

export default function Services() {
  const [query, setQuery] = useState('')
  const axios = useAxios()
  const { user } = useAuth() || {}
  const navigate = useNavigate()
  const location = useLocation()

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SERVICES
    return SERVICES.filter((service) => {
      const haystack = `${service.name} ${service.description}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  const handleBookService = async (service) => {
    if (!user) {
      navigate('/login', { state: location.pathname })
      return
    }

    try {
      await axios.post('/booking', {
        serviceId: service.id,
        serviceName: service.name,
        price: service.price,
        description: service.description,
        userEmail: user.email,
        userUid: user.uid,
        createdAt: new Date().toISOString(),
      })
      toast.success('Booking request created successfully.')
    } catch {
      toast.error('Something went wrong while creating your booking.')
    }
  }

  return (
    <main className="min-h-[70vh] bg-[#f3f4f6] px-5  py-3 ">
      <RevealOnScroll>
        <section className="mx-auto max-w-7xl rounded-3xl bg-white/60  shadow-sm backdrop-blur p-5">
          <ServiceSearchBar
            value={query}
            onChange={setQuery}
            total={filteredServices.length}
          />
          <ServiceGrid services={filteredServices} onBook={handleBookService} />
        </section>
      </RevealOnScroll>
    </main>
  )
}
