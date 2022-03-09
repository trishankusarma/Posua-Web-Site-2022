import React from "react";
import ArtistCard from "../../components/ArtistCard";
import Carousel from "../../components/Carousel";
import Hr from "../../assets/hr.svg";
import "./styles.css";
import Tezpuria from "../../assets/artist1.svg";
import PriyankaB from "../../assets/Priyanka.svg";

const Artist = () => {
  return (
    <div className="outer_div_artist_page">
      <div className="upcomming_artists">
        <ArtistCard img={Tezpuria} />
        <div className="artist_text">
          <h1>Upcoming Posua 2022</h1>
        </div>
        <ArtistCard img={PriyankaB} />
      </div>
      <img src={Hr} alt=" a line" style={{ marginLeft: "1%" }} />
      <div className="prev_artists">
        <div className="artist_text">
          <h1>Artists in previous years</h1>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Artist;
