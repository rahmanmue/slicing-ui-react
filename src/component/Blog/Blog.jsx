import React from "react";
import img1 from "./../../asset/image/unsplash_k-_7Z5z5--Q.png";
import img2 from "./../../asset/image/unsplash_Vve7XkiUq_Y.png";
import img3 from "./../../asset/image/unsplash_YNMjGIPgD_c.png";
import { Card } from "../Card/Card";
import { Container } from "../../layout/Container";
export const Blog = () => {
  return (
    <section className="blog">
      <Container flex={"flex"} direction={"column"} align={"center"}>
        <h1 className="title">Ikuti Pengumuman Terbaru Kami</h1>
        <span className="desc">
          {" "}
          Jangan sampai ketinggalan pengumuman hingga berita terbaru kami{" "}
        </span>
      </Container>

      <Container flex={"flex"} justify={"space-between"} padding={70}>
        <Card
          btnTitle={"Pengumuman"}
          colorBtn={"red"}
          img={img1}
          titleCard={"Pemberhentian Air Mengalir Sementara Pada Daerah ..."}
        />
        <Card
          btnTitle={"Berita Terbaru"}
          colorBtn={"yellow-dark"}
          img={img2}
          titleCard={"PDAM Purwa Tirta Dharma memberikan bantuan ..."}
        />
        <Card
          btnTitle={"Pengumuman"}
          colorBtn={"red"}
          img={img3}
          titleCard={"Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ..."}
        />
      </Container>
    </section>
  );
};

export default Blog;
