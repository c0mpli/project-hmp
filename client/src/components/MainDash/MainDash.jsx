import React from "react";
import Cards from "../Cards/Cards"
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <h2>Your Progress</h2>
      <Cards />
      <h2>Popular Programs</h2>
    </div>
  );
};

export default MainDash;
