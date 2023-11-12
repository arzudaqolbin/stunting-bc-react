import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/form-kelurahan.css";
import BASE_URL from '../../base/apiConfig';

function TambahAkunPuskesmas() {

  const [puskesmasReq, setpuskesmasReq] = useState({
    nama: "",
    alamat: "",
    nomor_telepon: "",
    ketua: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpuskesmasReq({ ...puskesmasReq, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const puskesmasData = {
      nama: puskesmasReq.nama,
      alamat: puskesmasReq.alamat,
      nomor_telepon: puskesmasReq.nomor_telepon,
      ketua: puskesmasReq.ketua,
      username: puskesmasReq.username,
      password: puskesmasReq.password,
    };

    axios.post(`${BASE_URL}`/puskesmas``, puskesmasData)
      .then(response => {
        console.log(response.headers);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log(JSON.stringify(puskesmasReq, null, 2));
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Tambah Akun Puskesmas</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="nama_puskesmas">
            <span>Nama Puskesmas*</span>
            <input
              type="text"
              id="nama_puskesmas"
              name="nama"
              required
              value={puskesmasReq.nama}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="alamat">
            <span>Alamat*</span>
            <input
              type="text"
              id="alamat"
              name="alamat"
              required
              value={puskesmasReq.alamat}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon*</span>
            <input
              type="text"
              id="nomor_telepon"
              name="nomor_telepon"
              required
              value={puskesmasReq.nomor_telepon}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="ketua_puskesmas">
            <span>Ketua Puskesmas*</span>
            <input
              type="text"
              id="ketua_puskesmas"
              name="ketua"
              required
              value={puskesmasReq.ketua}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="username">
            <span>Username*</span>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={puskesmasReq.username}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password">
            <span>Password*</span>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={puskesmasReq.password}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="confirm_password">
            <span>Confirm Password*</span>
            <input type="password" id="confirm_password" name="confirm_password" required />
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default TambahAkunPuskesmas;
