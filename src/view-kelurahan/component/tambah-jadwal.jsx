import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import '../css/form-kelurahan.css';

const TambahJadwal = ({ idKelurahan, apiAuth }) => {
  const [jadwal, setJadwal] = useState({
    tanggal: '',
    waktu: '',
    judul: '',
    deskripsi: '',
  });

  const { tanggal, waktu, judul, deskripsi } = jadwal;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setJadwal({ ...jadwal, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(jadwal)
    try {
      const response = await axios.post(`${BASE_URL}/jadwals`, jadwal, apiAuth);
      // console.log(response.data);
      // navi
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error submitting data:', error);
    }
  };

  return (
    <main className="container">
      <a href="">
        <img src="back.png" alt="Back" className="logo-back" />
      </a>
      <h2 className="custom-judul">Form Tambah Jadwal Kegiatan</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <label htmlFor="tanggal">
            <span>Tanggal*</span>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={tanggal}
              onChange={onInputChange}
              required
            />
          </label>

          <label htmlFor="waktu">
            <span>Waktu*</span>
            <input
              type="time"
              id="waktu"
              name="waktu"
              value={waktu}
              onChange={onInputChange}
              required
            />
          </label>

          <label htmlFor="judul">
            <span>Judul Kegiatan*</span>
            <input
              type="text"
              id="judul"
              name="judul"
              value={judul}
              onChange={onInputChange}
              required
              rows="2"
            />
          </label>

          <label htmlFor="deskripsi">
            <span>Deskripsi Kegiatan*</span>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              onChange={onInputChange}
              required
              rows="4"
            ></textarea>
          </label>

          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
};

export default TambahJadwal;
