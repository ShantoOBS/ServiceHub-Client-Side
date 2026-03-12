import React from 'react'
import { Link } from 'react-router'

const accentColor = '#1f8e6b'

const productLinks = [
  { to: '/services', label: 'Services' },
  { to: '/services', label: 'Book Now' },
  { to: '/demo', label: 'Request Demo' },
  { to: '/my-booking', label: 'My Booking' },
]
const learnLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Documentation' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/login', label: 'Login' },
]
const companyLinks = [
  { to: '/', label: 'Legal' },
  { to: '/', label: 'Privacy' },
  { to: '/', label: 'Careers' },
  { to: '/', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter/X', icon: 'X', bg: '#000000' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in', bg: '#0A66C2' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'f', bg: '#1877F2' },
  { href: 'https://youtube.com', label: 'YouTube', icon: '▶', bg: '#FF0000' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 ">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          {/* Left: Logo, Social, Copyright */}
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              
            >
             
                <img
                  src="/assets/Common/logo.png"
                  alt="ServiceHub"
                  className="h-13 w-13 sm:h-15 sm:w-15 object-contain"
                />
             
            </Link>
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map(({ href, label, icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: bg }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-black">
              © {currentYear} ServiceHub. All rights reserved.
            </p>
          </div>

          {/* Right: Three columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="border-l-2 pl-6" style={{ borderColor: accentColor }}>
              <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Product
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {productLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-black transition-opacity hover:opacity-70"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 pl-6" style={{ borderColor: accentColor }}>
              <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Learn
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {learnLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-black transition-opacity hover:opacity-70"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 pl-6" style={{ borderColor: accentColor }}>
              <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: accentColor }}>
                Company
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {companyLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-black transition-opacity hover:opacity-70"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
