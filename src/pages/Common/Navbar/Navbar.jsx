import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import useAuth from '../../../Hook/useAuth'
import useRole from '../../../Hook/useRole'

const iconClass = 'h-5 w-5 shrink-0'

const navLinkIcons = {
  Home: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Services: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'My Booking': (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Admin: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/my-booking', label: 'My Booking' },
  { to: '/admin', label: 'Admin' },
]

export default function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logOut } = useAuth() || {}
  const isLoggedIn = !!user
  const { role } = useRole()
 

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinkClass =
    'rounded-full px-4 py-2 text-gray-500 transition-colors hover:text-[#1f8e6b] hover:bg-gray-100'

  return (
    <header className="sticky top-0 z-50 w-full max-w-7xl mx-auto bg-transparent backdrop-blur-sm">
      <nav className="flex h-16 w-full items-center justify-between gap-4 px-4 ">
        {/* Left: Logo only */}
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            aria-label="ServiceHub Home"
          >
            <img
              src="/assets/Common/logo.png"
              alt="ServiceHub"
              className="h-13 w-13 object-contain sm:h-15 sm:w-15"
            />
          </Link>
        </div>

        {/* Center: Home, Services, My Booking, Admin */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-1">
          {navLinks.map(({ to, label }) => {
            if (label === 'Admin' && role !== 'admin') return null
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1 ${navLinkClass} ${
                  isActive(to) ? 'font-bold text-[#1f8e6b] bg-gray-100 px-4 py-2 rounded-full' : ''
                }`}
              >
                {navLinkIcons[label]}
                {label}
              </Link>
            )
          })}
        </div>

        {/* Right: Login + Book Now (or profile + Logout when logged in) */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={logOut}
               className={`hidden sm:inline-block ${navLinkClass} py-2`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`hidden sm:inline-block ${navLinkClass} py-2`}
              >
                Login
              </Link>

            </>
          )}

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#16a34a] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1e7446] focus:ring-offset-2"
          >

            Book A Service
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-14 w-14 items-center justify-center rounded-lg text-black hover:bg-slate-100 md:hidden "
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel - overlays content, no extra space */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 z-50 border-t border-slate-200/50 bg-white/95 shadow-lg backdrop-blur-sm md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-0 px-4 py-3">
            {navLinks.map(({ to, label }) => {
              if (label === 'Admin' && role !== 'admin') return null
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive(to)
                      ? 'bg-[#F5F5F5] font-bold text-black'
                      : 'text-[#4A4A4A] hover:bg-[#F5F5F5] hover:font-bold hover:text-black'
                  }`}
                >
                  {navLinkIcons[label]}
                  {label}
                </Link>
              )
            })}
            {!isLoggedIn && (
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="ml-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-black hover:bg-slate-100"
                >
                  Login
                </Link>
             
              </div>
            )}
            {isLoggedIn && (
              <div className="mt-3 flex items-center gap-3 border-t border-slate-200 pt-3">
              
                <button
                  type="button"
                  onClick={() => {
                    logOut?.()
                    setIsMenuOpen(false)
                  }}
                  className="ml-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-black hover:bg-slate-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
