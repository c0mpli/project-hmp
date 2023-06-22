import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import axios from "axios";

function EditHealthPartner() {
  const [profileData, setProfileData] = useState({});

  function handleOnChange(e) {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {}
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
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
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
      labeltitle: "",
      labelID: "email",
      value: profileData?.feePerConsultation,
    },
    { labeltitle: "Email", labelID: "email", value: profileData?.email },
  ];
  return (
    <div className="AppGlass2">
      <Sidebar />
      <div className="ContentWrapper">
        <ProfileHeader title={"Edit Profile"} />

        <div className="AppGlass3">
          <div className="EditProfileWrapper">
            <div className="EditProfileinputWrapper">
              {ProfileInputsData.map((data) => {
                return (
                  <div className="EditProfileinput">
                    <label for={data.labelID} id={data.labelID}>
                      {data.labeltitle}
                    </label>
                    <input
                      name={data.labelID}
                      id={data.labelID}
                      value={data.value}
                      onChange={handleOnChange}
                    />
                  </div>
                );
              })}
              <div className="card-bottom">
                <button onClick={handleSubmit}>Edit data</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHealthPartner;
