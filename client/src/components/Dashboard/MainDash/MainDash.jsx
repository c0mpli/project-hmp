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
      
      <h2>Your Progress</h2>
      <Cards />
      <h2>Popular Programs</h2>
      <Programs />
    </div>
  );
};

export default MainDash;
