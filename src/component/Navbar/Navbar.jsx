import React from "react";
import logo from "../../asset/image/logo-pdam.svg";
import searchIcon from "../../asset/image/bx_bx-search-alt.svg";
import { Button } from "../Button/Button";
import { Container } from "../../layout/Container";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <Container
        align={"center"}
        justify={"space-between"}
        flex={"flex"}
        padding={70}
      >
        <img src={logo} alt="logi" className="logo" />
        <div className="nav-right">
          <ul className="links">
            <li className="active">
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Tentang</a>
            </li>
            <li>
              <a href="#">Galeri</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <Button
            size={"sm-icon"}
            color={"primary"}
            icon={searchIcon}
            mr={18}
          />
          <Button size={"md-1"} color={"primary"} title={"Customer Service"} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
