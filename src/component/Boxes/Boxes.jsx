import React from "react";
import { Box } from "../Box/Box";
import icon1 from "../../asset/image/why-1.svg";
import icon2 from "../../asset/image/why-2.svg";
import icon3 from "../../asset/image/why-3.svg";

export const Boxes = () => {
  return (
    <section className="boxes">
      <Box
        title={"Kenapa Memilih Kami ?"}
        desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor`}
      />
      <Box title={"Profeisonal"} icon={icon1} bgColor={"primary-1"} />
      <Box title={"24H Non-Stop"} icon={icon2} bgColor={"primary-2"} />
      <Box title={"Full Support"} icon={icon3} bgColor={"primary-3"} />
    </section>
  );
};
