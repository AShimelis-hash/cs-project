import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <div className='bg-slate-700 rounded'>
        <h1 className='tx'>Save and Invest</h1>
        </div>
       
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