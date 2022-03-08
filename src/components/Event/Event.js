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

const events = [
  {
    name1: "Manthan",
    name2: "Cultural Show",
  },
  {
    name1: "Manthan",
    name2: "Cultural Show",
  },
  {
    name1: "Manthan",
    name2: "Cultural Show",
  },
  {
    name1: "Manthanv",
    name2: "Cultural Show",
  },
  {
    name1: "Manthan",
    name2: "Cultural Show",
  },
  {
    name1: "Manthan",
    name2: "Cultural Show",
  },
];
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
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  let gridEvent = 0;
  return (
    <>
      <div className="top-section">
        <div className="events"></div>
        <div className="dance-bg"></div>
      </div>
      <div className="main-section">
        <div className={active ? "carousel-inactive" : "carousel"}>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div
                onClick={() => {
                  setActiveIndex(index + 1);
                  setActive(true);
                }}
              >
                <EventCard
                  expand={false}
                  name1={event.name1}
                  name2={event.name2}
                  bgImg={event.bgImg}
                  key={index}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={active ? "grid" : "grid-inactive"}>
          {events.forEach((eventI, index) => {
            if (activeIndex === index + 1) {
              gridEvent = eventI;
            }
          })}
          <div className={` ${active === 2 ? "item-inactive" : "item"}`}>
            <EventCard
              expand={false}
              name1={
                events[activeIndex <= 0 || activeIndex >= 6 ? 5 : activeIndex]
                  .name1
              }
              name2={
                events[activeIndex <= 0 || activeIndex >= 6 ? 5 : activeIndex]
                  .name2
              }
              bgImg={
                events[activeIndex <= 0 || activeIndex >= 6 ? 5 : activeIndex]
                  .bgImg
              }
              key={activeIndex <= 0 || activeIndex >= 6 ? 5 : activeIndex}
            />
          </div>
          <div className="item">
            <EventCard
              expand={true}
              name1={gridEvent.name1}
              name2={gridEvent.name2}
              bgImg={gridEvent.bgImg}
              key={activeIndex - 1}
              changeActive={(active1) => setActive(active1)}
            />
          </div>

          <div className={` ${active === 2 ? "item-inactive" : "item"}`}>
            <EventCard
              expand={false}
              name1={events[activeIndex >= 5 ? 0 : activeIndex + 1].name1}
              name2={events[activeIndex >= 5 ? 0 : activeIndex + 1].name2}
              bgImg={events[activeIndex >= 5 ? 0 : activeIndex + 1].bgImg}
              key={activeIndex >= 5 ? 0 : activeIndex + 1}
            />
          </div>
          <div className={` ${active === 2 ? "item-inactive" : "item"}`}>
            <EventCard
              expand={false}
              name1={events[activeIndex >= 5 ? 1 : activeIndex + 2].name1}
              name2={events[activeIndex >= 5 ? 1 : activeIndex + 2].name2}
              bgImg={events[activeIndex >= 5 ? 1 : activeIndex + 2].bgImg}
              key={activeIndex >= 5 ? 0 : activeIndex + 2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;

/* <EventCard
  expand={false}
  name1={events[0].name1}
  name2={events[0].name2}
  bgImg={events[0].bgImg}
  key={0}
/>
{events.forEach((eventI, index) => {
  if (activeIndex === index + 1) {
    <EventCard
      expand={activeIndex === index + 1}
      name1={eventI.name1}
      name2={eventI.name2}
      bgImg={eventI.bgImg}
      key={index}
    />;
  }
})}
<EventCard
  expand={false}
  name1={events[3].name1}
  name2={events[3].name2}
  bgImg={events[3].bgImg}
  key={3}
/>
<EventCard
  expand={false}
  name1={events[4].name1}
  name2={events[4].name2}
  bgImg={events[4].bgImg}
  key={4}
/> */
