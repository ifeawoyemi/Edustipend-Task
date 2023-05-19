import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className='navbarLeft'>
                <span className='contactButton'>Contact us</span>
                <button type='' className='signupButton'>Signup</button>
            </div>
        </div>
    </div>
  )
}
