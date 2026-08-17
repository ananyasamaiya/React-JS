import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav_box'>
        <img src="https://img.magnific.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1253202-137644.jpg?semt=ais_hybrid&w=740&q=80" alt="" />

        {/* npm insall  react-router-dom */}
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    </div>
  )
}

export default Navbar