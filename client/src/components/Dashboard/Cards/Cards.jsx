import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";

const Cards = () => {
  const [cardsData, setCardsData] = useState();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    axios
      .get("https://docwebsite.adityasurve1.repl.co/user/getcourseprogress", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((response) => {
        const t = response.data;
        t.sort(function (a, b) {
          return a.percentage - b.percentage;
        });
        t.reverse();
        setCardsData(t);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <>
      <div className="Cards">
        {cardsData?.map((card, id) => {
          if (id > 2) return null;
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.courseName}
                color={card.color}
                barValue={Math.round(card.percentage)}
                value={card.value}
              />
            </div>
          );
        })}
      </div>
      <div className="card-button">
        <button onClick={() => navigate("/myprograms")}>
          {"VIEW ALL ->"}{" "}
        </button>
      </div>
    </>
  );
};

export default Cards;
