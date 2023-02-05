import React from 'react'
import ProfileImage from '../imgs/img1.png'
import Switch from "react-switch";
import { useTheme } from "../context/ThemeContext";
import './ProfileHeader.css'

function ProfileHeader(props) {
    const {theme, toggleTheme} = useTheme()
    const name = localStorage.getItem('name')
    let role = localStorage.getItem('role')
    if(role==='user'){role='Subscriber'}
  return (
    <div className='AppGlass3 ProfileHeader'>
        <div className='HeaderContent'>
            <h1>{props.title}</h1>
            <Switch onChange={toggleTheme} checked={theme === 'dark'} checkedIcon={false} uncheckedIcon={false} onColor={'#FFB800'} offColor={'#8B8A8F'}/>
        </div>
        <div className="profile">
            <img src={ProfileImage}/>
            <div className="profile-info">
                <h2>{name}</h2>
                <div className="profileRectLine"></div>
                <p>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader