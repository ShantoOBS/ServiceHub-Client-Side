import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Common/Navbar/Navbar'
import Footer from '../pages/Common/Footer/Footer'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
