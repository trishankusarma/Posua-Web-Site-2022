import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./style.css";
import japi from "../.././assets/japi.png";
import team1 from "../.././assets/team1.png";
import Carousel from "react-elastic-carousel";
import TeamProfile from "../Team/team_profile";

import { webTeam_heads, webTeam_members } from "../../data/webTeam";
import {
  marketing_team_heads,
  marketing_team_members,
} from "../../data/marketing_team";

export default function Team1() {
  const [members, setMembers] = useState(null);

  const [heads, setHeads] = useState(null);

  const [title, setTitle] = useState("");

  const { id } = useParams();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    switch (id) {
      case "1":
        setHeads(webTeam_heads);
        setMembers(webTeam_members);
        setTitle("Web Team");
        break;

      case "2":
        setHeads(marketing_team_heads);
        setMembers(marketing_team_members);
        setTitle("Marketing Team");
        break;

      default:
        break;
    }

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="main">
        <div className="heading" style={{ height: "30vh" }}>
          <div className="heading-name">
            <img className="Japi" src={japi} alt="" />
            <span className="team">{title}</span>
            <img className="Japi" src={japi} alt="" />
          </div>

          <hr className="GalleryHeaderBorder" />
          {/* <div className="GalleryHeaderBorderIconSection">
            <img src={japi} className="SmallJapi" alt="japi-img"></img>
            <img src={japi} className="MidJapi" alt="japi-img"></img>
            <img src={japi} className="SmallJapi" alt="japi-img"></img>
          </div> */}
        </div>

        <div className="bottom-cards">
          <Carousel breakPoints={breakPoints} className="bottom-cards">
            {heads?.map(({ img, role, name }, index) => (
              <TeamProfile name={name} role={role} img={img} key={index} />
            ))}
          </Carousel>
        </div>

        {/* team 1 */}
        <center>
          <div className="bottom-heading">
            <a href="/team" style={{ textDecoration: "none" }}>
              <span className="team1">Members</span>
            </a>
          </div>
          <img src={team1} alt="" />
        </center>

        {/* bottom cards */}
        <div className="bottom-cards">
          <Carousel breakPoints={breakPoints} className="bottom-cards">
            {members?.map(({ img, role, name }, index) => (
              <TeamProfile name={name} role={role} img={img} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
