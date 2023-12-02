import React, { useState, useEffect } from 'react';
import "../css/form-kelurahan.css";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';

function EditAkunPuskesmas({ idKelurahan, apiAuth, idPuskesmas }) {

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    rw: "",
    nomor_telepon: "",
    kepala: "",
    user_id: "",
    koordinat_id: "",
    username: "",
    password: "",
    confirm_password: ""
  });

  // Menggunakan useEffect untuk mengambil data dari API
  useEffect(() => {
    // Panggil API untuk mengambil data puskesmas
    axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}`, apiAuth)
      .then((response) => {
        const data = response.data.data;
        // Mengisi state formData dengan data dari API
        setFormData({
          nama: data.nama,
          alamat: data.alamat,
          rw: data.rw,
          nomor_telepon: data.nomor_telepon,
          kepala: data.kepala,
          user_id: data.user_id
        });
        console.log(data)

        axios.get(`${BASE_URL}/user/${data.user_id}`, apiAuth)
          .then((userResponse) => {
            const userData = userResponse.data;
            setFormData((prevFormData) => ({
              ...prevFormData,
              username: userData.username
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
    axios.put(`${BASE_URL}/puskesmas/${idPuskesmas}`, {
      nama: formData.nama,
      alamat: formData.alamat,
      nomor_telepon: formData.nomor_telepon,
      kepala: formData.kepala,
      rw: formData.rw
    }, apiAuth)
      .then((response) => {
        console.log("Puskesmas updated:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios.put(`${BASE_URL}/user/${formData.user_id}`, {
      username: formData.username,
      password: formData.password,
      confirm_password: formData.confirm_password
    }, apiAuth)
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

        <div className="table-responsive">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nama">
              <span>Nama</span>
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
              <span>Alamat</span>
              <input
                type="text"
                id="alamat"
                name="alamat"
                required
                value={formData.alamat}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="kepala">
              <span>Kepala</span>
              <input
                type="text"
                id="kepala"
                name="kepala"
                required
                value={formData.kepala}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="nomor_telepon">
              <span>Nomor Telepon</span>
              <input
                type="text"
                id="nomor_telepon"
                name="nomor_telepon"
                required
                value={formData.nomor_telepon}
                onChange={handleChange}
              />
            </label>


            <label htmlFor="username">
              <span>username</span>
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
              <span>Password</span>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="confirm_password">
              <span>Confirm Password*</span>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="submit-button">Simpan</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditAkunPuskesmas;