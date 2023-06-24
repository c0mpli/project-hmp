import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import calendarIcon from "../imgs/calendar.png";
import "./Appointments.css";
import useWindowDimensions from "../components/useWindowDimensions";
function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
      })
      .catch((error) => {
        alert(error);
      });
  }
  const { width } = useWindowDimensions();
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"View Appointments"} />

        <div className="ManageAppointmentsWrapper">
          {appointments.map((appointment, key) => {
            const date = new Date(appointment.date).getDate();
            const month = new Date(appointment.date).getMonth();
            const year = new Date(appointment.date).getFullYear();
            const time = appointment.time.split("T")[1].split(".")[0];
            return (
              <div key={key} className="appointmentWrapper SpecialAppointments">
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                  }}
                >
                  {width > 768 ? <img src={calendarIcon} /> : <></>}
                  <h3>User Aneesh</h3>
                  <div className="appointmentContent">
                    <h3>{`${date} ${monthNames[month]}, ${year}`}</h3>
                    <p>{`At HMP Office, Khar @${time}`}</p>
                  </div>
                </div>
                <div>
                  <p>
                    Status:{" "}
                    <span
                      style={{
                        color:
                          appointment.status === "approved"
                            ? "green"
                            : appointment.status === "pending"
                            ? "yellow"
                            : "red",
                      }}
                    >
                      {appointment.status}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DoctorAppointments;
