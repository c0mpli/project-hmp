import React from "react";
import { useLocation } from "react-router-dom";
import HMPPrograms from "./HMPPrograms";
import MyPrograms from "./MyPrograms";
import Dashboard from "./Dashboard";

function DashboardHandler() {
  const location = useLocation();
  return (
    <div className="AppGlass2">
      <Sidebar />
      {location.pathname === "/dashboard" && <Dashboard />}
      {location.pathname === "/myprograms" && <MyPrograms />}
      {location.pathname === "/hmpprograms" && <HMPPrograms />}
    </div>
  );
}

export default DashboardHandler;
