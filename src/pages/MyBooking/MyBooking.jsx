import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner'
import useAxios from '../../Hook/useAxios'
import useAuth from '../../Hook/useAuth'

export default function MyBooking() {
  const axios = useAxios()
  const { user, loading: authLoading } = useAuth() || {}
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handlePayment = async (booking) => {
    try {
      const id = booking._id || booking.id

      const payload = {
        price: booking.price,
        serviceName: booking.serviceName,
        userEmail: user?.email,
        bookingId: id,
      }

      const res = await axios.post('/create-checkout-session', payload)

      if (res.data?.url) {
        window.location.href = res.data.url
      } else {
        toast.error('Could not start payment. Please try again.')
      }
    } catch {
      toast.error('Payment initialization failed. Please try again.')
    }
  }

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to cancel this booking?'
    )
    if (!confirmDelete) return

    try {
      await axios.delete(`/booking/${bookingId}`)
      setBookings((prev) =>
        prev.filter((b) => (b._id || b.id) !== bookingId)
      )
      toast.success('Booking cancelled.')
    } catch {
      toast.error('Could not cancel this booking. Please try again.')
    }
  }

  // Fetch bookings for the logged-in user
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login', { state: location.pathname })
      return
    }

    const fetchBookings = async () => {
      try {
        setLoading(true)
        setError('')

        const res = await axios.get(`/my-books/${user.email}`)
        setBookings(res.data || [])
      } catch (err) {
        setError(
          err?.response?.data?.message || 'Failed to load your bookings.'
        )
      } finally {
        setLoading(false)
      }
    }

    if (!authLoading && user) {
      fetchBookings()
    }
  }, [axios, user, authLoading, navigate, location])

  // Handle Stripe payment success callback via session_id
  useEffect(() => {
    if (authLoading || !user) return

    const params = new URLSearchParams(location.search)
    const sessionId = params.get('session_id')
    if (!sessionId) return

    const confirmPayment = async () => {
      try {
        await axios.patch('/payment-success', null, {
          params: { session_id: sessionId },
        })

        const refreshed = await axios.get(`/my-books/${user.email}`)
        setBookings(refreshed.data || [])
        toast.success('Payment confirmed. Cheek your mail')
      } catch {
        toast.error('Failed to confirm payment. Please contact support if charged.')
      }
    }

    confirmPayment()
  }, [axios, user, authLoading, location.search])

  return (
    <main className="min-h-[60vh] bg-[#f3f4f6] px-4 py-5">
      <section className="mx-auto max-w-6xl rounded-3xl bg-white/90 p-5 shadow-sm backdrop-blur ">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
              My bookings
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              View and manage the services you&apos;ve booked through ServiceHub.
            </p>
          </div>
          {user && (
            <p className="text-xs text-slate-500">
              Signed in as <span className="font-medium">{user.email}</span>
            </p>
          )}
        </div>

        {loading ? (
          <p className="text-sm text-slate-600">Loading your bookings…</p>
        ) : error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : !bookings.length ? (
          <p className="text-sm text-slate-600">
            You don&apos;t have any bookings yet. Visit the Services page to book
            your first service.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Service
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Booked at
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Payment
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {bookings.map((booking) => {
                  const isPaid =
                    booking.payment_status === 'paid';

                    const status = booking.status;

                  return (
                    <tr key={booking._id || booking.id}>
                      <td className="px-4 py-3 align-top">
                        <div className="font-medium text-[#111827]">
                          {booking.serviceName}
                        </div>
                        {booking.description && (
                          <div className="mt-0.5 text-xs text-slate-500 line-clamp-2">
                            {booking.description}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-800">
                        {booking.price || '—'}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-700">
                        {booking.createdAt
                          ? new Date(booking.createdAt).toLocaleString()
                          : '—'}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                            status !== 'pending'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-row gap-2">
                          {isPaid ? (
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                              Paid
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handlePayment(booking)}
                              className="inline-flex items-center rounded-full bg-[#22c55e] px-3 py-1.5 text-[10px]  text-white 
                              shadow-sm transition hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-1"
                            >
                              Pay 
                            </button>
                          )}
                          {!isPaid && (
                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(booking._id || booking.id)
                              }
                              className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 shadow-sm transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

