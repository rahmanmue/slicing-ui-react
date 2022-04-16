import React from "react";
import "./style.css";
import { Button } from "../Button/Button";
import { Container } from "../../layout/Container";

export const Card = ({ btnTitle, colorBtn, img, titleCard }) => {
  return (
    <Container flex={"flex"} direction={"column"} align={"center"}>
      <Button size={"sm"} title={btnTitle} color={colorBtn} mt={36} />
      <div className="card">
        <img src={img} alt="" />
        <div className="title-card">{titleCard}</div>
        <Button
          size={"md-2"}
          title={"Lebih Lanjut"}
          color={"primary-border-1"}
        />
      </div>
    </Container>
  );
};
