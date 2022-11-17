import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'
function Landing() {
  const navigate = useNavigate()
  return (
    <div className='landing'>
      <Navbar />
      <div className="landing-section1">
        <div className="background">
          <svg width="100%" height="120vmax" viewBox="0 0 1440 1771" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <circle cx="528" cy="566" r="1160" fill="white" stroke="#F3F3F4" stroke-width="90"/>
              <circle cx="440" cy="478" r="1072" fill="white" stroke="#F3F3F4" stroke-width="90"/>
              <circle cx="426.5" cy="496.5" r="882.5" fill="white" stroke="#F3F3F4" stroke-width="90"/>
              <circle cx="445" cy="483" r="683" fill="white" stroke="#F3F3F4" stroke-width="90"/>
              <circle cx="431.5" cy="469.5" r="509.5" fill="white" stroke="#F3F3F4" stroke-width="90"/>
              <circle cx="425" cy="476" r="323" fill="white" stroke="#F3F3F4" stroke-width="90"/>
            </g>
            <circle cx="422.5" cy="469.5" r="195.5" fill="#FDCE02" stroke="white" stroke-width="20"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Landing