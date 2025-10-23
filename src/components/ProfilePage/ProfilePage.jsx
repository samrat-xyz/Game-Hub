import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Header/Navbar/Navbar'

function ProfilePage() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default ProfilePage
