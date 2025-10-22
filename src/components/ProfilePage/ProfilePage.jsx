import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import { Outlet } from 'react-router'

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
