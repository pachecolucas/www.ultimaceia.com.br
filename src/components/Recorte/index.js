import React from "react";
import styled from "styled-components";
import p1 from "../../assets/p1.png";
// import p2 from "../../assets/p2.png";

const Recorte = styled.img`
  top: 0;
  left: ${(props) => props.left};
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export default function index(props) {
  return <Recorte src={p1} alt="ad" left={props.image.left} />;
}
