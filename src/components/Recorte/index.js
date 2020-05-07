import React from "react";
import styled from "styled-components";
// import p2 from "../../assets/p2.png";

const Recorte = styled.div`
  border: 5px solid green;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.5;
  img {
    width: 100%;
  }
  &.active {
    opacity: 1;
  }
`;

export default function index(props) {
  return (
    <Recorte left={props.image.left} className="active">
      <img
        src={require("../../assets/" + props.image.name + ".png")}
        alt="ad"
      />
    </Recorte>
  );
}
