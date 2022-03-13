import React from "react";

import "./style.css";

const teamCard = ({ type, img, name, role, phoneNo, email }) => {
  const alligned_class = ["left-card", "right-card"];

  return (
    <div className="cards">
      <div className={alligned_class[type]}>
        <div className="content">
          {type !== 1 ? <img src={img} alt="" /> : null}

          <div className="text">
            <div style={{ paddingBottom: "0.1em" }}>
              <span className="name">{name}</span>
            </div>
            <div style={{ paddingBottom: "0.1em" }}>
              <span className="role">{role}</span>
            </div>
            <div style={{ paddingBottom: "0.1em" }}>
              <span className={!phoneNo ? "contactNo" : "contact"}>
                Contact: {phoneNo}
              </span>
            </div>
            <div>
              <span className="email">Email: {email}</span>
            </div>
          </div>

          {type === 1 ? <img src={img} alt="" /> : null}
        </div>
      </div>
    </div>
  );
};

export default teamCard;
