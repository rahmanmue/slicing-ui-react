import React from "react";
import ButtonStyled from "./Button.style";
import "./style.css";

export const Button = ({ title, size, color, icon, mr, mt }) => {
  return (
    <ButtonStyled size={size} color={color} mr={mr} mt={mt}>
      {icon && title ? (
        <div className="flex center">
          <img src={icon} className="mr-icon" />
          <span>{title}</span>
        </div>
      ) : title ? (
        <span>{title}</span>
      ) : icon ? (
        <img src={icon} />
      ) : (
        ""
      )}
    </ButtonStyled>
  );
};
