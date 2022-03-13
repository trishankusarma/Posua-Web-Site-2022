import { useState } from "react";
import Gallery2021 from "./galleryComponents/Gallery2021";
import Gallery2019 from "./galleryComponents/Gallery2019";
import Gallery2018 from "./galleryComponents/Gallery2018";
import Gallery2017 from "./galleryComponents/Gallery2017";
import Gallery2016 from "./galleryComponents/Gallery2016";
import Gallery2015 from "./galleryComponents/Gallery2015";
import Gallery2014 from "./galleryComponents/Gallery2014";
import Gallery2013 from "./galleryComponents/Gallery2013";
import Gallery2012 from "./galleryComponents/Gallery2012";
import "../Gallery.css";
import borderImage from "../../../assets/GalleryImages/Group22.png"
// import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const year = [2021, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

  const customStyle = {
    display: "flex",
  }

  return (
    <div className="container1">
      <div className="bloc-tabs">
        <h1 className="ContentHeader">Glimpses of:</h1>
        <div className="buttonTabs-row-1" style={customStyle}>


          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            2021
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





        </div>
        <div className="buttonTabs-row-2" style={customStyle}>

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

          <button
            className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(8)}
          >
            2013
          </button>

          <button
            className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(9)}
          >
            2012
          </button>
        </div>
      </div>

      <div className="content-tabs">

        <div
          className={toggleState === 1 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader">Glimpses of {year[0]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2021 />
        </div>

        <div
          className={toggleState === 2 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[1]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2019 />
        </div>

        <div
          className={toggleState === 3 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[2]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2018 />
        </div>

        <div
          className={toggleState === 4 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[3]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2017 />
        </div>

        <div
          className={toggleState === 5 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[4]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2016 />
        </div>

        <div
          className={toggleState === 6 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[5]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2015 />
        </div>

        <div
          className={toggleState === 7 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[6]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2014 />
        </div>

        <div
          className={toggleState === 8 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[7]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2013 />
        </div>

        <div
          className={toggleState === 9 ? "content1  active-content1" : "content1"}
        >
          <h2 className="imageHeader" >Glimpses of {year[8]}</h2>
          <img className="borderImage" src={borderImage} alt="" ></img>
          <Gallery2012 />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
