import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil commodi quo velit. Libero officiis sit, dolores nesciunt earum pariatur recusandae doloremque aliquid excepturi distinctio, enim dolorem incidunt modi eaque?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="not" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPNANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-rigth">
                <h2>DET IN TAUCH</h2>
                <ul>
                    <li>628196-1227</li>
                    <li>Ahmed@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyrigt 2024 Ahmed@gmail.com about of the us</p>
    </div>
  )
}
