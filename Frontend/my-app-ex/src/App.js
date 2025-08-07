import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'



function App() {
 
  return (
    <div className='bg-pink-600 min-sm:'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App