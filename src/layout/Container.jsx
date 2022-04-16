import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  padding: 0px ${(props) => props.padding || " "}px;
  margin-top: ${(props) => props.mt || ""}px;
  box-sizing: border-box;
  display: ${(props) => props.flex || " "};
  flex-direction: ${(props) => props.direction || " "};
  align-items: ${(props) => props.align || " "};
  justify-content: ${(props) => props.justify || " "}; ;
`;

export const Container = ({
  children,
  flex,
  direction,
  align,
  justify,
  padding,
  mt,
}) => {
  return (
    <ContainerStyled
      flex={flex}
      align={align}
      justify={justify}
      padding={padding}
      direction={direction}
      mt={mt}
    >
      {children}
    </ContainerStyled>
  );
};
