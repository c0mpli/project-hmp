import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./RightSide.css";
import { UpdatesData } from "../../Data/Data";
import ProfileImage from '../../images/img1.png'
const RightSide = () => {
  return (
    <div className="RightSide">

      <div className="profile">
        <img src={ProfileImage}/>
        <div className="profile-info">
          <h2>Azeem</h2>
          <p style={{position:"absolute",paddingTop:"1rem"}}>__________________</p>
          <p>Subscriber</p>
        </div>
      </div>

    <div>
      <div className="Updates">
        {UpdatesData.map((update) => {
          return (
            <div className="update">
              <img src={update.img} alt="profile" />
              <div className="noti">
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>{update.name}</span>
                  <br/>
                  <span> {update.noti}</span>
                </div>
                  <span style={{fontSize:"0.7rem"}}>{update.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>

      <div>
        <h3>Active Programs</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
