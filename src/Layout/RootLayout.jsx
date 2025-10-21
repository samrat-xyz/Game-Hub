import React from 'react'
import Navbar from '../components/Header/Navbar/Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <>
      <div>
        <header>
          <Navbar/>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default RootLayout
