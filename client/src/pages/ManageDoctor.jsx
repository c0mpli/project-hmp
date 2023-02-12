import React, { useState } from 'react'
import { useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import userImage from '../imgs/img2.png'

function ManageDoctor() {
    const [doctors,setDoctors] = useState()
    useEffect(()=>{
      axios.get('https://docwebsite.adityasurve1.repl.co/sadmin/getdoctors',{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setDoctors(response.data.data)
        console.log(doctors)
        //console.log("doctors "+Object.entries(doctors))
      })
    })
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'Manage Doctors'}/>
          </div>
          <div>
          {
            doctors && doctors.map((user,key)=>{
              return(
                <div>
                  <UserCard 
                  name={`${user.firstname} ${user.lastname}`} 
                  image={userImage}
                  description={`Email: ${user.email}, Mobile Number: ${user.mobilenum}`}
                  />
                </div>
              )
            })
          }
          
            
          </div>
        </div>
            
    </div>
  )
}

export default ManageDoctor