import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/HMP-logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {useNavigate,Link} from "react-router-dom"


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const navigate = useNavigate();
  

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar' id='light' variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''}>
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          const url = item.heading.replace(' ','').toLowerCase()

          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <Link to={"../"+url}>{item.heading}</Link>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
