import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/Group 45.png"
import {FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <div className='bg-slate-700 rounded flex'>
        <h1 className='text-white'>Save and Invest</h1>
        <Link to="#">
                <img src={Logo}  alt="Save and Invest" className='w-36 h-24'/>
            </Link>
            <div className='group'>
            <input type='text'
            placeholder='search' 
            className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline none focus:border-1 focus:border-primary"
            />
            <FaSearch/>

            </div>
        </div>
        <nav>
          <ul className='flex bg-amber-600 justify-center space-x-2 gap-y-2'>
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