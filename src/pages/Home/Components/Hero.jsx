import React from 'react'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section
      className="relative flex sm:min-h-[80vh] min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-5 sm:py-10 lg:py-20"
      style={{
        backgroundImage: 'url(/assets/Common/Hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/30" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#1A3B4A] sm:text-6xl lg:text-7xl">
          Your home deserves the best care
        </h1>
        <p className="mt-5 text-xl text-[#1A3B4A]/90 sm:text-2xl">
          Keep it running smoothly with ServiceHub.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/demo"
            className="rounded-2xl bg-linear-to-br from-[#00504d] to-[#006762] px-6 py-3 text-base font-medium text-white shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#006762] focus:ring-offset-2"
          >
            Request a demo
          </Link>
          <Link
            to="/services"
            className="rounded-2xl bg-[#e0ffe0] px-6 py-3 text-base font-medium text-[#00504d] shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#006762] focus:ring-offset-2"
          >
            Take a free tour
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200/80 text-sm font-bold text-slate-700">
              G2
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-slate-800">4.7</span>
              <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-slate-700">on G2.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200/80">
              <svg className="h-5 w-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-slate-800">4.5</span>
              <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-slate-700">on Capterra</span>
          </div>
        </div>
      </div>
    </section>
  )
}
