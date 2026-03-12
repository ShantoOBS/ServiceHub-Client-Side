import React from 'react'

const LOGO_GREEN = '#22c55e'
const LOGO_DARK = '#1a1a1a'

export default function ServiceIcon({ type }) {
  switch (type) {
    case 'ac':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <rect
              x="3"
              y="6"
              width="18"
              height="6"
              rx="2"
              fill={LOGO_GREEN}
            />
            <path
              d="M6 16h2m4 0h2m4 0h2"
              stroke={LOGO_DARK}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )
    case 'cleaning':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M7 4h10l-1 5H8L7 4z"
              fill={LOGO_GREEN}
            />
            <path
              d="M6 9h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"
              fill={LOGO_DARK}
            />
          </svg>
        </div>
      )
    case 'plumbing':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 3h4v3H7v12H5V3zM15 3h4v15h-2V6h-2V3z"
              fill={LOGO_GREEN}
            />
            <path
              d="M9 9h6v3a3 3 0 1 1-6 0V9z"
              fill={LOGO_DARK}
            />
          </svg>
        </div>
      )
    case 'electrical':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M13 2 6 13h4v7l7-11h-4V2z"
              fill={LOGO_GREEN}
            />
          </svg>
        </div>
      )
    case 'painting':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <rect
              x="4"
              y="4"
              width="10"
              height="6"
              rx="1"
              fill={LOGO_GREEN}
            />
            <path
              d="M10 10v7a2 2 0 1 0 4 0v-2"
              stroke={LOGO_DARK}
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )
    case 'appliance':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <rect
              x="5"
              y="3"
              width="14"
              height="18"
              rx="2"
              fill={LOGO_GREEN}
            />
            <circle cx="12" cy="11" r="3" fill={LOGO_DARK} />
          </svg>
        </div>
      )
    case 'shield':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3z"
              fill={LOGO_GREEN}
            />
            <path
              d="m9.5 12.5 1.5 1.5 3.5-3.5"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )
    case 'tools':
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M7 3 5 5l4 4-2 2-4-4-2 2 6 6 4-4 6 6 2-2-6-6 2-2 4 4 2-2-5.5-5.5"
              stroke={LOGO_DARK}
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )
    default:
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0ffe0]">
          <span className="text-lg font-semibold text-[#14532d]">S</span>
        </div>
      )
  }
}

