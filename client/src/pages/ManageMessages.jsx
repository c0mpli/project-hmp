import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
function ManageMessages() {
  return (
    <div className='AppGlass2'>
    <Sidebar />
    <div className='ContentWrapper'>
      
        <ProfileHeader title={'Manage Messages'}/>
      
      <div className='mainContent'>
      <input placeholder='Send a message'></input>
      <button>Send</button>
      
        
      </div>
    </div>
        
</div>
  )
}

export default ManageMessages