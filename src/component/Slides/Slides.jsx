import React from "react";
import "./style.css";
import logo from "../../asset/image/Logo PDAM(1) 4.png";
import { Container } from "../../layout/Container";

export const Slides = () => {
  return (
    <section>
      <Container flex={"flex"} padding={70}>
        <div className="slide">
          <img src={logo} alt="slides" />
          <Container flex={"flex"} mt={86}>
            <div className="point-active"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </Container>
        </div>
      </Container>
    </section>
  );
};
