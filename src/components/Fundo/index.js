import React from "react";
import styled from "styled-components";
import "./index.scss";
import bg from "../../assets/bg.jpg";

const Quadro = styled.div`
  background: no-repeat url(${(props) => props.src}) 50% / 100%;
  opacity: 0.5;
  img.bg {
    vertical-align: top;
    width: 100%; /* max width */
    opacity: 0; /* make it transparent */
  }
`;

export default function index() {
  return (
    <Quadro src={bg} className="">
      <img className="bg" src={bg} alt="bg" />
    </Quadro>
  );
}
