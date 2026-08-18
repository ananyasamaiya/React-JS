import React, { useContext } from 'react'
import './Signin.css'
import context from '../../app'
function Signin() {
    let {signin} = useContext(context);
  return (
    <div className='signin_box'>
        <h2>SignIn Form</h2>
        <div className='field_box'>
            <div className='label'>Email</div>
            <input type="text" name='email' />
        </div>
        <div className='field_box'>
            <div className='label'>Password</div>
            <input type="password" name='password' />
        </div>
        <div >
            <button onClick={signin}>Sign In</button>
        </div>
    </div>
  )
}

export default Signin