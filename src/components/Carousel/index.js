import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import ZG from "../../assets/ZG.svg";
import DS from "../../assets/artists card (1).svg";
import NA from "../../assets/artists card.svg";
import SS from "../../assets/artists card (2).svg";
import MR from "../../assets/artists card (3).svg";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import ArtistCard from "../ArtistCard";

export default function App() {
  const ArtistImg = [ZG, DS, NA, SS, MR];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ArtistImg.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <ArtistCard img={e} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
