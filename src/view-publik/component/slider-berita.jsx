import React from "react";
import berita from "../../aset/berita.png";
import logokelurahan from "../../aset/logokelurahan.png";
import "../css/slider-berita.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";

const SliderBerita = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [gambar, setGambar] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BASE_URL}/beritas`);
        setBeritaList(response.data); // Atur data berita ke state
        response.data.forEach(async (item) => {
          fetch(`${BASE_URL}/beritas/${item.id}/gambar`)
            .then((response) => response.arrayBuffer())
            .then((data) => {
              const base64 = btoa(
                new Uint8Array(data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              );
              setGambar((prevGambar) => ({
                ...prevGambar,
                [item.id]: `data:;base64,${base64}`,
              }));
            })
            .catch((error) => {
              console.error("Error fetching gambar awal:", error);
            });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Mengisi dengan template berita jika kurang dari 6 berita
  let additionalBerita = [];
  if (beritaList.length < 3) {
    const count = 3 - beritaList.length;
    for (let i = 0; i < count; i++) {
      additionalBerita.push({
        id: `template-${i}`,
        gambar: berita, // gunakan gambar template
        judul: "Judul Berita",
        deskripsi: "Deskripsi singkat berita",
      });
    }
  }

  // Menggabungkan berita yang ada dengan template
  const totalBerita = [...beritaList, ...additionalBerita];

  // Membagi berita menjadi kelompok 3 untuk setiap slide
  const chunks = [];
  for (let i = 0; i < totalBerita.length; i += 3) {
    chunks.push(totalBerita.slice(i, i + 3));
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">Berita Terkini</h2>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunks.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="cards-wrapper d-flex justify-content-around">
                {slide.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className="card"
                    style={{ width: "400px", height: "350px" }}
                  >
                    <img
                      src={gambar[item.id]}
                      className="card-img-top center-image"
                      alt="Gagal Memuat Gambar"
                      style={{ height: "60%", width: "100%" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.judul}</h5>
                      <p className="card-text">{item.deskripsi}</p>
                      <a href="#" className="btn btn-primary">
                        Baca berita
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="carousel-control-prev"
          role="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div
          className="carousel-control-next"
          role="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </div>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <a className="text-berita" style={{ textDecoration: "none" }}>
            Berita Selengkapnya&gt;&gt;
            <br />
            <br />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderBerita;
