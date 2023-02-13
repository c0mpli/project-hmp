import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

function ManageCourses() {
  const [courses, setCourses] = useState();

  useEffect(()=>{
    axios.get('')
  })
  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      <div>
        <ProfileHeader title={'Manage Courses'}/>
      </div>
      <div>
      

        
      </div>
    </div>
        
</div>
  )
}

export default ManageCourses