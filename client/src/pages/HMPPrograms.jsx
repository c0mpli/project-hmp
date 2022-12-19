import React from 'react'
import Sidebar from '../components/Sidebar'
import './HMPPrograms.css'
import Switch from "react-switch";
import { useTheme } from "../context/ThemeContext";
import ProfileImage from '../images/img1.png'
import ProfileHeader from '../components/ProfileHeader';

function HMPPrograms() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div>
          <div>
            <ProfileHeader title={'HMP Programs'}/>
          </div>
        </div>
            
    </div>
  )
}

export default HMPPrograms