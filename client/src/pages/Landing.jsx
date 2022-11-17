import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <>
    <div className="landing-img-bg">
      <div className='landing'>
        <Navbar />
        <div className="landing-section1">
          <div className="content">
            <h1>Restoring <br />your movement <br />with physiotherapy</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing