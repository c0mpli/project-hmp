import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'
import bgImage from '../imgs/Frame1.png'
function Landing() {
  const navigate = useNavigate()
  
  return (
    <>
    
      <div className='landing'>
        <img src={bgImage} className='bgImage'/>
        <Navbar />
        <div className="landing-section1">
          <div></div>
          <div className="content">
            <h1>Restoring <br />your movement with physiotherapy</h1>
            <div className='subContent'>

            <p><b>Develop, Maintain and Restore your body’s movement and function with the world’s best physiotherapist</b></p>
            </div>
            <div className='section1-buttons'>
              <button className='startNowButton' onClick={()=>{navigate('/dashboard')}}><b>Start now</b></button>
              <div className='howItWorks'>
                <div className='playButtonCircle'>
                  <div className="playButtonTriangle"></div>
                </div>
              <p><b>How it works</b></p>
              </div>
            </div>
          </div>
        </div>
        <div className='landing-trendingPrograms'>
          <h1>Trending Programs</h1>
          <p>Try popular programs that suit yourself</p>
          
        </div>
      </div>
    </>
  )
}

export default Landing