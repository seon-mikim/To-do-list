import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomTab from './BottomTab'

function Layout() {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    <BottomTab/>
    </>
  )
}

export default Layout