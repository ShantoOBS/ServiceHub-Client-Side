import React from 'react'

export default function ServiceSearchBar({ value, onChange, total }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">
          Recommended Services
        </h1>
        <p className="mt-1 text-sm text-slate-600 sm:text-base">
          Find and book trusted home service professionals in just a few clicks.
        </p>
      </div>
      <div className="w-full max-w-md">
        <label className="sr-only" htmlFor="service-search">
          Search services
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M11 5a6 6 0 1 1-4.243 1.757A5.982 5.982 0 0 1 11 5zm0 0v0m7 13-3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            id="service-search"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search by service or keyword..."
            className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-slate-400 shadow-sm focus:border-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
          />
        </div>
        <p className="mt-1 text-xs text-slate-500">
          Showing <span className="font-medium text-black">{total}</span> services
        </p>
      </div>
    </div>
  )
}

