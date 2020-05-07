import React from "react";
import styled from "styled-components";
import "./index.scss";
import bg from "../../assets/bg.jpg";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import Recorte from "../Recorte";

const Quadro = styled.div`
  background: no-repeat url(${(props) => props.src}) 50% / 100%;
  border: 0px solid red;
  position: relative;
  img:first-child {
    vertical-align: top;
    width: 100%; /* max width */
    opacity: 0; /* make it transparent */
  }
`;

const bartolomeu = { file: "p1.png", left: "20%", right: 0 };

export default function index() {
  return (
    <Quadro src={bg}>
      <img src={bg} alt="bg" />
      <Recorte image={bartolomeu} />
      <P2 />
    </Quadro>
  );
}

function P1() {
  return <img className="p1" src={p1} alt="p1" />;
}
function P2() {
  return <img className="p2" src={p2} alt="p2" />;
}
