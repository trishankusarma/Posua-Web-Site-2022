import React, { useState } from "react";
import EventCard from "../EventCard/eventCard";
import "./Event.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bordoisila from "../../assets/Events/Bordoisila.jpg";
import Kristhi from "../../assets/Events/kristi.jpg";
import Parikrama from "../../assets/Events/Parikrama.jpg";
import Abhijatri from "../../assets/Events/Abhijatri.jpg";
import Ankuran from "../../assets/Events/Ankuran.jpg";
import Rongtulika from "../../assets/Events/Rangtulika.jpg";
import Manthan from "../../assets/Events/manthan.jpg";
import Rangghar from "../../assets/Events/Rangghar.jpg";
import HengulHaital from "../../assets/Events/hengulhaital.jpg";
import Rongili from "../../assets/Events/rongii.png";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        color="rgba(0, 0, 0, 0.7)"
        size="2x"
      />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        color="rgba(0, 0, 0, 0.7)"
        size="2x"
      />
    </div>
  );
};

/*events array contains all the events.

Each event object has the following fields / props:

1. name1: The name of the event. Eg: Manthan
2. name2: The event discription.Eg: Cultural event
3. BgImg: The Background image of the event. (Import the file to pass into the array)
4. date: The date of the event.
5. content: The content describing the event.

Following props / fields should not be added to the array objects:

1. expand: Is a state handler prop.
2. changeActive: Is a prop function to manage state change.
3. key: Automatically handled for each event.
*/

