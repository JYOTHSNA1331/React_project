import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
function NavBar() {
  return (
    <div>
      <ul className="navbar-nav">
          <Link to="/Home">Home</Link>
          <Link to="/Student">Student</Link>
          <Link to="/Contact">Contact</Link>
      </ul>
    </div>
 )
}

export default NavBar