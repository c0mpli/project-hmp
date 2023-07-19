import React, { useLayoutEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import calendarIcon from "../imgs/calendar.png";
import useWindowDimensions from "../components/useWindowDimensions";

function ManageAppointments() {
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
  const { width } = useWindowDimensions();

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
  function handleButtons(e, id) {
    let status = "cancelled";
    if (e.target.name == "approve") status = "approved";

    axios
      .post(
        "https://docwebsite.adityasurve1.repl.co/healthp/change-appointment-status",
        {
          status: status,
          appointmentId: id,
        },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        alert(status);
        getAppointments();
        //window.location.reload(false);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useLayoutEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Manage Appointments"} />

        <div className="ManageAppointmentsWrapper">
          {appointments.map((appointment, key) => {
            if (appointment.status == "pending") {
              const date = new Date(appointment.date).getDate();
              const month = new Date(appointment.date).getMonth();
              const year = new Date(appointment.date).getFullYear();
              const time = appointment.time.split("T")[1].split(".")[0];
              return (
                <div
                  key={key}
                  className="appointmentWrapper SpecialAppointments"
                >
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
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      alignItems: "center",
                      flexDirection: width > 768 ? "row" : "column",
                    }}
                  >
                    <button
                      className="standardButtons"
                      name="approve"
                      onClick={(e) => handleButtons(e, appointment._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="standardButtons"
                      name="reject"
                      onClick={(e) => handleButtons(e, appointment._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ManageAppointments;
