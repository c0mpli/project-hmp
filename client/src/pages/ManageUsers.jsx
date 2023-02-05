import React from 'react'
import { useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

function ManageUsers() {
    const users=[]
    useEffect(()=>{

    })
  return (
    <div className='AppGlass2'>
        <Sidebar /> 
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title="Manage Users"/>
            <div className='AppGlass3'>
                
                </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default ManageUsers