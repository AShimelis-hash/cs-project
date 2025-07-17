import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to="/">
            a
            </NavLink>
            <NavLink to="/">
            b
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar