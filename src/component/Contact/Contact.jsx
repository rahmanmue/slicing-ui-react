import React from "react";
import { Container } from "../../layout/Container";
import { Button } from "../Button/Button";
import image from "../../asset/image/Ellipse 2.png";
import "./style.css";

export const Contact = () => {
  return (
    <section className="contact">
      <Container flex={"flex"} padding={170}>
        <Container flex={"flex"} direction={"column"}>
          <div className="serv-text">
            layanan berkualitas tinggi untuk masyarakat indonesia
          </div>
          <div style={{ margin: "32px 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
          <Container flex={"flex"}>
            <Button
              title={"Kontak Kami"}
              size={"lg-2"}
              color={"primary-1"}
              mr={20}
            />
            <Button title={"Konsultasi"} size={"lg-2"} color={"secondary"} />
          </Container>
        </Container>
        <div className="image-rounded">
          <img src={image} alt="" />
        </div>
      </Container>
    </section>
  );
};
