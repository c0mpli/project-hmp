import React, { useEffect, useLayoutEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import axios from "axios";

function EditHealthPartner() {
  const [profileData, setProfileData] = useState({});

  function handleOnChange(e) {
    if (e.target.name === "timings") {
      var t = e.target.value.split(",");
      t = t.filter((val) => val !== "");
      setProfileData({ ...profileData, [e.target.name]: t });
      return;
    }
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    axios
      .post(
        "https://docwebsite.adityasurve1.repl.co/healthp/update-doctor-profile",
        {
          userId: localStorage.getItem("token"),
          data: profileData,
        },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        if (response.data.success) {
          alert("Data updated.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  function getProfileData() {
    axios
      .get(
        "https://docwebsite.adityasurve1.repl.co/healthp/get-doctor-info-by-doctor-id",
        {
          headers: { token: localStorage.getItem("token") },
          auth: { user: { _id: localStorage.getItem("token") } },
        }
      )
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useLayoutEffect(() => {
    getProfileData();
  }, []);

  const ProfileInputsData = [
    { labeltitle: "Email", labelID: "email", value: profileData?.email },
    {
      labeltitle: "Mobile Number",
      labelID: "mobilenum",
      value: profileData?.mobilenum,
    },
    {
      labeltitle: "Fee Per Consultation",
      labelID: "feePerConsultation",
      value: profileData?.feePerConsultation,
    },
    {
      labeltitle: "Timings",
      labelID: "timings",
      value: profileData?.timings,
    },
  ];
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Edit Profile"} />

        <div className="AppGlass3">
          <div className="bookAppointmentWrapper" style={{ gap: "1rem" }}>
            {ProfileInputsData.map((data) => {
              return (
                <div className="inputWrapper">
                  <label
                    for={data.labelID}
                    id={data.labelID}
                    style={{ width: "10rem" }}
                  >
                    {data.labeltitle}
                  </label>
                  <input
                    name={data.labelID}
                    id={data.labelID}
                    value={data.value}
                    onChange={handleOnChange}
                    style={{ width: "10rem" }}
                  />
                </div>
              );
            })}

            <div className="appointmentButtons card-button">
              <button onClick={handleSubmit}>Submit changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHealthPartner;