const events = [
  {
    name1: "Bordoisila",
    name2: "Group Dance",
    content: `Like the seasonal wind returning to her parental home, sweeping everyone in her urgency and flurry, the entirety of the NITS campus is swept by the mesmerizing performances of the gorgeous 'Gabhorus', draped in golden silk. The passion and gaiety of spring can be witnessed during this event with fresh "Kopou", "Gagana", "Gamkharu", "Junbiri", "Hasoti", and "Borhomthuri" accentuating their beauty.`,
    bgImg: Bordoisila,
  },
  {
    name1: "Krishti",
    name2: "Cultural Show",
    content: `Celebrating the land with a rich and diverse culture and traditions perfectly blended, Posua introduces Krishti - a golden opportunity to peep into the beautiful creation of time. It's a chance to witness the intertwining cultures of the people who had come here ages ago and made this land dear home, resulting in a greater majestic society which is the amalgamation of these cultures. Be it Barak or Brahmaputra, we all are entangled with golden threads in a beautiful tapestry.`,
    bgImg: Kristhi,
  },
  {
    name1: "Parikrama",
    name2: "Fashion Show",
    content: `Parikroma brings forward the golden handloom of an "Axomiya Sipini". "Deka/Gabhoru" dressed in sparkling silk ornamented with traditional jewellery and handicrafts bistow us with a glimpse of the ethenic attires fo the diverse culture of "Bor-Axom".`,
    bgImg: Parikrama,
  },
  {
    name1: "Abhijatri",
    name2: "Cultural Rally",
    content: `"Our ability to reach unity in diversity will be the beauty and test of our civilization". BorAxom ever since the millenium has enfolded numerous communities and tribes into its fold whose amalgamation led to the progression of the Greater Assamese Culture. We NITians holding our hands together, will manifest the timeline of our society, its festivals, and rituals in this cultural rally that we call "Abhijatri".`,
    bgImg: Abhijatri,
  },
  {
    name1: "Ankuran",
    name2: "Cultural Show",
    content: `Blending the innocence of a child with the richness of culture, Ankuran provides us with an atmosphere of simple elegance. The beats of the gracious Bihu songs, "The Dhols", and "Pepas", amplified by the aesthetics of the tiny kids feel the air with energy. The audience can't help but go grooving along with the performance. The scintillating moves of innocence surely have the power to move everyone.`,
    bgImg: Ankuran,
  },
  {
    name1: "Rongtulika",
    name2: "Art Competition",
    content: `Rongtulika is an art competition under POSUA which provides an opportunity to young minds to make their imaginations lively with vibrant hues. A platform where children fill their canvas with various shades and give life to their ideas and thoughts. The competition is an extravaganza not only for the participants but for the spectators as well, as they witness the little artists blend their perceptions with beauty and elegance.`,
    bgImg: Rongtulika,
  },
  {
    name1: "Manthan",
    name2: "Performance",
    content: `The most awaited and anticipated event of POSUA is Manthan,in which the fabulous performance of renowned performers of Assam rejuvenates everyone’s spirit in the campus. Distinguished performers Zubeen Garg,Manash Robin,Dikshu,Srimanta Shekhar have already graced the stage of Manthan with their presence and exuberant performance in the past years.This year too, NITS Family is excited for the extravagant Manthan under POSUA’22.`,
    bgImg: Manthan,
  },
  {
    name1: "Rangghar",
    name2: "Sports Segment",
    content: `The native sports segment of "Posua" takes us back to the historic Rangpur breezing in the amphitheater of Rang-Ghar. The event indulges us in salubrious competitions which extend our roots deeper into our culture.`,
    bgImg: Rangghar,
  },
  {
    name1: "Hengul Haital",
    name2: "Husori Bihu",
    content: `The liveliness of open Husori Bihu meets the disclosure of the stage in this event called "Hengul Haital". The beats of "Dhol", "Pepa" and "Taal" with the traditional rhythms truly exhilarate the environment, reforming the atmosphere into an elated one.`,
    bgImg: HengulHaital,
  },
  {
    name1: "Rongili",
    name2: "Bihu Dance Competition",
    content: `Dancing is a performing artform that induces an ecstatic trance state both on the performers as well as on the audience. Providing a platform to represent our culture and indigeneity through unique moves, the various events under Posua also includes "Rongili", the Female Bihu Dance competition where one can showcase one's dancing skills and express their love for Bihu. The scintillating moves of the female Bihu dancers radiate their love for dancing Bihu and for our motherland itself. This creates a captivating and mesmerizing environment, where the audience is enthrilled by the beautiful performances of the "Gabhorus".`,
    bgImg: Rongili,
  },
];
const Event = () => {
  let settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 1,
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
  const [active, setActive] = useState(false); // state for handling grid-flexbox view
  const [activeIndex, setActiveIndex] = useState(-1); // state for getting the index of the active event when clicked
  let gridEvent = 0;
  let n = events.length;
  return (
    <div className="main">
      <div className="top-section">
        <div className={` ${active === 2 ? "events-max" : "events"}`}></div>
        <div className="dance-bg"></div>
        <div
          className={` ${
            active === 2 ? "event_content-inactive" : "event_content"
          }`}
        >
          POSUA, the spring fest of NIT Silchar, spreads out exuberance all
          around with the arrival of spring rejuvenating the land. This ecstatic
          grandeur lets us enliven the beauteous culture of the land of Assam
          with joyful activities bringing out the heritages and indispensable
          indigenous traditions. In this perfect period, POSUA brings a plethora
          of events to celebrate the cultural splendour of ‘Bor Axom’.
          Protidhwoni reverberates the campus with zestful spirit of ‘Husori
          dols; ‘Bordoisila’ would leave you in awe with the scintillating
          performance of ‘gabhorus’ in golden silk; ‘Krishti’ will dive you
          through the diverse culture and traditions of Barak and Brahmaputra
          Valley; ‘Gunjan’ will stir your soul with rhythms and vibrance of open
          ‘Husori’; ‘Parikrama’ would take you to the ethnic wonders woven in
          the taat xaal of Axomiya xipinis; ‘Abhijatri’ have the diversities of
          this wonderful cultural land marching together in unity; ‘RongGhar’
          Bakori awaits for the indigenous games and fun activities, taking us
          back to the cultural roots; ‘Ankuran’ blends the innocence of kids
          with the richness of culture with joyful bihu moves and glee in their
          performance; ‘RongTulika’ brings out the imagination of young minds on
          canvas filled with bright colours; ‘Borhomthuri’ the annual souvenir
          assembles enthralling literally pieces reflecting the literary skills
          of youth; the campus anticipates for ‘Manthan’ to sway to the
          awe-bound performance of amazing artists.
        </div>
      </div>
      <div className={active ? "main-section-large" : "main-section"}>
        <div className={active ? "carousel-inactive" : "carousel"}>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div
                onClick={() => {
                  setActiveIndex(index + 1);
                  setActive(true);
                }}
                key={index}
              >
                <EventCard
                  expand={false}
                  name1={event.name1}
                  name2={event.name2}
                  bgImg={event.bgImg}
                  content={event.content}
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
                events[
                  activeIndex === 1 || activeIndex <= 0
                    ? n - 1
                    : activeIndex - 2
                ].name1
              }
              name2={
                events[
                  activeIndex === 1 || activeIndex <= 0
                    ? n - 1
                    : activeIndex - 2
                ].name2
              }
              bgImg={
                events[
                  activeIndex === 1 || activeIndex <= 0
                    ? n - 1
                    : activeIndex - 2
                ].bgImg
              }
              content={
                events[
                  activeIndex === 1 || activeIndex <= 0
                    ? n - 1
                    : activeIndex - 2
                ].content
              }
              key={
                activeIndex === 1 || activeIndex <= 0 ? n - 1 : activeIndex - 2
              }
            />
          </div>
          <div className="item">
            <EventCard
              expand={true}
              name1={gridEvent.name1}
              name2={gridEvent.name2}
              bgImg={gridEvent.bgImg}
              content={gridEvent.content}
              key={activeIndex - 1}
              changeActive={(active1) => setActive(active1)}
            />
          </div>

          <div className={` ${active === 2 ? "item-inactive" : "item"}`}>
            <EventCard
              expand={false}
              name1={
                events[activeIndex === n || activeIndex <= 0 ? 0 : activeIndex]
                  .name1
              }
              name2={
                events[activeIndex === n || activeIndex <= 0 ? 0 : activeIndex]
                  .name2
              }
              bgImg={
                events[activeIndex === n || activeIndex <= 0 ? 0 : activeIndex]
                  .bgImg
              }
              content={
                events[activeIndex === n || activeIndex <= 0 ? 0 : activeIndex]
                  .content
              }
              key={activeIndex === n || activeIndex <= 0 ? 0 : activeIndex}
            />
          </div>
          <div className={` ${active === 2 ? "item-inactive" : "item"}`}>
            <EventCard
              expand={false}
              name1={
                events[
                  activeIndex >= n - 1 || activeIndex <= 0 ? 0 : activeIndex + 1
                ].name1
              }
              name2={
                events[
                  activeIndex >= n - 1 || activeIndex <= 0 ? 0 : activeIndex + 1
                ].name2
              }
              bgImg={
                events[
                  activeIndex >= n - 1 || activeIndex <= 0 ? 0 : activeIndex + 1
                ].bgImg
              }
              content={
                events[
                  activeIndex >= n - 1 || activeIndex <= 0 ? 0 : activeIndex + 1
                ].content
              }
              key={
                activeIndex === n - 1 || activeIndex <= 0 ? 0 : activeIndex + 1
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
