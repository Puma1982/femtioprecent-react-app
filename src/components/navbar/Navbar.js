import React, {useState}from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson } from 'react-icons/bs'
import {HiOutlineMenuAlt4 } from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebookSquare, FaInstagram,  FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa'

import './NavbarStyles.css'


function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = ()  => setNav (!nav)                                     /**arrow function */

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>   
      <div className={nav ?  'logo dark': 'logo'}>
      <h2>FEMTIOPRECENT%</h2>
      </div>

      <ul className="nav-menu">
      <li>Home</li>
      <li>Kategorier</li>
      <li>Om oss</li>
      <li>Kundservice</li>
</ul>
      {/*install icons from terminal (npm i react-icons) */}
{/** scherche icon*/}
      <div className="nav-icons">
<BiSearch className='icon' style={{marginRight: '1rem'}}/>
<BsPerson className='icon' />

      </div>
      <div className="hamburger" onClick={handleNav}>          {/*whenever we click our hamburger div it s going to fire off this function and its going to change our nav state to true*/}      
       {!nav ?  (  <HiOutlineMenuAlt4 className='icon' />): (<AiOutlineClose className='icon' style={{color:'#008000'}} />)}

     
       
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>   {/*if nav it true we want to have active the nav menu*/}
        <ul className="mobile-nav">
        <li>Home</li>
        <li>Kategorier</li>
      <li>Om-oss</li>
      <li>Kundservice</li>
    
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>

            </div>
            <div className="social-icons">
              <FaFacebookSquare  className='icon' />
              <FaInstagram  className='icon' />
              <FaTwitterSquare  className='icon' />
              <FaLinkedinIn  className='icon' />
            </div>
          </div>
      </div>

    </div>
  )
}

export default Navbar





