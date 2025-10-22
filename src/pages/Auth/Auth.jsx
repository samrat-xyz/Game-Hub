import React from 'react'
import Navbar from '../../components/Header/Navbar/Navbar'
import { Outlet } from 'react-router'

function Auth() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Auth
