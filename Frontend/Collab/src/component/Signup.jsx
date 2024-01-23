import React from 'react'
import "./Signup.css"
const Signup = () => {
  return (
    <div className='mainContainer'>
      <div className='Container'>
      <div className='title'>
        <h2>Signup Page</h2>
      </div>
      <form className='input'>
        <input type="text" placeholder='Full  name' />
        <input type="text"  placeholder='Email'/>
        <input type="text"  placeholder='phone Number'/>
        <input type="text"  placeholder='password'/>
        <input type="text" placeholder='Confirm PAssword' />
        <button>Signup</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
