import React from "react";
import styled from "styled-components";
import "./index.scss";
import Fundo from "../Fundo";
import Recorte from "../Recorte";

const Quadro = styled.div`
  position: relative;
`;

const bartolomeu = { name: "p1", left: "20%", right: 0 };
const tiagomenor = { name: "p2", left: 0, right: 0 };

export default function index() {
  return (
    <Quadro>
      <Fundo />
      <Recorte image={bartolomeu} />
      <Recorte image={tiagomenor} />
    </Quadro>
  );
}
