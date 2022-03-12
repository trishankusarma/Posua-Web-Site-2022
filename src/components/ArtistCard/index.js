import React from "react";
import styled from "styled-components";
const ArtistCard = (props) => {
  return (
    <CardWrapper>
      <ArtistImg src={props.img} alt="artist" />
    </CardWrapper>
  );
};

export default ArtistCard;

const ArtistImg = styled.img`
  height: 400px;
  left: 12%;
  top: 4%;
`;

const CardWrapper = styled.div`
  /* cursor: url("../assets/swipe_left_right_full_white.png"), auto; */
  /* height: 100vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
