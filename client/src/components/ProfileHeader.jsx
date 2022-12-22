import React from 'react'
import ProfileImage from '../imgs/img1.png'
import Switch from "react-switch";
import { useTheme } from "../context/ThemeContext";
import './ProfileHeader.css'

function ProfileHeader(props) {
    const {theme, toggleTheme} = useTheme()
  return (
    <div className='AppGlass3 ProfileHeader'>
        <div className='HeaderContent'>
            <h1>{props.title}</h1>
            <Switch onChange={toggleTheme} checked={theme === 'dark'} checkedIcon={false} uncheckedIcon={false} onColor={'#FFB800'} offColor={'#8B8A8F'}/>
        </div>
        <div className="profile">
            <img src={ProfileImage}/>
            <div className="profile-info">
                <h2>Azeem</h2>
                <div className="profileRectLine"></div>
                <p>Subscriber</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader