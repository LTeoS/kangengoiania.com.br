/* eslint-disable import/no-absolute-path */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, Map, Certifications, Whatsapp } from './components'

const App = () => {
  return (
    <div className="h-full w-full lg:pt-[48px]">
      <Navbar />
      <Outlet />
      <Whatsapp />
      <Certifications />
      <Map />
      <Footer />
    </div>
  )
}

export default App
