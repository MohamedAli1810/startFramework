import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'

export default function Layout() {
  return <>
     <Navbar/>
     <Outlet></Outlet>
     <Footer/>
  
  </>
}
