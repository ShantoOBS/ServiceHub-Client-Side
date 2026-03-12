import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner'
import useAuth from '../../../Hook/useAuth'
import useAxios from '../../../Hook/useAxios'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { registerUser } = useAuth() || {}
  const axios = useAxios()

  const togglePassword = () => setShowPassword((prev) => !prev)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!registerUser) return

    try {
      // Create auth account in Firebase
      await registerUser(email, password)

      // Create / upsert user in backend usersCollection
      await axios.post('/users', { email })

      toast.success('Account created successfully.')
      navigate(location.state || '/')
    } catch (err) {
      const message =
        err?.response?.data?.message || 'Registration failed. Please try again.'
      toast.error(message)
    }
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f3f4f6] px-4 py-5">
      <div className="w-full max-w-md rounded-3xl bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16a34a]">
            Join ServiceHub
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Register in a few steps to start booking trusted home services.
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-800"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-black shadow-sm outline-none transition focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]"
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 hover:text-slate-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Use at least 8 characters, including a number and a symbol.
            </p>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#16a34a] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link
            state={location.state}
            to="/login"
            className="font-semibold text-[#16a34a] hover:text-[#15803d]"
          >
            Log in
          </Link>
        </p>

        <p className="mt-2 text-center text-xs text-slate-400">
          <Link to="/" className="hover:text-slate-600">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
