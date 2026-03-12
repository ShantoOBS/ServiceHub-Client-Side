import React from 'react'
import { Link, useLocation } from 'react-router'

export default function NotFound() {
  const location = useLocation()

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f3f4f6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-sm sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#16a34a]/5 blur-3xl" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#16a34a]">
          404 error
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          We couldn&apos;t find any page at{' '}
          <span className="font-mono text-[#111827]">
            {location.pathname}
          </span>
          . It might have been moved, renamed, or never existed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
          >
            <span>Back to home</span>
            <span aria-hidden>↩</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#166534] shadow-sm transition hover:border-[#16a34a]/50 hover:bg-[#f0fdf4]"
          >
            Browse services
          </Link>
        </div>

        <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="font-semibold text-slate-700">Need help?</p>
            <p className="mt-1">
              Contact support if you keep seeing this page while using
              ServiceHub.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="font-semibold text-slate-700">Quick tips</p>
            <p className="mt-1">
              Check the URL for typos or go back to the Services page to find
              what you were looking for.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
