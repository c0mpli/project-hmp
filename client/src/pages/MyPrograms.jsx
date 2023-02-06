import React, {useEffect} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import RightSide from '../components/Dashboard/RightSide/RightSide';
import MainDash from '../components/Dashboard/MainDash/MainDash';

function MyPrograms() {
  useEffect(() => {
    const data = axios.get('http://localhost:5000/user/getcourseprogress',{headers:{
      'token':localStorage.getItem('token')
    }})  
    console.log(data)
  }, [])
  
  return (
    <div className='AppGlass2'>
            <Sidebar />
            <div className='ContentWrapper'>
                <ProfileHeader title={'My programs'}/>
                <div className='AppGlass3'>
                <MainDash />
                <RightSide />
                </div>
            </div>
            
            
            
        </div>
  )
}

export default MyPrograms