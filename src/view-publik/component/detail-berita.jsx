import React from "react";
import berita from "../../aset/berita.png";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import { useParams } from "react-router-dom";
import { log } from "util";

const DetailBerita = () => {
  let { idBerita } = useParams();
  const [berita, setBerita] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
  });

  const { judul, isi, tgl_berita } = berita;
  const [gambar, setGambar] = useState(null);

  const tanggal = new Date(tgl_berita);
  const formattedDate = `${tanggal.getDate()}-${
    tanggal.getMonth() + 1
  }-${tanggal.getFullYear()}`;

  useEffect(() => {
    // Mendapatkan data berita dari server
    axios
      .get(`${BASE_URL}/beritas/${idBerita}`)
      .then((response) => {
        const dataBerita = response.data.berita;
        // console.log(dataBerita);
        setBerita({
          tgl_berita: dataBerita.tgl_berita,
          judul: dataBerita.judul,
          deskripsi: dataBerita.deskripsi,
          isi: dataBerita.isi,
          gambar: dataBerita.gambar,
        });
      })
      .catch((error) => {
        console.error("Error fetching berita:", error);
      });

    // Mendapatkan gambar awal dari API
    fetch(`${BASE_URL}/beritas/${idBerita}/gambar`)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const base64 = btoa(
          new Uint8Array(data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setGambar(`data:;base64,${base64}`);
      })
      .catch((error) => {
        console.error("Error fetching gambar awal:", error);
      });
  }, []);

  return (
    <div className="container mt-5 mb-3">
      <h6 className="my-2">
        <a href="#" className="text-dark">
          <i className="fas fa-arrow-left fa-3x"></i>
        </a>
      </h6>
      <div
        className="col-11"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <h1
          style={{
            fontWeight: 700,
            textAlign: "justify",
            marginBottom: "30px",
          }}
        >
          {judul}
        </h1>
        <hr className="my-2" />
        <h5 className="text-end">{formattedDate}</h5>
        <hr className="my-2" />
        <div className="container mt-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="gambar-berita"
              src={gambar}
              alt="Gambar Berita"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
        <div className="text-isiberita mt-4">
          <p style={{ textAlign: "justify" }}>{isi}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
