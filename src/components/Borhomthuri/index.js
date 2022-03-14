import React from "react";
import HexagonCard from "../../components/HexagonCard";
import "./styles.css";
import Card1 from "../../assets/Borhomthuri/2015.svg";
import Card2 from "../../assets/Borhomthuri/2016.svg";
import Card3 from "../../assets/Borhomthuri/2017.svg";
import Card4 from "../../assets/Borhomthuri/Center.svg";
import Card5 from "../../assets/Borhomthuri/2018.svg";
import Card6 from "../../assets/Borhomthuri/2019.svg";
import Card7 from "../../assets/Borhomthuri/2020.svg";
import japi from "../../assets/japi.png";

const index = () => {
  return (
    <div className="Borhomthuri pt-3 pb-md-5 pb-0">
      <h1 className="text-center mt-5">
        <img className="japi-animation" src={japi} alt="japi" /> BORHOMTHURI{" "}
        <img className="japi-animation" src={japi} alt="japi" />
      </h1>
      <p className="borhom-text">
        Borhomthuri is the annual souvenir of POSUA. It enfolds indispensable
        parts of Assamese Culture and also the emotions of students in the form
        of enthralling articles, poems, stories and sketches. Borhomthuri reflects
        the ardour of NITS Family towards POSUA and provides an opportunity for
        the literary skills of students to get revived.
      </p>
      <div className="Borhom-main">
        <div className="subsec1">
          <a
            href="https://drive.google.com/file/d/1ijJLJO2SNS4CX-SAZtFJSC-mKeg7gxMv/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card7}
              year={2020}
              name="Borhomthuri"
              key={2020}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/17sXVH1QLGPC4uB4OxDTJECIvQb5Lmlei/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card1}
              year={2015}
              name="Borhomthuri"
              key={2015}
            />
          </a>
        </div>
        <div className="subsec2">
          <a
            href="https://drive.google.com/file/d/1yGROu16Gu_IjEjDxznBZd5dob_Gf_ddl/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card6}
              year={2019}
              name="Borhomthuri"
              key={2019}
            />
          </a>
          <div className="bor-item-center">
            <HexagonCard bgImg={Card4} key="center" />
          </div>
          <a
            href="https://drive.google.com/file/d/1ajRjjvoH8hCjXx0j5hKPdAMoJ3CykjDF/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card2}
              year={2016}
              name="Borhomthuri"
              key={2016}
            />
          </a>
        </div>
        <div className="subsec3">
          <a
            href="https://drive.google.com/file/d/1cuNVBXH3Zpxm_pGASs0kKmzcv7KGILbS/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card5}
              year={2018}
              name="Borhomthuri"
              key={2018}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1j2WOPZXNL31CqiUylghfRh8jQObq2NDq/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard
              bgImg={Card3}
              year={2017}
              name="Borhomthuri"
              key={2017}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
