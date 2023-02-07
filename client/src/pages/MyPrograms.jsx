import React, {useEffect,useState} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import HMPProgram from '../components/HMPProgram'

function MyPrograms() {
  const [programs,setPrograms] = useState();
  useEffect(() => {
    axios.get('https://docwebsite.adityasurve1.repl.co/user/fetchinterestedcourse',{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
    .then(response=>{setPrograms(response.data)})
    .catch(error=>{console.log(error)})
  }, [])
  
  return (
    <div className='AppGlass2'>
            <Sidebar />
            <div className='ContentWrapper'>
                <ProfileHeader title={'My programs'}/>
                <div className='AppGlass3'>
                  <div>
                {programs && programs.map((program,key)=>{
                  return(
            <div id={key} >
            <HMPProgram 
              image={program.image}
              title={program.programname}
              description={program.description}
              duration={program.duration}
              myprogram="true"
              />
            </div>
        )})}
        </div>
                </div>
            </div>
            
            
            
        </div>
  )
}

export default MyPrograms