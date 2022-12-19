import React,{useState} from "react";
import Cards from "../Cards/Cards"
import Programs from "../Programs/Programs";
import "./MainDash.css";
import Switch from "react-switch";
import { useTheme } from "../../../context/ThemeContext";

const MainDash = () => {
  const {theme,toggleTheme} = useTheme();
  return (
    <div className="MainDash">
      <div className="maindash-heading-wrapper">
      <h1>Dashboard</h1>
      <Switch onChange={toggleTheme} checked={theme === 'dark'} checkedIcon={false} uncheckedIcon={false} onColor={'#FFB800'} offColor={'#8B8A8F'}/>
      </div>
      <h2>Your Progress</h2>
      <Cards />
      <h2>Popular Programs</h2>
      <Programs />
    </div>
  );
};

export default MainDash;
