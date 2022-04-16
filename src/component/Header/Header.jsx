import React from "react";
import Navbar from "../Navbar/Navbar";
import hero from "../../asset/image/hero.png";
import { Container } from "../../layout/Container";
import phoneIcon from "../../asset/image/eva_phone-call-fill.svg";
import fb from "../../asset/image/Vector.svg";
import ig from "../../asset/image/Vector-1.svg";
import tw from "../../asset/image/Vector-2.svg";
import yt from "../../asset/image/Vector-3.svg";
import "./style.css";

import { Button } from "../Button/Button";

const heroImage = {
  backgroundImage: `url(${hero})`,
  height: "693px",
  backgroundSize: "cover",
};

export const Header = () => {
  return (
    <section style={heroImage}>
      <Navbar />
      <Container padding={70}>
        <div className="info">
          <div className="info-left">
            <h1>Menjadi Perusahaan Air Minum Modern</h1>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>

            <Button
              title={"Hubungi Kami"}
              color={"primary"}
              size={"lg-1"}
              icon={phoneIcon}
              mt={22}
            />
          </div>

          <div className="info-right">
            <span>Social Media</span>
            <div className="icons">
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={tw} alt="" />
              <img src={yt} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
