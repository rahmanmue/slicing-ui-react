import styled from "styled-components";

const handleBgColor = (bgColor) => {
  switch (bgColor) {
    case "white":
      return "var(--clr-white-1)";
    case "primary-1":
      return "var(--clr-primary-1)";
    case "primary-2":
      return "var(--clr-primary-2)";
    case "primary-3":
      return "var(--clr-primary-3)";
  }
};

const BoxStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${({ width }) => width || "0"}px;

  align-items: ${({ align }) => align || "0"};

  background-color: ${({ bgColor }) => handleBgColor(bgColor)};
`;

export default BoxStyled;
