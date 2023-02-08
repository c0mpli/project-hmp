import React,{useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Landing/Navbar/Navbar'
import './Landing.css'
import PopularPrograms from '../components/Landing/PopularPrograms/PopularPrograms'
import useWindowDimensions from '../components/useWindowDimensions'
import { dataDigitalBestSeller} from '../Data/Data'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bgImage3 from '../imgs/bgImage.png'
import bgImage2 from '../imgs/bgImage2.png'
import approveBadge from '../imgs/ApproveBadge.svg'
import therapyBadge from '../imgs/physical-therapy.svg'
import trophy from '../imgs/Trophy.svg'
import fire from '../imgs/fire.svg'
import promo from '../imgs/Promo.svg'
import TestimonialIcon from '../imgs/TestimonialIcon.svg'
import TestimonialCard from '../components/Landing/Testimonials/TestimonialCard'
import ServiceCard from '../components/ServiceCard'
import PricingCard from '../components/PricingCard'
import emailImg from '../imgs/email.png'
import phoneImg from '../imgs/phone-call.png'

function Landing() {
  const navigate = useNavigate()


  const aboutusRef = useRef(null)
  const contactusRef = useRef(null)
  function aboutusScroll(){
    aboutusRef.current.scrollIntoView()
  }
  function contactusScroll(){
    contactusRef.current.scrollIntoView()
  }

  

  const {width} = useWindowDimensions()
  let programCount = 3
  if(width<500) programCount = 1
  else if(width>=500 && width<800) programCount=2
  //console.log(width, height)
  return (
    <>
      <div className='landing'>
        <img src={bgImage3} className='bgImage firstBgImage' alt="bgImage"/>
        <Navbar aboutusScroll={aboutusScroll} contactusScroll={contactusScroll}/>
        <div className="landing-section1">
          <div></div>
          <div className="content">
            <h1>Restoring <img src={fire} alt="Fire Icon"/><br />your movement with physiotherapy</h1>
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
          <img src={trophy} alt="Trophy Icon"/>
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
                <button onClick={()=>{navigate('/hmpprograms')}}>View All</button>
            </div>
          </div>
        </div>
        <div className="landing-aboutus" ref={aboutusRef}>
            <h1>About us</h1>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
          <img src={bgImage2} className='bgImage secondBgImage' alt='bgImage'/>
        <div className="landing-services">
          <div className='servicesContent'>
            <h1>Services Available <img src={approveBadge} alt="Approved Icon"/></h1>
            <div className='servicesWrapper'>
              <ServiceCard title="Physiotherapy" message="Relax, unwind and let our therapists work the tension away." side='left' image={therapyBadge}/>
              <ServiceCard title="Integrated Therapy" message="Relax, unwind and let our therapists work the tension away." side='right' image={therapyBadge}/>
              <ServiceCard title="Strength & Conditioning" message="Relax, unwind and let our therapists work the tension away." side='left' image={therapyBadge}/>
              <ServiceCard title="Deep Tissue Massage" message="Relax, unwind and let our therapists work the tension away." side='right' image={therapyBadge}/>
            </div>
            <button onClick={contactusScroll}>Book an appointment</button>
          </div>
        </div>
        <div className="landing-pricing">
        <img src={promo}/>
          <h1>Our Plans</h1>
          <p>Pick a plan that suits you the best</p>
          <div className='landingPricingWrapper'>
            <PricingCard 
            title="Monthly Plan"
            subtitle="Get a taste of the exercise and rehab programs for 1 month."
            price="490"
            />
            <PricingCard 
            title="Yearly Plan"
            subtitle="Full access to all HMP exercise and rehab programs for 12 months."
            price="3900"
            />
          </div>
        </div>

        <div className="landing-testimonials">
          <div className="testimonialsHeader">

        <img src={TestimonialIcon}/>
          <h1>What They Say About Us</h1>
          <p>See their testimonials</p>
          </div>
          <TestimonialCard />
        </div>
      </div>
        <div className="landing-footer" ref={contactusRef}>
          <div className='footer-content'>

          <h1>Contact Us</h1>
          <p>
            Heath Matthews Physio brings you better health and fitness through technology and expertise.
            Everyone from Olympians to weekend warriors can benefit from Heath Matthews Physio to heal faster, perform better and feel their best.
          </p>
          <div className='footer-icons'><img src={emailImg} style={{width:"1rem",height:"1rem"}}/><p>support@heathmatthewsphysio.com</p></div>
          
          <div className='footer-icons'><img src={phoneImg} style={{width:"1rem",height:"1rem"}}/><p>+91 8928444854</p></div>
          </div>
        <form>      
          <input name="name" type="text" className="feedback-input" placeholder="Name" />   
          <input name="email" type="text" className="feedback-input" placeholder="Email" />
          <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
        </div>
    </>
  )
}

export default Landing
