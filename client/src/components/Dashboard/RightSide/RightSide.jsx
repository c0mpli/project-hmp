import React from "react";
import "./RightSide.css";
import { UpdatesData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";
const RightSide = () => {
  const navigate = useNavigate()
  return (
    <div className="RightSide">

      

    <div> 
    <h3>HMP Messages</h3>
      <div className="Updates">
        {UpdatesData.map((update) => {
          return (
            <>
            <div className="update" key={update}>
              <img src={update.img} alt="profile" />
              <div className="noti" key={update}>
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>{update.name}</span>
                  <br/>
                  <span> {update.noti}</span>
                </div>
                  <span className="notificationTime">{update.time}</span>
              </div>
            </div>
            <div className="messagesRectLine"></div>
            </>
          );
        })}
      </div>
    </div>

      <div>
        <h3>Upcoming Appointments</h3>
        <div>
      {/*<div className="active-programs">
        {cardsData.map((card) => {
          return (
            <div className="programs" onClick={()=>{navigate('../myprograms')}}>
              <img src={card.image} alt="profile" />
              <div className="noti">
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>{card.title}</span>
                  <br/>
                  <Link to={'../myprograms'}className="card-continue-journey">Continue Journey -></Link>
                </div>
              </div>
          </div>
            
            );
          })}
      </div>*/}
      <div className="add-program">
          <button onClick={()=>{navigate('../myprograms')}}>Schedule an appoinment</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default RightSide;
