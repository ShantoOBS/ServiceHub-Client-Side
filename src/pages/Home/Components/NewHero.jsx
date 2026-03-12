import React from 'react'

const filters = [
  { label: 'AC repair', color: 'bg-[#dcfce7] text-[#166534]' },
  { label: 'Home cleaning', color: 'bg-[#e0f2fe] text-[#075985]' },
  { label: 'Plumbing', color: 'bg-[#fee2e2] text-[#b91c1c]' },
  { label: 'Electrical & more', color: 'bg-[#fef9c3] text-[#92400e]' },
]

const imageCols = [
  [
    { src: '/assets/Home/hero-image-1.png', alt: 'Networking at an event' },
    { src: '/assets/Home/hero-image-2.png', alt: 'Panel discussion on stage' },
    { src: '/assets/Home/hero-image-3.png', alt: 'Panel discussion on stage' },
    { src: '/assets/Home/hero-image-4.png', alt: 'Panel discussion on stage' },
    
  ],
  [
    { src: '/assets/Home/hero-image-5.png', alt: 'Networking at an event' },
    { src: '/assets/Home/hero-image-6.png', alt: 'Panel discussion on stage' },
    { src: '/assets/Home/hero-image-7.png', alt: 'Panel discussion on stage' },
    { src: '/assets/Home/hero-image-8.png', alt: 'Panel discussion on stage' },
  ],

]

export default function NewHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:flex-row py-5 sm:pb-10 ">
        {/* Left: text + filters */}
        <div className="max-w-xl flex flex-col justify-center">
          {/* Breadcrumb tags */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 w-fit">
            <span className="rounded-full bg-white px-2 py-0.5 text-[0.7rem] uppercase tracking-wide text-slate-500">
              ServiceHub
            </span>
            <span className="rounded-full bg-[#d1fae5] px-2 py-0.5 text-[0.7rem] uppercase tracking-wide text-[#047857]">
              Home services
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Book Trusted Home Services
          </h1>

          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            From AC repair and plumbing to deep cleaning and electrical work, ServiceHub
            connects you with verified professionals in just a few clicks. Choose a time,
            pay securely online, and get instant booking confirmation by email.
          </p>

          {/* Filter chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                className={`newhero-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition hover:shadow-md ${filter.color}`}
              >
                <span>{filter.label}</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[0.6rem] text-slate-700">
                  ↘
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: image grid with opposite scroll */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-white/40 via-transparent to-white/60" />
          <div className="relative grid h-[420px] overflow-hidden rounded-[2.25rem] bg-transparent sm:h-[460px]">
            <div className="grid grid-cols-2 gap-4 px-1 sm:px-2">
              {imageCols.map((col, colIdx) => (
                <div
                  key={colIdx}
                  className={`flex flex-col gap-4 ${
                    colIdx % 2 === 0 ? 'newhero-col-up' : 'newhero-col-down'
                  }`}
                >
                  {col.map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-3xl bg-slate-200 shadow-sm"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
