import styled from "styled-components";

const handleWidth = (size) => {
  switch (size) {
    case "sm-icon":
      return 42;
    // pengumuman
    case "sm":
      return 106;
    // customer service
    case "md-1":
      return 202;
    // lebih lanjut
    case "md-2":
      return 156;
    // Lebih Lengkap
    case "md-3":
      return 261;
    // lebih lengkap
    case "lg-1":
      return 261;
    // Kontak
    case "lg-2":
      return 390 - 30;
    default:
      return 100;
  }
};

const handleHeight = (size) => {
  switch (size) {
    case "sm-icon":
      return 42;
    case "sm":
      return 34;
    case "md-1":
      return 42;
    case "md-2":
      return 42;
    case "md-3":
      return 56;
    case "lg-1":
      return 71;
    case "lg-2":
      return 89;
    default:
      return 100;
  }
};

const handleFontSize = (size) => {
  switch (size) {
    // pengumuman
    case "sm":
      return 12;
    // customer service
    case "md-1":
      return 18;
    // lebih lanjut
    case "md-2":
      return 18;
    // Lebih Lenkap
    case "md-3":
      return 20;
    // Hubungi Kami
    case "lg-1":
      return 25;
    // Kontak
    case "lg-2":
      return 30;
    default:
      return 18;
  }
};

const handleColor = (color) => {
  switch (color) {
    case "red":
      return "color:var(--clr-white-1); background:var(--clr-red);";
    case "yellow-dark":
      return "color:var(--clr-white-1); background:var(--clr-yellow-dark);";
    case "primary":
      return "color:var(--clr-primary-1); background:var(--clr-white-1);";
    case "primary-1":
      return "color:var(--clr-white-1);; background:var(--clr-primary-1);";
    case "primary-border-1":
      return "color:var(--clr-primary-1); background:var(--clr-white-1); border:1px solid var(--clr-primary-1)";
    case "primary-border-3":
      return "color:var(--clr-primary-1); background:var(--clr-white-1); border:3px solid var(--clr-primary-1)";
    case "secondary":
      return "color:var(--clr-primary-1); background:background: var(--clr-secondary); border:3px solid var(--clr-primary-1)";
  }
};

const ButtonStyled = styled.button`
  margin-right: ${({ mr }) => mr || "0"}px;
  margin-top: ${({ mt }) => mt || "0"}px;
  box-sizing: border-box;
  cursor: pointer;
  width: ${({ size }) => handleWidth(size)}px;
  height: ${({ size }) => handleHeight(size)}px;
  font-family: var(--ff-primary);
  font-size: ${({ size }) => handleFontSize(size)}px;
  font-weight: 700;
  border-radius: 8px;
  ${({ color }) => handleColor(color)}
`;

export default ButtonStyled;
