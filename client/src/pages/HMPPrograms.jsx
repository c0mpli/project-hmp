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
  
  function handleClick(key){
    axios.post('http://localhost:5000/user/addtointerestedcourse',{
      userId:localStorage.getItem('token'),
      courseId: programs[key]._id
    },{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      console.log(response.data.message)
    })
  }

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
          
            <ProfileHeader title={'HMP Programs'}/>
          
          <div className='AppGlass3'>
            <div>

          {programs && programs.map((program,key)=>{
            return(
              <div id={key} onClick={()=>handleClick(key)}>
            <HMPProgram 
              image={program.image}
              title={program.programname}
              description={program.description}
              duration={program.duration}
              />
            </div>
        )})}
        </div>
            
          </div>
        </div>
            
    </div>
  )
}

export default HMPPrograms