import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import useAxios from '../../Hook/useAxios'
import useRole from '../../Hook/useRole'
import useAuth from '../../Hook/useAuth'
export default function Admin() {
  const axios = useAxios()
  const { role, roleLoading } = useRole()
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)
  const [bookings, setBookings] = useState([])
  const [bookingsLoading, setBookingsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('users') // 'users' | 'confirm'
  const { user } = useAuth() || {}

  useEffect(() => {
    if (roleLoading || role !== 'admin' || !user?.email) return

    const fetchUsers = async () => {
      try {
        setUsersLoading(true)
        const res = await axios.get(`/users`, {
          params: { email: user.email },
        })
        setUsers(res.data || [])
      } catch {
        toast.error('Failed to load users.')
      } finally {
        setUsersLoading(false)
      }
    }

    const fetchBookings = async () => {
      try {
        setBookingsLoading(true)
        // For admins, backend should return all bookings for this admin email
        const res = await axios.get(`/my-books`)
        setBookings(res.data || [])
      } catch {
        toast.error('Failed to load bookings.')
      } finally {
        setBookingsLoading(false)
      }
    }

    fetchUsers()
    fetchBookings()
  }, [axios, role, roleLoading, user?.email])

  const handleMakeAdmin = async (user) => {
    try {
      await axios.patch(`/users/${user.email}/admin`, { role: 'admin' })
      setUsers((prev) =>
        prev.map((u) =>
          u.email === user.email ? { ...u, role: 'admin' } : u
        )
      )
      toast.success(`${user.email} is now an admin.`)
    } catch {
      toast.error('Could not update role. Please try again.')
    }
  }

  const handleMakeUser = async (user) => {
    try {
      await axios.patch(`/users/${user.email}/user`, { role: 'user' })
      setUsers((prev) =>
        prev.map((u) =>
          u.email === user.email ? { ...u, role: 'user' } : u
        )
      )
      toast.success(`${user.email} is now a user.`)
    } catch {
      toast.error('Could not update role. Please try again.')
    }
  }

  const handleDeleteUser = async (user) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.email}?`
    )
    if (!confirmDelete) return

    try {
      await axios.delete(`/users/${user.email}`)
      setUsers((prev) => prev.filter((u) => u.email !== user.email))
      toast.success('User deleted.')
    } catch {
      toast.error('Could not delete user. Please try again.')
    }
  }

  const handleConfirmBooking = async (booking) => {
    const id = booking._id || booking.id
    if (!id) return

    try {
      await axios.patch(`/booking/${id}`, { status: 'confirmed' })
      setBookings((prev) =>
        prev.map((b) =>
          (b._id || b.id) === id ? { ...b, status: 'confirmed' } : b
        )
      )
      toast.success('Booking marked as confirmed.')
    } catch {
      toast.error('Could not update booking status. Please try again.')
    }
  }

  if (roleLoading) {
    return (
      <main className="min-h-[70vh] bg-[#f3f4f6] px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600">Checking admin access…</p>
      </main>
    )
  }

  if (role !== 'admin') {
    return (
      <main className="min-h-[70vh] bg-[#f3f4f6] px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-700">
          You do not have permission to view this page.
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-[70vh] bg-[#f3f4f6] px-4 py-5">
      <section className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16a34a]">
            Admin dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            Manage ServiceHub
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Use the tabs below to manage users and handle admin actions.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-4 flex overflow-x-auto rounded-full border border-slate-200 bg-white p-1 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => setActiveTab('users')}
            className={`flex-1 rounded-full px-4 py-2 text-center ${
              activeTab === 'users'
                ? 'bg-[#16a34a] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Manage users
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('confirm')}
            className={`flex-1 rounded-full px-4 py-2 text-center ${
              activeTab === 'confirm'
                ? 'bg-[#16a34a] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Confirm request
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'users' ? (
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            {/* Users table */}
            <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-[#111827] sm:text-lg">
                  All users
                </h2>
              </div>
              {usersLoading ? (
                <p className="text-sm text-slate-600">Loading users…</p>
              ) : !users.length ? (
                <p className="text-sm text-slate-600">
                  No users found. Users will appear here after registration.
                </p>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Email
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Role
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {users.map((user) => (
                        <tr key={user.email}>
                          <td className="px-4 py-2 align-top text-sm text-slate-800">
                            {user.email}
                          </td>
                          <td className="px-4 py-2 align-top">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                user.role === 'admin'
                                  ? 'bg-emerald-50 text-emerald-700'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {user.role || 'user'}
                            </span>
                          </td>
                          <td className="px-4 py-2 align-top">
                            <div className="flex flex-row gap-2">
                                <button
                                  type="button"
                                  disabled={user.role === 'admin'}
                                  onClick={() => handleMakeAdmin(user)}
                                  className="inline-flex items-center rounded-full bg-[#16a34a] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15803d] disabled:cursor-not-allowed disabled:bg-slate-300"
                                >
                                  Make admin
                                </button>
                                <button
                                  type="button"
                                  disabled={user.role === 'user'}
                                  onClick={() => handleMakeUser(user)}
                                  className="inline-flex items-center rounded-full bg-[#16a34a] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15803d] disabled:cursor-not-allowed disabled:bg-slate-300"
                                >
                                  Make user
                                </button>

                              <button
                                type="button"
                                onClick={() => handleDeleteUser(user)}
                                className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 shadow-sm transition hover:bg-red-50"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          </div>
        ) : (
          <div className="grid gap-6">
            {/* Confirm request table – only paid bookings */}
            <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-[#111827] sm:text-lg">
                  Paid bookings awaiting confirmation
                </h2>
              </div>
              {bookingsLoading ? (
                <p className="text-sm text-slate-600">Loading bookings…</p>
              ) : (
                (() => {
                  const pendingPaid = bookings.filter(
                    (b) =>
                      b.payment_status === 'paid' 
                  )

                  if (!pendingPaid.length) {
                    return (
                      <p className="text-sm text-slate-600">
                        There are no paid bookings waiting for confirmation.
                      </p>
                    )
                  }

                  return (
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="min-w-full divide-y divide-slate-200 text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Service
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              User
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Price
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Booked at
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Status
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {pendingPaid.map((booking) => (
                            <tr key={booking._id || booking.id}>
                              <td className="px-4 py-2 align-top text-sm text-slate-800">
                                {booking.serviceName}
                              </td>
                              <td className="px-4 py-2 align-top text-sm text-slate-700">
                                {booking.userEmail}
                              </td>
                              <td className="px-4 py-2 align-top text-sm text-slate-800">
                                {booking.price}
                              </td>
                              <td className="px-4 py-2 align-top text-sm text-slate-700">
                                {booking.createdAt
                                  ? new Date(
                                      booking.createdAt
                                    ).toLocaleString()
                                  : '—'}
                              </td>
                              <td className="px-4 py-2 align-top">
                                <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                                  {booking.status || 'pending'}
                                </span>
                              </td>
                              <td className="px-4 py-2 align-top">
                                {booking.status === 'completed' ? null : (
                                  <button
                                    type="button"
                                    onClick={() => handleConfirmBooking(booking)}
                                    className="inline-flex items-center rounded-full bg-[#16a34a] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
                                  >
                                    Confirm booking
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                })()
              )}
            </article>
          </div>
        )}
      </section>
    </main>
  )
}
