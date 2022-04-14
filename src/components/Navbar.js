import React from 'react'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {

    return (
      <>
        <nav>
        <a href='/'>
        <div className="logo">        
            <img src={require('../assets/unilearnlong.png')} className="logo-image"/>
        </div>
        </a>

        <input type="checkbox" id="click" className="nav-check"/>
        <label htmlFor="click" className="menu-btn">
        <FaBars className="menu-btn"/>
        </label>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/sign-in" className='signin-btn'>Sign In</a></li>
        </ul>
        </nav>
    {/* <div classNameName="content">
      <div>Responsive Navigation Menu Bar Design</div>
      <div>using only HTML & CSS</div>
    </div> */}
    </> 

    )
}


export default Navbar





