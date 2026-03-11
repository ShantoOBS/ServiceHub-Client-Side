import React, { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router/dom'
import { router } from '../../routes/routes.jsx'
import Loader from './Loader'

export default function AppWithLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader visible={isLoading} />
      <RouterProvider router={router} />
    </>
  )
}
