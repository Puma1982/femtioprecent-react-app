import React, { useState } from 'react'


import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './NavbarStyles.css'


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)                                     /**arrow function */

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>FEMTIOPRECENT%</h2>
            </div>

            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='kategories' smooth={true} duration={500}><li>Kategories</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Om-oss</li></Link>
                <Link to='footer' smooth={true} duration={500}><li>Kundservice</li></Link>
                


            </ul>
            {/*install icons from terminal (npm i react-icons) */}
            {/** scherche icon*/}
            <div className="nav-icons">



            </div>
            <div className="hamburger" onClick={handleNav}>          {/*whenever we click our hamburger div it s going to fire off this function and its going to change our nav state to true*/}
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose className='icon' style={{ color: '#008000' }} />)}



            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>   {/*if nav it true we want to have active the nav menu*/}
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='kategories' smooth={true} duration={500}><li>Kategories</li></Link>
                    <Link to='search' smooth={true} duration={500}><li>Om-oss</li></Link>
                    <Link to='footer' smooth={true} duration={500}><li>Kundservice</li></Link>

                </ul>
             
                    <div className="social-icons">
                        <FaFacebookSquare className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitterSquare className='icon' />
                        <FaLinkedinIn className='icon' />
                    </div>
                </div>
            </div>

    
    )
}

export default Navbar





