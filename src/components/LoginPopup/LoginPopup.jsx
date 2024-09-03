import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
export default function LoginPopup({setShowLogin}) {
  const [currState, setCurrState] = useState('Login')
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} alt="" onClick={()=> setShowLogin(false)} />
          </div>
          <div className="login-popup-input">
            {currState == 'Login'?<></>:<input type="text"  placeholder='Your Name'  required/> }
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
          </div>
          <button>{currState == 'Sing  Up'?"Crete account" :"Login"}</button>
          <div className="login-popup-contaion">
            <input type="checkbox"  required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState=='Login'
          ?<p>Create a new account?<span onClick={ ()=> setCurrState('Sing Up')}>Click hear</span></p>
          :<p>Aleady have an account?<span onClick={ ()=> setCurrState('Login')}>Login hear</span></p>
          }
        </form>
    </div>
  )
}
