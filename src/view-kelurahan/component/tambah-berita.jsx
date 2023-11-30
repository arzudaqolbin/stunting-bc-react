import React from "react";
import "../css/form-kelurahan.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";

const TambahBerita = ({ idKelurahan, apiAuth }) => {
  let navigate = useNavigate();

  const [berita, setBerita] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    gambar: "",
  });

  console.log(berita);

  const { tgl_berita, judul, deskripsi, isi, gambar } = berita;
  // const { judul, deskripsi, isi, gambar } = berita;

  const onInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setBerita({ ...berita, [name]: files[0] });
    } else {
      setBerita({ ...berita, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tgl_berita", tgl_berita);
    formData.append("judul", berita.judul);
    formData.append("deskripsi", berita.deskripsi);
    formData.append("isi", berita.isi);
    formData.append("gambar", berita.gambar); // Ini adalah file yang akan dikirim

    try {
      // await axios.post(`${BASE_URL}/beritas`, formData, apiAuth);
      await axios.post(`http://127.0.0.1:8000/api/beritas`, formData, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IktFTFVSQUhBTiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoiYmlkY2lua2VsIiwiaW5zdGFuc2kiOiJLZWx1cmFoYW4gQmlkYXJhIENpbmEiLCJpbnN0YW5zaV9pZCI6MSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTcwMTE3ODMyMiwiZXhwIjoxNzAxMTgxOTIyLCJuYmYiOjE3MDExNzgzMjIsImp0aSI6InZyejN6WDNydnhLZnhHZWsifQ.ygA0k0vOk4svZddafCXP8BXsoiqBND-tAg5mq4ZLbxw",
          "Content-Type": "multipart/form-data",
        },
      });
      //   navigate("/"); // Redirect ke halaman lain setelah sukses
    } catch (error) {
      if (error.response) {
        console.error(
          "Kesalahan dalam permintaan ke server:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Tidak ada respon dari server:", error.request);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Berita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          {/* <label htmlFor="tgl_berita">
            <span>Tanggal*</span>
            <input
              type="date"
              id="tgl_berita"
              name="tgl_berita"
              required
              onChange={(e) => onInputChange(e)}
            />
          </label> */}

          <label htmlFor="judul">
            <span>Judul*</span>
            <input
              type="text"
              id="judul"
              name="judul"
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>

          <label htmlFor="deskripsi">
            <span>Deskripsi Singkat*</span>
            <textarea
              id="deskripsi"
              name="deskripsi"
              required
              rows="5"
              onChange={(e) => onInputChange(e)}
            ></textarea>
          </label>

          <label htmlFor="isi">
            <span>Isi Berita*</span>
            <textarea
              id="isi"
              name="isi"
              required
              rows="35"
              onChange={(e) => onInputChange(e)}
            ></textarea>
          </label>

          <label htmlFor="gambar">
            <span>Gambar Pendukung</span>
            <input
              type="file"
              id="gambar"
              name="gambar"
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
};

export default TambahBerita;
