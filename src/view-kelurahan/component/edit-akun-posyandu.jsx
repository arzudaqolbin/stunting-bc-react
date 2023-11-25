import React, { useState, useEffect } from 'react';
import "../css/form-kelurahan.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../base/apiConfig';


function EditAkunPosyandu({idKelurahan, apiAuth, idPosyandu}) {

  const [formData, setFormData] = useState({
    nama_posyandu: "",
    nama_puskesmas: "",
    alamat: "",
    rw: "",
    kepala: "",
    nomor_telepon: "",
    username: "",
    password: "",
    confirm_password: "",
    user_id: "",
  });
  const navigate = useNavigate();
  const [puskesmasList, setPuskesmasList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/puskesmas`)
      .then((response) => {
        // console.log(response.data);
        setPuskesmasList(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


    axios.get(`${BASE_URL}/posyandu/${idPosyandu}`)
      .then((response) => {
        const data = response.data.data;
        setFormData({
          nama_posyandu: data.nama,
          nama_puskesmas: data.puskesmas_id,
          kepala: data.kepala,
          alamat: data.alamat,
          rw: data.rw,
          nomor_telepon: data.nomor_telepon,
          user_id: data.user_id
        });
        console.log(data);

        axios.get(`${BASE_URL}/user/${data.user_id}`)
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

  }, [idPosyandu]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.put(`${BASE_URL}/posyandu/${idPosyandu}`, {
      nama: formData.nama_posyandu,
      puskesmas_id: formData.nama_puskesmas,
      alamat: formData.alamat,
      rw: formData.rw,
      kepala: formData.kepala,
      nomor_telepon: formData.nomor_telepon
    })
      .then((response) => {
        console.log("Posyandu updated:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios.put(`${BASE_URL}/user/${formData.user_id}`, {
      username: formData.username,
      password: formData.password,
      confirm_password: formData.confirm_password
    })
      .then((response) => {
        console.log("User updated:", response.data);
        navigate(`/kelurahan/detail-posyandu/${idPosyandu}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(formData);
  };


  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left text-2x"></i>

      <div className="container-fluid">
      
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT AKUN POSYANDU</h2>
        
        <div className="table-responsive">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nama_posyandu">
            <span>Nama Puskesmas</span>
            <input
              type="text"
              id="nama_posyandu"
              name="nama_posyandu"
              required
              value={formData.nama_posyandu}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="nama_puskesmas">
            <span>Nama Puskesmas*</span>
            <select
              id="nama_puskesmas"
              name="nama_puskesmas"
              required
              value={formData.nama_puskesmas}
              onChange={handleChange}
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
            <span>Kepala Posyandu*</span>
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
            <span>Nomor Kepala</span>
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
            <span>Username</span>
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
              type="password"
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

export default EditAkunPosyandu;
