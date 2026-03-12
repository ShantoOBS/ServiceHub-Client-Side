import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceGrid({ services }) {
  if (!services.length) {
    return (
      <p className="mt-8 text-sm text-slate-600">
        No services match your search. Try a different keyword like{' '}
        <span className="font-medium text-black">\"cleaning\"</span> or{' '}
        <span className="font-medium text-black">\"repair\"</span>.
      </p>
    )
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

