import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service, onBook }) {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleBookClick = () => {
    setShowModal(true)
  }

  const handleYes = () => {
    onBook?.(service)
    setShowModal(false)
    navigate('/my-booking')
  }

  const handleNo = () => {
    setShowModal(false)
  }

  return (
    <>
      <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-4">
          <ServiceIcon type={service.icon} />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              {service.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#15803d] sm:text-base">
              {service.price}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          {service.description}
        </p>
        <button
          type="button"
          onClick={handleBookClick}
          className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
        >
          <span>Book now</span>
          <svg
            className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </article>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-top  justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-cost-title"
        >
          <div className="w-full max-w-sm rounded-2xl bg-white h-fit p-6 shadow-xl">
            <h2
              id="confirm-cost-title"
              className="text-lg font-semibold text-[#111827]"
            >
              Confirm booking
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Are you agree with this cost?{' '}
              <span className="font-medium text-[#15803d]">{service.price}</span>{' '}
              for {service.name}.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={handleYes}
                className="flex-1 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={handleNo}
                className="flex-1 rounded-full border border-slate-200 bg-red-500 px-4 py-2.5 text-sm font-medium text-slate-700 transition
                 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

