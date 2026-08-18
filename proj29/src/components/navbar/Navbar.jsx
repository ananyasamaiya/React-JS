import React, { useContext } from 'react'
import './Navbar.css'
import context from '../../app'
function Navbar() {
  let {signout} = useContext(context);
  return (
    <div className='nav_box'>
        <img src="https://img.magnific.com/premium-vechrefr/creative-elegant-abstract-minimalistic-logo-design-vechrefr-any-brand-company_1253202-137644.jpg?semt=ais_hybrid&w=740&q=80" alt="" />

      
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div style={{display: 'inline-block',textAlign: 'right', width: '500px',}}>
        <button onClick={signout}>SignOut</button>

        </div>
    </div>
  )
}

export default Navbar