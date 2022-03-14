import React from "react";
import "./styles.css";

const index = (props) => {
  return (
    <div
      className="hex-item"
      style={{
        background: `url(${props.bgImg}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="hex-details">
        <h1>{props.name}</h1>
        <h2>{props.year}</h2>
      </div>
    </div>
  );
};

index.defaultProp = {
  year: "",
  bgImg: "",
};

export default index;
