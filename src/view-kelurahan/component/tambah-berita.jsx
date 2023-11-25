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

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBerita({ ...berita, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tgl_berita", tgl_berita);
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    formData.append("isi", isi);
    formData.append("gambar", gambar); // Ini adalah file yang akan dikirim

    try {
      await axios.post(`${BASE_URL}/beritas`, formData, apiAuth);
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
          <label htmlFor="tgl_berita">
            <span>Tanggal*</span>
            <input
              type="date"
              id="tgl_berita"
              name="tgl_berita"
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>

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
