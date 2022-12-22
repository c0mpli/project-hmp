import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'
import bgImage from '../imgs/Frame1.png'
import PopularPrograms from '../components/Landing/PopularPrograms/PopularPrograms'
import useWindowDimensions from '../components/useWindowDimensions'
import { dataDigitalBestSeller } from '../Data/Data'
import trophy from '../imgs/Trophy.svg'
import fire from '../imgs/fire.svg'


function Landing() {
  const navigate = useNavigate()
  const {width, height} = useWindowDimensions()
  var programCount
  if(width<500) programCount = 1
  else if(width>=500 && width<800) programCount=2
  else programCount = 3
  console.log(width, height)
  return (
    <>
      <div className='landing'>
        <img src={bgImage} className='bgImage'/>
        <Navbar />
        <div className="landing-section1">
          <div></div>
          <div className="content">
            <h1>Restoring <img src={fire}/><br />your movement with physiotherapy</h1>
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
          <img src={trophy}/>
          <h1>Trending Programs</h1>
          <p>Try popular programs that suit yourself</p>
          <div className='landingProgramWrapper'>
            <div className='landing-programs'>

            {
              dataDigitalBestSeller.map((program,index)=>{
                if(index<programCount){
                  return(<PopularPrograms title={program.title} image={program.linkImg} />)
                }
              }) 
            }
            </div>
            <div>
                <button>View All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing