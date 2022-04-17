import React from "react";
import { Container } from "../../layout/Container";
import quote from "../../asset/image/quote.svg";
import image from "../../asset/image/Rectangle 51.png";
import { Button } from "../Button/Button";
import "./style.css";

export const About = () => {
  return (
    <section className="about">
      <Container flex={"flex"} direction={"column"} padding={170}>
        <div>
          <img src={quote} alt="quote" style={{ marginRight: "5px" }} />
          <img src={quote} alt="quote" />
        </div>
        <div className="quote-text">
          Mari Kenali Kami <br />
          dan Perjalanan Kami
        </div>

        <Container flex={"flex"} justify={"space-between"} mt={36}>
          <div className="text">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore “.
          </div>
          <div className="text-image">
            <img src={image} alt="" />
            <div className="name">Ir.H.Ady Setiawan.SH</div>
            <span className="job">President of PDAM Purwa Tirta Dharma</span>
          </div>
        </Container>

        <Container flex={"flex"} justify={"center"} mt={80}>
          <Button
            title={"Lebih Lengkap"}
            size={"md-3"}
            color={"primary-border-3"}
            mt={80}
          />
        </Container>
      </Container>
    </section>
  );
};
