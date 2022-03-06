import React, { useState } from "react";
import EventCard from "../EventCard/eventCard";
import "./Event.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} color="grey" size="2x" />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} color="grey" size="2x" />
    </div>
  );
};

// const events = [
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
//   {
//     name1: "name1",
//     name2: "name2",
//     bgImg: "rgb(63, 63, 63)",
//   },
// ];
const Event = () => {
  let settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="top-section">
        <div className="events"></div>
        <div className="dance-bg"></div>
      </div>
      <div className="main-section">
        <div className={active ? "carousel-inactive" : "carousel"}>
          <Slider {...settings}>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
            <div onClick={() => setActive(true)}>
              <EventCard />
            </div>
          </Slider>
        </div>
        <div className={active ? "grid" : "grid-inactive"}>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
