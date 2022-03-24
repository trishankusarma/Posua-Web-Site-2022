import React from "react";
import "./style.css";
import japi from "../../../assets/japi.png";
import gplusLogo from "../../../assets/gplus_logo.png";
import cropzo from "../../../assets/Cropzo.png";
import amaira from "../../../assets/amaira.jpeg"
import pantaloon from "../../../assets/pantaloon.jpg"
import tls from "../../../assets/tls.jpg"
import teaoclock from "../../../assets/teaoclock.png"
import { useLocation } from "react-router-dom";

export default function Sponsers() {
  const location = useLocation();
  return (
    <>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> CO POWERED BY{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={pantaloon} alt="logo" />
        </div>
      </div>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> ASSOCIATE SPONSOR{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={cropzo} alt="logo" />
        </div>
      </div>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> IN ASSOCIATION WITH{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={gplusLogo} alt="logo" />
        </div>
      </div>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> BEVERAGES SPONSOR AND YOUTH PARTNER{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={tls} alt="logo" />
        </div>
      </div>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> FOOD TRUCK PARTNER{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={amaira} alt="logo" />
        </div>
      </div>
      <div className={"sponsers pt-5"}>
        <h1
          className={
            "text-center " + (location.pathname === "/sponsors" ? "pt-5" : "")
          }
        >
          <img src={japi} className="japi-animation" alt="japi" /> CAFE PARTNER{" "}
          <img src={japi} className="japi-animation" alt="japi" />
        </h1>
        <div className="sponser-img">
          <img src={teaoclock} alt="logo" />
        </div>
      </div>
    </>
  );
}
