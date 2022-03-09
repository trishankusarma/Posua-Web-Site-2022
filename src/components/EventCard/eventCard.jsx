import React, { useState } from "react";
import "./eventCardStyles.css";
import viewMore from "../../assets/view more.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BgImg from "../../assets/EventBg.svg";

const EventCard = (props) => {
  const [expand, setExpand] = useState(props.expand);
  return (
    <div className="card-container">
      <div
        className={`card ${expand ? "card-expand1" : ""} ${
          expand === 2 ? "card-expand2" : ""
        }`}
        style={{
          background: `url(${props.BgImg}) right top no-repeat`,
          backgroundSize: "cover",
        }}
        onClick={() => {
          if (expand === 0) {
            setExpand(1);
          }
        }}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className={`cross ${expand ? "cross-active" : ""} ${expand===2 ? "cross-active-2" : ""}`}
          onClick={() => {
            props.changeActive(false);
            setExpand(1);
          }}
        />
        <div className={` ${!(expand === 2 || expand === false) ? "details-active" : "details"}`}>
          <h2>{props.name1}</h2>
          <p>{props.name2}</p>
        </div>
        <div
          className={`${
            !(expand === 2 || expand === false)
              ? "see-more"
              : "see-more-inactive"
          }`}
          onClick={() => {
            props.changeActive(2);
            setExpand(2);
          }}
        >
          <img
            src={`${expand ? viewMore : ""}`}
            alt=""
            style={{ width: "150px" }}
          />
        </div>
        <div className={`${expand === 2 ? "contents" : "content-inactive"}`}>
          <div className="details-max">
            <p>{props.date}</p>
            <h2>{props.name1}</h2>
          </div>
          <div className="para">{props.content}</div>
        </div>
      </div>
      <div className={`${expand ? "" : "card-bg"}`}></div>
    </div>
  );
};
EventCard.defaultProps = {
  expand: "false",
  name1: "name",
  name2: "name2",
  key: "1",
  BgImg: BgImg,
  date: "March 26",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            alias repellat facilis ducimus, a maxime recusandae error soluta
            libero inventore autem temporibus similique blanditiis iure! Nihil
            provident soluta atque temporibus libero neque, voluptatem similique
            quibusdam incidunt, molestias laudantium itaque explicabo,
            architecto aut! Nihil distinctio dolorem reprehenderit iusto
            inventore tempore odit laborum eveniet consequatur ex ipsum, animi
            perspiciatis adipisci, saepe ipsa, architecto nostrum repudiandae
            illum minima veritatis velit nobis magni voluptate? Pariatur
            perspiciatis cumque officia natus vero obcaecati nam. Autem,
            suscipit!`,
};
export default EventCard;
