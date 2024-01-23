import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginWrap'>
        <h4>Login</h4>
        <div className="line"></div>
        <div className="inputsCon">
            <div className="inputs">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email'/>
            </div>
            <div className="inputs">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password'/>
            </div>
            <button>Login</button>
        </div>
        <p>Don't have an account?<span>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login
