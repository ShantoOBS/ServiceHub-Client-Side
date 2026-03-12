import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import useAuth from '../../../Hook/useAuth'
import RevealOnScroll from '../../../components/RevealOnScroll'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signInUser } = useAuth() || {}

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!signInUser) return

    signInUser(email, password)
      .then(() => {
        navigate(location.state || '/')
      })
      .catch(() => {
        // handle error later (e.g. toast)
      })
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f3f4f6] px-4 py-5">
      <RevealOnScroll className="w-full max-w-md">
        <div className="w-full rounded-3xl bg-white/90 p-6 shadow-lg sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16a34a]">
            Welcome back
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            Sign in to ServiceHub
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Access your bookings, track service status, and manage your profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-800"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-800"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs font-medium text-[#16a34a] hover:text-[#15803d]"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-xs text-slate-600">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-[#16a34a] focus:ring-[#16a34a]"
              />
              <span>Keep me signed in</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#16a34a] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          New to ServiceHub?{' '}
          <Link
            to="/register"
            className="font-semibold text-[#16a34a] hover:text-[#15803d]"
          >
            Create an account
          </Link>
        </p>

        <p className="mt-2 text-center text-xs text-slate-400">
          <Link to="/" className="hover:text-slate-600">
            ← Back to home
          </Link>
        </p>
        </div>
      </RevealOnScroll>
    </main>
  )
}
