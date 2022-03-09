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
  position: absolute;
  left: 12%;
  top: 4%;
`;

const CardWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;
