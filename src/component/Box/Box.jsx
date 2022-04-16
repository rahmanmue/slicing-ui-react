import React from "react";
import BoxStyled from "./Box.style";
import { Container } from "../../layout/Container";
import "./style.css";

export const Box = ({ title, icon, desc, bgColor }) => {
  return (
    <>
      {icon && title && bgColor ? (
        <BoxStyled width={310} bgColor={bgColor} align={"center"}>
          <div className="circle">
            <img src={icon} alt="icon" />
          </div>
          <span className="title-span">{title}</span>
        </BoxStyled>
      ) : (
        <BoxStyled width={512} bgColor={"white"}>
          <Container padding={70}>
            <h1 className="title">{title}</h1>
            <div className="desc">{desc}</div>
          </Container>
        </BoxStyled>
      )}
    </>
  );
};
