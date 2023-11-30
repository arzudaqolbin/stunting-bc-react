import React from "react";
import "../css/form-kelurahan.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";

function EditBerita({idKelurahan, apiAuth, idBerita}) {
  const today = new Date().toISOString().split('T')[0];
  // const tomorrow = new Date();
  // tomorrow.setDate(new Date().getDate() + 1);
  // const tomorrowString = tomorrow.toISOString().split('T')[0];

  const [berita, setBerita] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    gambar: "",
  });

  const [errors, setErrors] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    gambar: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
  
    // Validasi Nama tanggal
    if (!berita.tgl_berita) {
      newErrors.tgl_berita = "Tanggal berita tidak boleh kosong";
      isValid = false;
    } else {
      newErrors.tgl_berita = "";
    }
  
    // Validation for Username
    if (!berita.judul) {
      isValid = false;
      newErrors.judul = "Judul tidak boleh kosong";
    } else {
      newErrors.judul = "";
    }
  
    // Validation for Password
    if (!berita.deskripsi) {
      isValid = false;
      newErrors.deskripsi = "Beri deskripsi singkat";
    } else {
      newErrors.deskripsi = "";
    }
    
    // Validation for Password
    if (!berita.isi) {
      isValid = false;
      newErrors.isi= "Isi berita tidak boleh kosong";
    } else {
      newErrors.isi = "";
    }

    if (!berita.gambar) {
      isValid = false;
      newErrors.gambar= "Pilih gambar";
    } else {
      newErrors.gambar = "";
    }
    
  
    setErrors(newErrors);
    return isValid;
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">FORM EDIT BERITA</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <div className="table-responsive">
        <form action="" method="post">
          <label htmlFor="tanggal">
            <span>Tanggal*</span>
            <input type="date" id="tanggal" name="tanggal" required  max={today}/>
            <div className={`error`}>{errors.tgl_berita}</div>
          </label>

          <label htmlFor="judul">
            <span>Judul*</span>
            <input type="text" id="judul" name="judul" required />
            <div className={`error`}>{errors.judul}</div>
          </label>

          <label htmlFor="deskripsi_singkat">
            <span>Deskripsi Singkat*</span>
            <textarea id="deskripsi_singkat" name="deskripsi_singkat" required rows="5"></textarea>
            <div className={`error`}>{errors.deskripsi}</div>
          </label>

          <label htmlFor="isi_berita">
            <span>Isi Berita*</span>
            <textarea id="isi_berita" name="isi_berita" required rows="35"></textarea>
            <div className={`error`}>{errors.isi}</div>
          </label>

          <label htmlFor="gambar">
            <span>Gambar Pendukung</span>
            <input type="file" id="gambar" name="gambar" />
            <div className={`error`}>{errors.gambar}</div>
          </label>
        </form>
        </div>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default EditBerita;
