import React from 'react'
import videoBg from '../../assets/test.mp4'
import './Logo.css'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div className="size">
            <h1 className='right'>Welcome</h1>
            <h2>To my website.</h2>
            </div>
            <Link to="/Home" className="button">
            <nav>
  <ul>
    <li>
      Check out
      <span></span><span></span><span></span><span></span>
    </li>
   
  
  </ul>
</nav>
          </Link>
          
        </div>
     
    </div>
    
  )
}

export default Logo