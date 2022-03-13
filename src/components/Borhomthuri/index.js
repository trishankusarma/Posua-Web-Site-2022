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

const index = () => {
  return (
    <div className="Borhomthuri">
      <div className="Borhom-main">
        <div className="subsec1">
          <a
            href="https://drive.google.com/file/d/1ijJLJO2SNS4CX-SAZtFJSC-mKeg7gxMv/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card7} year={2020} name="Borhomthuri" />
          </a>
          <a
            href="https://drive.google.com/file/d/17sXVH1QLGPC4uB4OxDTJECIvQb5Lmlei/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card1} year={2015} name="Borhomthuri" />
          </a>
        </div>
        <div className="subsec2">
          <a
            href="https://drive.google.com/file/d/1yGROu16Gu_IjEjDxznBZd5dob_Gf_ddl/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card6} year={2019} name="Borhomthuri" />
          </a>
          <div className="bor-item-center">
            <HexagonCard bgImg={Card4} />
          </div>
          <a
            href="https://drive.google.com/file/d/1ajRjjvoH8hCjXx0j5hKPdAMoJ3CykjDF/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card2} year={2016} name="Borhomthuri" />
          </a>
        </div>
        <div className="subsec3">
          <a
            href="https://drive.google.com/file/d/1cuNVBXH3Zpxm_pGASs0kKmzcv7KGILbS/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card5} year={2018} name="Borhomthuri" />
          </a>
          <a
            href="https://drive.google.com/file/d/1j2WOPZXNL31CqiUylghfRh8jQObq2NDq/view?usp=sharing"
            className="bor-item"
          >
            <HexagonCard bgImg={Card3} year={2017} name="Borhomthuri" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
