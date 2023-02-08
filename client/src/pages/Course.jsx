import React,{useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

function Course() {
  const {search} = useLocation()
  const [course,setCourse] = useState()
  const [courseDay,setCourseDay] = useState()
  const [courseWeek,setCourseWeek] = useState()
  const [weekInput,setWeekInput] = useState()
  function getCourseDetails(){
    const courseKey = new URLSearchParams(search).get('id') 
    axios.get('https://docwebsite.adityasurve1.repl.co/user/fetchinterestedcourse',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{
      let arr = []
      setCourse(response.data[courseKey])
      for(var i=1;i<=course.duration;i++){
        arr.push(i)
      }
      setWeekInput(arr)
      console.log(response.data[courseKey])
    })
    .catch(error=>{console.log(error)})
  }

  function getCourseProgress(){
    axios.get('https://docwebsite.adityasurve1.repl.co/user/getcourseprogress',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{console.log(error)})
  }

  useEffect(() => {
    getCourseDetails()
    getCourseProgress()
  }, [])
  return (
    
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      
        <ProfileHeader title={'My programs'}/>
      
      <div className='AppGlass3'>
        {
          course?
          <>
            <div>
              <h1>{course.programname}</h1>
              <h5>Total Duration: {course.duration} weeks ({(course.duration)*7} days)</h5>
              <h5>Current Progress: {course.duration} weeks ({(course.duration)*7} days)</h5>
              <h3>WEEK:</h3>
              <select value={courseWeek} onChange={(event) => {setCourseWeek(event.target.value);}}>
                
              </select>
              <h3>DAY:</h3>
              <select value={courseDay} onChange={(event) => {setCourseDay(event.target.value);}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div>
                {
                  
                }
              </div>
        </div>
          </>
          :
          <>
          </>
        }
        
      
        
      </div>
    </div>
        
</div>
  )
}

export default Course