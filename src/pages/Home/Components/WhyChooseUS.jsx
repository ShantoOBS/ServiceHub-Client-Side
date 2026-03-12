import React from 'react'

const LOGO_GREEN = '#22c55e'

const cards = [
  {
    title: 'Ensuring Masks',
    icon: (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M19 6h-2c0-2.2-1.8-4-4-4S9 3.8 9 6H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm7 16H7V8h2v2h2V8h4v2h2V8h2v12z"
          fill={LOGO_GREEN}
        />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    icon: (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          fill={LOGO_GREEN}
        />
        <circle cx="17" cy="7" r="4" fill={LOGO_GREEN} />
        <text x="17" y="8.5" textAnchor="middle" fontSize="4" fill="white" fontWeight="bold">24</text>
      </svg>
    ),
  },
  {
    title: 'Sanitising Hands & Equipment',
    icon: (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M18 2h-2v2h2V2zM8 4c-1.1 0-2 .9-2 2v2h2V6h10v2h2V6c0-1.1-.9-2-2-2H8zm-2 6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10H6zm4 8h4v-4h-4v4z"
          fill={LOGO_GREEN}
        />
        <text x="16" y="14" fontSize="6" fill={LOGO_GREEN} fontWeight="bold">+</text>
      </svg>
    ),
  },
  {
    title: 'Ensuring Gloves',
    icon: (
      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M18 4v2h-2V4h-2v6l4 4v6h2v-6.5l-3.5-3.5.7-1.4L20 16.1V4h-2zM8 4v2H6v2h2v10h2V8h2V6h-2V4H8z"
          fill={LOGO_GREEN}
        />
      </svg>
    ),
  },
]

export default function WhyChooseUS() {
  return (
    <section
      className="w-full py-5 sm:py-10 "
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="mx-auto max-w-7xl px-4 ">
        {/* Subtitle */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-slate-400" aria-hidden />
          <p className="text-xs font-normal uppercase tracking-wide text-slate-500 sm:text-sm">
            Why choose us
          </p>
        </div>
        {/* Main heading */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
          Because we care about your safety..
        </h2>

        {/* 2x2 card grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-5 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="shrink-0">{card.icon}</div>
              <p className="text-lg font-semibold leading-snug text-[#1A1A1A]">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
