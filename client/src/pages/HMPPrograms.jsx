import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import './HMPPrograms.css'
import { useTheme } from "../context/ThemeContext";
import ProfileHeader from '../components/ProfileHeader';
import HMPProgram from '../components/HMPProgram';
import { dataDigitalBestSeller } from '../Data/Data';
import axios from 'axios'

function HMPPrograms() {
  const {theme,toggleTheme} = useTheme();
  const [programs,setPrograms] = useState();
  
  useEffect(()=>{
    axios.get('http://localhost:5000/user/fetchallcourses',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      //console.log(response.data)
      setPrograms(response.data)
    })
  })
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'HMP Programs'}/>
          </div>
          <div>
          {programs && programs.map((program)=>{
          return(
            <>
            <HMPProgram 
              image={program.image}
              title={program.programname}
              description={program.description}
              duration={program.duration}
            />
            </>
        )})}
            
          </div>
        </div>
            
    </div>
  )
}

export default HMPPrograms