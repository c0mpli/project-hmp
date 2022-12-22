import React from 'react'
import Sidebar from '../components/Sidebar'
import './HMPPrograms.css'
import { useTheme } from "../context/ThemeContext";
import ProfileHeader from '../components/ProfileHeader';
import HMPProgram from '../components/HMPProgram';
import { dataDigitalBestSeller } from '../Data/Data';

function HMPPrograms() {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          <div>
            <ProfileHeader title={'HMP Programs'}/>
          </div>
          <div>
          {dataDigitalBestSeller.map((program)=>{
          return(
            <>
            <HMPProgram 
              image={program.linkImg}
              title={program.title}
              description={program.price}
              duration={program.days}
            />
            </>
        )})}
            
          </div>
        </div>
            
    </div>
  )
}

export default HMPPrograms