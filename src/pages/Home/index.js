import React from "react";
import About from "../../components/Home/About";
import Invitation from "../../components/Home/Invitation";
// import Tags from '../../components/Home/Tags'
import Cover from "../../components/shared/Cover";
import Sponsors from "../../components/shared/Sponsors";
import Timer from "../../components/shared/Timer";
import "./style.css";
import Borhomthuri from "../../components/Borhomthuri";

const HomePage = () => {
  return (
    <>
      <Cover />
      <About />
      <Invitation />
      <Borhomthuri />
      <Sponsors />
      {/* <Tags /> */}
      <Timer />
    </>
  );
};

export default HomePage;
