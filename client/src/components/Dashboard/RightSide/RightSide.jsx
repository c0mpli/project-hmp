import React, { useState } from "react";
import "./RightSide.css";
import { UpdatesData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import profileIcon from '../../../imgs/img2.png'
const RightSide = () => {
  const [messages, setMessages] = useState()
  const [appoinments,setAppointments] = useState()
  
  const navigate = useNavigate()
  axios.get('https://docwebsite.adityasurve1.repl.co/user/getmessages',{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{setMessages(response.data.data);})
  .catch(error=>{console.log(error)})

  axios.get('https://docwebsite.adityasurve1.repl.co/user/get-appointments-by-user-id',{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{setAppointments(response.data.data);console.log(appoinments)})
  .catch(error=>{console.log(error)})
  return (
    <div className="RightSide">
    <div> 
    <h3>HMP Messages</h3>
      <div className="Updates">
        {messages && messages.map((message,key) => {
          return (
            <>
            <div className="update" key={key}>
              <img src={profileIcon} alt="profile" />
              <div className="noti" key={key}>
                <div  style={{marginBottom: '0.5rem'}}>
                  <span>Heath Matthews</span>
                  <br/>
                  <span> {message.message}</span>
                </div>
                  <span className="notificationTime"></span>
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
          {
            appoinments?.map((appoinment,key)=>{
              return(
                <div key={key}>
                  <p>{appoinment.date}</p>
                  </div>
              )
            })
          }
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
          <button onClick={()=>{navigate('../scheduleappointment')}}>Schedule an appoinment</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default RightSide;
