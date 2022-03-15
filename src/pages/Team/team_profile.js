import React from "react";
import "./style.css";

const team_profile = ({ name, role, img }, key) => {
  return (
    <div className="outer-frame">
      <center>
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="frame-content">
          <span className="frame-name">
            {name}
            <br />
            <span className="frame-role">{role}</span>
          </span>
        </div>
      </center>
    </div>
  );
};

team_profile.defaultProps = {
  name: "name",
  role: "role",
  img: "",
};
export default team_profile;
