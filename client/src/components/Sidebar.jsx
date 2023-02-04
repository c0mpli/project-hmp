import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/HMP-logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false)

  const navigate = useNavigate();
  const {dispatch} = useAuthContext()
  
  

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  //console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar' id='light' 
    variants={sidebarVariants} 
    animate={window.innerWidth<=768?`${expanded}`:''} 
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" onClick={()=>{navigate('/')}}/>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={window.location.pathname === item.link ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => {
                setSelected(item.key-1)
                navigate("../"+item.link)
                setExpaned(false)
              }}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
          <span onClick={()=>{
            localStorage.removeItem('token')
            dispatch({type:'LOGOUT'})
            navigate('../')
          }}>Logout</span>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
