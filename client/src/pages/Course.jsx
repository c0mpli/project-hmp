import React,{useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import CourseLinks from '../components/CourseLinks'

function Course() {
  const {search} = useLocation()
  const [course,setCourse] = useState()
  const [courseDay,setCourseDay] = useState(1)
  const [courseWeek,setCourseWeek] = useState(0)
  const [weekInput,setWeekInput] = useState()
  const [isLoading,setIsLoading] = useState(true)
  const [percent,setPercent] = useState()
  const [flag,setFlag] = useState(false)
  let arr = []

  function getCourseDetails(){
    const courseKey = new URLSearchParams(search).get('id') 
    axios.get('https://docwebsite.adityasurve1.repl.co/user/fetchinterestedcourse',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{
      //console.log('Fetched')
      setIsLoading(false)
      setCourse(response.data[courseKey])

      if(!isLoading){

        for(var i=0;i<course.duration;i++){
          arr.push(i.toString())
          //console.log(arr)
      }
      
      //console.log(arr)
      //console.log(response.data[courseKey])
    }
    })
    .catch(error=>{console.log(error)})
  }

  function getCourseProgress(){
    const courseKey = new URLSearchParams(search).get('id') 
    axios.get('https://docwebsite.adityasurve1.repl.co/user/getcourseprogress',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{
      let percent = response.data[courseKey].percentage
      if(!isLoading){
        if(percent==0) percent=100/(course.duration*7)
      }
      setPercent(percent)
    })
    .catch(error=>{console.log(error)})
  }

  
  useEffect(() => {
    getCourseDetails()
    getCourseProgress()
    //console.log("here outside")
    //console.log(isLoading)
    if(!isLoading){
      //console.log("here")
      
      const week = percent/100*course.duration
      const decimal = week - Math.floor(week)
      let day = (decimal*100)/(100/7)
      if(day==0) day=1
      if(!flag){
        setCourseDay(Math.round(day))
        setCourseWeek(Math.floor(week))
        setWeekInput(arr)
        setFlag(true)
        //updateData()
      }
        
      //console.log(course.videos[courseWeek].day)
    }
  }, [percent])
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
              <h5>Current Progress: {courseWeek} weeks ({courseDay} days)</h5>
              <h3>WEEK:</h3>
              {
                
              }
              <select value={courseWeek} onChange={(event) => {setCourseWeek(event.target.value);}}>
                {
                  weekInput?.map((value,key)=>{
                    return(
                      <option value={value}>{value}</option>
                    )
                  })
                }
              </select>
              <h3>DAY:</h3>
              <select value={courseDay} onChange={(event) => {setCourseDay(parseInt(event.target.value,10));}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div>
                      <CourseLinks  
                        data={course}
                        day={parseInt(courseDay,10)-1}
                        week={courseWeek}
                        /> 
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