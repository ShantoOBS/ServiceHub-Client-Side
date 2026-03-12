import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import useAxios from './useAxios'

// Fetch the current user's role from /users/:email/role
export default function useRole() {
  const { user } = useAuth() || {}
  const axios = useAxios()

  const [role, setRole] = useState('user')
  const [roleLoading, setRoleLoading] = useState(true)
  console.log(role)
  useEffect(() => {
    // If there is no logged-in user, default to "user"
    if (!user?.email) {
      setRole('user')
      setRoleLoading(false)
      return
    }

    let cancelled = false

    const fetchRole = async () => {
      try {
        setRoleLoading(true)
        const res = await axios.get(`/users/${user.email}/role`)
        if (!cancelled) {
          setRole(res.data?.role || 'user')
        }
      } catch {
        if (!cancelled) {
          setRole('user')
        }
      } finally {
        if (!cancelled) {
          setRoleLoading(false)
        }
      }
    }

    fetchRole()

    return () => {
      cancelled = true
    }
  }, [axios, user?.email])

  return { role, roleLoading }
}