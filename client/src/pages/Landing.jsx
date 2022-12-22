import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'
import PopularPrograms from '../components/Landing/PopularPrograms/PopularPrograms'
import useWindowDimensions from '../components/useWindowDimensions'
import { dataDigitalBestSeller, testimonials} from '../Data/Data'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bgImage from '../imgs/Frame1.png'
import bgImage3 from '../imgs/bgImage.png'
import bgImage2 from '../imgs/bgImage2.png'
import approveBadge from '../imgs/ApproveBadge.svg'
import therapyBadge from '../imgs/physical-therapy.svg'
import trophy from '../imgs/Trophy.svg'
import fire from '../imgs/fire.svg'
import TestimonialIcon from '../imgs/TestimonialIcon.svg'
import TestimonialCard from '../components/Landing/Testimonials/TestimonialCard'
import ServiceCard from '../components/ServiceCard'
import HMPLogo from '../imgs/HMP-logo.png'

function Landing() {
  const navigate = useNavigate()
  const {width, height} = useWindowDimensions()
  let programCount = 3
  if(width<500) programCount = 1
  else if(width>=500 && width<800) programCount=2
  console.log(width, height)
  return (
    <>
      <div className='landing'>
        <img src={bgImage3} className='bgImage firstBgImage'/>
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
        <div className="landing-aboutus" id="aboutus">

        </div>
          <img src={bgImage2} className='bgImage secondBgImage' />
        <div className="landing-services">
          <div className='servicesContent'>
            <h1>Services Available <img src={approveBadge}/></h1>
            <div className='servicesWrapper'>
              <ServiceCard title="Physiotherapy" message="Relax, unwind and let our therapists work the tension away." side='left' image={therapyBadge}/>
              <ServiceCard title="Integrated Therapy" message="Relax, unwind and let our therapists work the tension away." side='right' image={therapyBadge}/>
              <ServiceCard title="Strength & Conditioning" message="Relax, unwind and let our therapists work the tension away." side='left' image={therapyBadge}/>
              <ServiceCard title="Deep Tissue Massage" message="Relax, unwind and let our therapists work the tension away." side='right' image={therapyBadge}/>
            </div>
            <button>Book an appointment</button>
          </div>
        </div>
        <div className="landing-pricing"></div>
        <div className="landing-testimonials">
          <div className="testimonialsHeader">

        <img src={TestimonialIcon}/>
          <h1>What They Say About Us</h1>
          <p>See their testimonials</p>
          </div>
          <TestimonialCard />
        </div>
      </div>
        <div className="landing-footer">
          
        </div>
    </>
  )
}

export default Landing