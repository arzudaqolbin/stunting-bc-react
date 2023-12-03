import React from "react";
import "../css/beranda.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import JudulTop from "../component/JudulTop";
import DetailBerita from "../component/detail-berita";
import { useParams } from "react-router-dom";

const DetailBeritaUmum = () => {
  let { idBerita } = useParams();
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#E4F3EF" }}
    >
      <JudulTop />
      <Navbar />
      <DetailBerita idBerita={idBerita} />
      <Footer />
    </div>
  );
};

export default DetailBeritaUmum;
