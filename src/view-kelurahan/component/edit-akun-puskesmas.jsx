import React, { useState, useEffect } from 'react';
import "../css/form-kelurahan.css";
import axios from 'axios';

function EditAkunPuskesmas({ idPuskesmas }) {

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    nomor_telepon: "",
    kepala: "",
    user_id: "",
    koordinat_id: "",
    username: "",
    password: "",
  });

  // Menggunakan useEffect untuk mengambil data dari API
  useEffect(() => {
    // Panggil API untuk mengambil data puskesmas
    axios.get(`http://127.0.0.1:8000/api/puskesmas/${idPuskesmas}`)
      .then((response) => {
        const data = response.data;
        // Mengisi state formData dengan data dari API
        setFormData({
          nama: data.nama,
          alamat: data.alamat,
          nomor_telepon: data.nomor_telepon,
          kepala: data.ketua,
          user_id: data.user_id
        });
        console.log(data)

        axios.get(`http://127.0.0.1:8000/api/user/${data.user_id}`)
          .then((userResponse) => {
            const userData = userResponse.data;
            setFormData((prevFormData) => ({
              ...prevFormData,
              username: userData.username,
              password: userData.password,
            }));
          })
          .catch((error) => {
            console.error("Error:", error);
          });

      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, [idPuskesmas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.put(`http://127.0.0.1:8000/api/puskesmas/${idPuskesmas}`, {
      nama: formData.nama,
      alamat: formData.alamat,
      nomor_telepon: formData.nomor_telepon,
      ketua: formData.kepala,
    })
      .then((response) => {
        console.log("Puskesmas updated:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios.put(`http://127.0.0.1:8000/api/user/${formData.user_id}`, {
      username: formData.username,
      password: formData.password,
    })
      .then((response) => {
        console.log("User updated:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT AKUN PUSKESMAS</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nama">
            <span>NAMA</span>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              value={formData.nama}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="alamat">
            <span>ALAMAT</span>
            <input
              type="text"
              id="alamat"
              name="alamat"
              required
              value={formData.alamat}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="nomor_telepon">
            <span>NOMOR TELEPON</span>
            <input
              type="text"
              id="nomor_telepon"
              name="nomor_telepon"
              required
              value={formData.nomor_telepon}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="kepala">
            <span>KEPALA</span>
            <input
              type="text"
              id="kepala"
              name="kepala"
              required
              value={formData.kepala}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="username">
            <span>USERNAME</span>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password">
            <span>PASSWORD</span>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default EditAkunPuskesmas;
