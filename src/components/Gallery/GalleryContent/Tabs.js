import { useState } from "react";
import Gallery2022 from "./galleryComponents/Gallery2022";
import Gallery2019 from "./galleryComponents/Gallery2019";
import Gallery2018 from "./galleryComponents/Gallery2018";
import Gallery2017 from "./galleryComponents/Gallery2017";
import Gallery2016 from "./galleryComponents/Gallery2016";
import Gallery2015 from "./galleryComponents/Gallery2015";
import Gallery2014 from "./galleryComponents/Gallery2014";
import "../style.css";
import borderImage from "../../../assets/GalleryImages/Group22.png"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const year = [2022,2019,2018,2017,2016,2015,2014];

  return (
    <div className="container1">
      <div className="bloc-tabs">
      <h1 className="ContentHeader">Glimpses of:</h1>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          2022
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          2019
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          2018
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          2017
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          2016
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          2015
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
          2014
        </button>
      </div>

      <div className="content-tabs">
        
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader">Glimpses of {year[0]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2022/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[1]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2019/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[2]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2018/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[3]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2017/>
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[4]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2016/>
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[5]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2015/>
        </div>

        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <h2 className="imageHeader" >Glimpses of {year[6]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2014/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
