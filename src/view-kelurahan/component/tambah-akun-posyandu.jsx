import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/form-kelurahan.css";
import BASE_URL from '../../base/apiConfig';
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

  const [errors, setErrors] = useState({
    nama_posyandu: "",
    nama_puskesmas: "", // Ini akan diisi dengan ID Puskesmas yang dipilih
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
  
    // Validation for Nama Posyandu
    if (!posyanduData.nama_posyandu) {
      isValid = false;
      newErrors.nama_posyandu = "Nama Posyandu harus diisi.";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(posyanduData.nama_posyandu)) {
      isValid = false;
      newErrors.nama_posyandu = "Nama Posyandu tidak valid.";
    } else {
      newErrors.nama_posyandu = "";
    }

    // Validation for Nama Posyandu
    if (!posyanduData.nama_puskesmas) {
      isValid = false;
      newErrors.nama_puskesmas = "Nama Puskesmas harus diisi.";
    } else {
      newErrors.nama_puskesmas = "";
    }
  
    // Validation for Alamat
    if (!posyanduData.alamat) {
      isValid = false;
      newErrors.alamat = "Alamat harus diisi.";
    } else {
      newErrors.alamat = "";
    }
  
    // Validation for Nomor Telepon
    if (!posyanduData.nomor_telepon) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus diisi.";
    } else if(!/^[0-9]+$/.test(posyanduData.nomor_telepon)) {
      newErrors.nomor_telepon = "Nomor telepon harus berisi angka";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(posyanduData.nomor_telepon)) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor telepon harus berisi 10-15 angka.";
    } else {
      newErrors.nomor_telepon = "";
    }
  
    // Validation for Username
    if (!posyanduData.username) {
      isValid = false;
      newErrors.username = "Username harus diisi.";
    } else {
      newErrors.username = "";
    }
  
    // Validation for Password
    if (!posyanduData.password) {
      isValid = false;
      newErrors.password = "Password harus diisi.";
    } else {
      newErrors.password = "";
    }
  
    // Validation for Confirm Password
    if (!posyanduData.confirm_password) {
      isValid = false;
      newErrors.confirm_password = "Silakan konfirmasi password";
    } else if (posyanduData.confirm_password !== posyanduData.password) {
      isValid = false;
      newErrors.confirm_password = "Password tidak cocok.";
    } else {
      newErrors.confirm_password = "";
    }
  
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      const posyanduDataToSubmit = {
        nama: posyanduData.nama_posyandu,
        alamat: posyanduData.alamat,
        nomor_telepon: posyanduData.nomor_telepon,
        puskesmas_id: posyanduData.nama_puskesmas, // ID Puskesmas yang dipilih
        username: posyanduData.username,
        password: posyanduData.password,
      };
  
      axios.post(`${BASE_URL}/posyandu`, posyanduDataToSubmit)
        .then(response => {
          console.log(response.data);
          // Reset form atau navigasi ke halaman lain jika diperlukan
        })
        .catch(error => {
          console.error('Error:', error);
        });
  
      console.log(JSON.stringify(posyanduDataToSubmit, null, 2));
    }
  };




  useEffect(() => {
    axios.get(`${BASE_URL}/puskesmas`)
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
              // required
              value={posyanduData.nama_posyandu}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.nama_posyandu}</div>
          </label>

          <label htmlFor="nama_puskesmas">
            <span>Nama Puskesmas*</span>
            <select
              id="nama_puskesmas"
              name="nama_puskesmas"
              // required
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
            <div className={`error`}>{errors.nama_puskesmas}</div>
          </label>

          <label htmlFor="alamat">
            <span>Alamat*</span>
            <input
              type="text"
              id="alamat"
              name="alamat"
              // required
              value={posyanduData.alamat}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.alamat}</div>
          </label>

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon*</span>
            <input
              type="text"
              id="nomor_telepon"
              name="nomor_telepon"
              // required
              value={posyanduData.nomor_telepon}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.nomor_telepon}</div>
          </label>

          <label htmlFor="username">
            <span>Username*</span>
            <input
              type="text"
              id="username"
              name="username"
              // required
              value={posyanduData.username}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.username}</div>
          </label>

          <label htmlFor="password">
            <span>Password*</span>
            <input
              type="password"
              id="password"
              name="password"
              // required
              value={posyanduData.password}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.password}</div>
          </label>

          <label htmlFor="confirm_password">
            <span>Confirm Password*</span>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              // required
              value={posyanduData.confirm_password}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.confirm_password}</div>
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default TambahAkunPosyandu;
