import React from "react";
import "./Cards.css";
import { cardsData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";

const Cards = () => {
  const navigate = useNavigate()
  axios.get('https://docwebsite.adityasurve1.repl.co/user/getcourseprogress',{headers:{"token":localStorage.getItem('token')}})
  .then(response=>{console.log(response.data)})
  .catch(error=>{console.log(error)})
  return (
    <>
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
            />
          </div>
        );
      })}
    </div>
    <div className="card-button">

      <button onClick={()=>navigate('/myprograms')}>{'VIEW ALL ->'} </button>
    </div>
    </>
  );
};

export default Cards;
