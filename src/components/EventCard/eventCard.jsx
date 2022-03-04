import React, { useState } from "react";
import "./eventCardStyles.css";
import viewMore from "../../assets/view more.svg";

const EventCard = (props) => {
  const [expand, setExpand] = useState(0);
  return (
    <div className="card-container">
      <div
        className={`card ${expand === 1 ? "card-expand1" : ""} ${
          expand === 2 ? "card-expand2" : ""
        }`}
        style={{ background: props.bgImg }}
        onClick={() => {
          if (expand === 0) {
            setExpand(1);
          } else if (expand === 2) {
            setExpand(0);
          }
        }}
      >
        <div className="details">
          <h2>{props.name1}</h2>
          <p>{props.name2}</p>
        </div>
        <div
          className={`${expand === 1 ? "see-more" : ""}`}
          onClick={() => {
            setExpand(2);
          }}
        >
          <img
            src={`${expand === 1 ? viewMore : ""}`}
            alt=""
            style={{ width: "150px" }}
          />
        </div>
      </div>
      <div className={`${expand === 1 ? "" : "card-bg"}`}></div>
    </div>
  );
};
EventCard.defaultProps = {
  name1: "name",
  name2: "name2",
  bgImg: "rgb(63, 63, 63)",
};
export default EventCard;
