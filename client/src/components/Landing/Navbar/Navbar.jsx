import React, {useState} from 'react'
import { useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import HMPLogo from '../../../imgs/HMP-logo.png'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const location = useLocation()
    useEffect(() => {
      if(window.location.pathname === "/"){
        document.getElementById("home").style.color = "var(--HMPBlue)"
      }
      if(window.location.pathname === "/myprograms"){
        document.getElementById("myprograms").style.color = "var(---HMPBlue)"
      }
    }, [location])
    
  return (
    <nav className='landing-navbar'>
        <div className="navbar-logo">
            <img src={HMPLogo} onClick={()=>navigate('/')}/>
        </div>
        <div className={isNavExpanded?"navbar-menu expanded":"navbar-menu"}>
        <ul>
          <li>
            <Link to="/" id="home">Home</Link>
          </li>
          <li>
            <Link to="/myprograms" id="myprograms">Programs</Link>
          </li>
          <li>
            <Link to="/" id="aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/" id="contactus">Contact Us</Link>
          </li>
          <li>

            <button onClick={()=>navigate('/login')}>Sign in</button>
          </li>
        </ul>
        </div>
        <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
        
    </nav>
  )
}

export default Navbar