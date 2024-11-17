import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/saving">Saving</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/credit">Credit</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/investment">Investment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </div>

  )
}

export default Navbar