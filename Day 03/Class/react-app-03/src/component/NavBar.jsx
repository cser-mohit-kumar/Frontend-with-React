import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link>   <br />
      <Link to="/service">Service</Link>    <br />
    </div>
  )
}

export default NavBar
