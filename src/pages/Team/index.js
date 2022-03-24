import React from "react";
import "./style.css";
// import frame from '../.././assets/frame.png'
import team1 from "../.././assets/team1.png";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import TeamDetails from "../../data/team";
import { webTeam_heads } from "../../data/webTeam";
import { decoration_heads } from "../../data/decorationTeam";
// import { marketing_heads } from "../../data/marketingTeam";
import { rally_heads } from "../../data/rallyTeam";
import { food_heads } from "../../data/foodTeam";
import { content_heads } from "../../data/contentTeam";
import { hospitality_heads } from "../../data/hospitalityTeam";
import { design_heads } from "../../data/designTeam";
import { event_heads } from "../../data/eventTeam";
import { photography_team } from "../../data/photographyTeam";
import { logistic_heads } from "../../data/logisticTeam";
import { infra_heads } from "../../data/infrastructureTeam";
import TeamProfile from "./team_profile";
import TeamCard from "./teamCard";
import japi from "../../assets/japi.png";


export default function team() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1 className="text-center heading-name mt-5">
            <img className="japi-animation team-japi" src={japi} alt="japi" /> Team Posua{" "}
            <img className="japi-animation team-japi" src={japi} alt="japi" />
          </h1>

          <p className="GallerySubHeader">
            With the arrival of spring and the departure of winter days, our
            Mother Nature expresses her joy of welcoming the calming
            rejuvenation via greenery and brightness all around her. Our Spring
            Fest, Posua is that venture which nurtures this celebration. This
            spree witnesses everyone coming together to work as a team, be it
            the students, the faculty members and the entire fraternity of NIT
            Silchar into its circle of gaiety and also ensures of breaking all
            the barriers among the crowd and bringing everyone together.
          </p>
          <hr className="GalleryHeaderBorder" />
          <div className="GalleryHeaderBorderIconSection">
            <img src={japi} className="SmallJapi" alt="japi-img"></img>
            <img src={japi} className="MidJapi" alt="japi-img"></img>
            <img src={japi} className="SmallJapi" alt="japi-img"></img>
          </div>
        </div>

        <div className="container">
          {/* row 1 */}
          {TeamDetails.map(({ name, role, phoneNo, email, img }, index) => (
            <TeamCard
              type={index % 2}
              name={name}
              role={role}
              phoneNo={phoneNo}
              email={email}
              img={img}
              key={index}
            />
          ))}
        </div>

        {/* team 1 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">WEB TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {webTeam_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 2 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/2" style={{ textDecoration: "none" }}>
              <span className="team1">DECORATION TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {decoration_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 3 */}
        {/* <center>
          <div className="bottom-heading">
            <Link to="/team1/3" style={{ textDecoration: "none" }}>
              <span className="team1">MARKETING TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center> */}

        {/* bottom cards */}
        {/* <Carousel breakPoints={breakPoints} className="bottom-cards">
          {marketing_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel> */}

        {/* team 4 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/4" style={{ textDecoration: "none" }}>
              <span className="team1">CULTURAL RALLY TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {rally_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 4 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">FOOD MANAGEMENT TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {food_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 5 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">CONTENT TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {content_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>
        {/* team 6 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">HOSPITALITY TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {hospitality_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 7 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">DESIGN TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {design_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 8 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">EVENT MANAGEMENT TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {event_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 8 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">PHOTOGRAPHY/VIDEOGRAPHY TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {photography_team.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 9 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">LOGISTICS TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {logistic_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

        {/* team 9 */}
        <center>
          <div className="bottom-heading">
            <Link to="/team1/1" style={{ textDecoration: "none" }}>
              <span className="team1">INFRASTRUCTURE TEAM</span>
            </Link>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">
          {infra_heads.map(({ name, role, img, index }) => (
            <TeamProfile name={name} role={role} img={img} key={index} />
          ))}
        </Carousel>

      </div>

    </>
  );
}
