import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/form-kelurahan.css";
import { useParams } from 'react-router-dom';

function TambahAkunPosyandu() {
  const { idPuskesmas } = useParams();

  const [puskesmasList, setPuskesmasList] = useState([]);
  // const [selectedPuskesmas, setSelectedPuskesmas] = useState('');

  const [posyanduData, setPosyanduData] = useState({
    nama_posyandu: "",
    nama_puskesmas: idPuskesmas || "", // Ini akan diisi dengan ID Puskesmas yang dipilih
    alamat: "",
    nomor_telepon: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPosyanduData({ ...posyanduData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posyanduDataToSubmit = {
      nama: posyanduData.nama_posyandu,
      alamat: posyanduData.alamat,
      nomor_telepon: posyanduData.nomor_telepon,
      puskesmas_id: posyanduData.nama_puskesmas, // ID Puskesmas yang dipilih
      username: posyanduData.username,
      password: posyanduData.password,
    };

    axios.post("http://127.0.0.1:8000/api/posyandu", posyanduDataToSubmit)
      .then(response => {
        console.log(response.data);
        // Reset form atau navigasi ke halaman lain jika diperlukan
      })
      .catch(error => {
        console.error('Error:', error);
      });

    console.log(JSON.stringify(posyanduDataToSubmit, null, 2));
  };




  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/puskesmas")
      .then(response => {
        setPuskesmasList(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching puskesmas:', error);
      });
  }, []);

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Tambah Akun Posyandu</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="nama_posyandu">
            <span>Nama Posyandu*</span>
            <input
              type="text"
              id="nama_posyandu"
              name="nama_posyandu"
              required
              value={posyanduData.nama_posyandu}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="nama_puskesmas">
            <span>Nama Puskesmas*</span>
            <select
              id="nama_puskesmas"
              name="nama_puskesmas"
              required
              value={posyanduData.nama_puskesmas}
              onChange={handleInputChange}
            >
              <option value="">Pilih Puskesmas</option>
              {puskesmasList.map((puskesmas) => (
                <option key={puskesmas.id} value={puskesmas.id}>
                  {puskesmas.nama}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="alamat">
            <span>Alamat*</span>
            <input
              type="text"
              id="alamat"
              name="alamat"
              required
              value={posyanduData.alamat}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon*</span>
            <input
              type="text"
              id="nomor_telepon"
              name="nomor_telepon"
              required
              value={posyanduData.nomor_telepon}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="username">
            <span>Username*</span>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={posyanduData.username}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="password">
            <span>Password*</span>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={posyanduData.password}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="confirm_password">
            <span>Confirm Password*</span>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
              value={posyanduData.confirm_password}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default TambahAkunPosyandu;
