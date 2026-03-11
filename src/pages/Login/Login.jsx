import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <main className="min-h-[60vh] px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black">Login</h1>
      <p className="mt-3 text-black">
        <Link to="/" className="text-[#176E84] hover:underline">
          Back to Home
        </Link>
      </p>
    </main>
  )
}
