import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import ZG from "../../assets/ZG.svg";
import SS from "../../assets/SimantaS.svg";


import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import ArtistCard from "../ArtistCard";

export default function App() {

const ArtistImg = [ZG,SS,ZG,SS,ZG,SS,ZG,SS,ZG,SS,ZG,SS,];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      {ArtistImg.map((e)=>{
        return<>
        <SwiperSlide>
          <ArtistCard img={e} />
        </SwiperSlide>
        </>
      })}
      </Swiper>
    </>
  );
}
