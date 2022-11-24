import React from 'react'
import './FooterStyles.css'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="top" >
                    <h3>INFO:</h3>
                    <div className="social"></div>
                    <FaFacebookSquare className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitterSquare className='icon' />
                    <FaLinkedinIn className='icon' />
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>News-Offers</li>
                            <li>Advertising</li>

                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact:</li>
                            <li>+(46)9OO-631-016</li>
                            <li>Email:</li>
                            <li>google.info@com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer