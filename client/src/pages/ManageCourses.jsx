import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard';

function ManageCourses() {
  const [courses, setCourses] = useState();

  useEffect(()=>{
    axios.get('https://docwebsite.adityasurve1.repl.co/admin/fetchallcourses',{headers:{"token":localStorage.getItem('token')}})
    .then(response=>{
      //console.log((response.data));
      setCourses(response.data);
    })
    .catch(error=>{console.log(error)})
  })
  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      <div>
        <ProfileHeader title={'Manage Courses'}/>
      </div>
      <div className='AppGlass3'>
        <div>

        {
          courses?.map((value,key)=>{
            return(
              
              <UserCard 
              isImage="yes"
              image={value.image}
              name={value.programname}
              description={value.description}
              del="2"
              id={value._id}
              key={key}
              />
              )
            })
          }
          </div>


        
      </div>
    </div>
        
</div>
  )
}

export default ManageCourses