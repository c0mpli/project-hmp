import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  function getAppointments() {
    axios
      .get(
        "https://docwebsite.adityasurve1.repl.co/healthp/get-appointments-by-doctor-id",
        {
          headers: { token: localStorage.getItem("token") },
          auth: { user: { _id: localStorage.getItem("token") } },
        }
      )
      .then((response) => {
        setAppointments(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Approve Appointments"} />

        <div className="AppGlass3"></div>
      </div>
    </div>
  );
}

export default ManageAppointments;
