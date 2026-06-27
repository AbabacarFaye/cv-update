import React from 'react'
import { Link } from 'react-router/internal/react-server-client'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><p className="text-2xl font-bold text-gradient">CV Update</p></Link>
        <Link to="/upload" className="primary-button w-fit">Upload CV</Link>
      
    </nav>
  )
}

export default Navbar
