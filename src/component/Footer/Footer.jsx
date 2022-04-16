import React from "react";
import "./Footer.css";
import { Container } from "../../layout/Container";
import fb from "../../asset/image/Vector.svg";
import ig from "../../asset/image/Vector-1.svg";
import tw from "../../asset/image/Vector-2.svg";
import yt from "../../asset/image/Vector-3.svg";

import logo from "../../asset/image/logo pdam white 2.svg";
import map from "../../asset/image/map.svg";
import wa from "../../asset/image/wa.svg";
import email from "../../asset/image/email.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <Container flex={"flex"} padding={170}>
        <div className="company">
          <img src={logo} alt="" />
          <div className="company-info">
            PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang mampu
            memberikan kontribusi PAD pada kabupaten Grobogan
          </div>
          <div className="sosmed">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={ig} alt="" />
            <img src={yt} alt="" />
          </div>
        </div>

        <div className="navigasi">
          <h1>NAVIGASI</h1>
          <ul>
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">Tentang Kami</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Karir</a>
            </li>
            <li>
              <a href="">Galeri</a>
            </li>
          </ul>
        </div>

        <div className="kontaks">
          <h1>KONTAK</h1>
          <div className="kontak">
            <img src={map} alt="" />
            <span>
              Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi,
              Kabupaten Grobogan, Jawa Tengah 58111
            </span>
          </div>
          <div className="kontak">
            <img src={wa} alt="" />
            <span>+62 896 666 666</span>
          </div>
          <div className="kontak">
            <img src={email} alt="" />
            <span>hallo@purwatirtadharma.com</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
