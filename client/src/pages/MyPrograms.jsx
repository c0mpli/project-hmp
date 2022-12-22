import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'

function MyPrograms() {
  return (
    <div className='AppGlass2'>
        <Sidebar /> 
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title="My Programs"/>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default MyPrograms