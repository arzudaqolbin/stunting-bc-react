import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import "../css/form-kelurahan.css";
// import BASE_URL from '../../base/apiConfig';

function TambahAkunPuskesmas() {

  const [puskesmasReq, setpuskesmasReq] = useState({
    nama: "",
    alamat: "",
    nomor_telepon: "",
    ketua: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nama: "",
    alamat: "",
    nomor_telepon: "",
    ketua: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpuskesmasReq({ ...puskesmasReq, [name]: value });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "jalan") {
      setJalan(value);
    } else if (name === "rt") {
      setRt(value);
    } else {
      setpuskesmasReq({ ...puskesmasReq, [name]: value });
    }
  };
  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
  
    // Validation for Nama Puskesmas
    if (!puskesmasReq.nama) {
      isValid = false;
      newErrors.nama = "Nama Puskesmas harus diisi.";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(puskesmasReq.nama)) {
      isValid = false;
      newErrors.nama = "Nama Puskesmas tidak valid.";
    } else {
      newErrors.nama = "";
    }
  
    // Validation for Alamat
    if (!puskesmasReq.alamat) {
      isValid = false;
      newErrors.alamat = "Alamat harus diisi.";
    } else {
      newErrors.alamat = "";
    }
  
    // Validation for Nomor Telepon
    if (!puskesmasReq.nomor_telepon) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus diisi.";
    } else if(!/^[0-9]+$/.test(puskesmasReq.nomor_telepon)) {
      newErrors.nomor_telepon = "Nomor telepon harus berisi angka";
      isValid = false;
    }else if(!/^\d{10,15}$/.test(puskesmasReq.nomor_telepon)) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus berisi 10-15 angka.";
    } else {
      newErrors.nomor_telepon = "";
    }
  
    // Validation for Ketua Puskesmas
    if (!puskesmasReq.ketua) {
      isValid = false;
      newErrors.ketua = "Ketua Puskesmas harus diisi.";
    } else if (!/^[a-zA-Z0-9]+$/.test(puskesmasReq.ketua)) {
      isValid = false;
      newErrors.ketua = "Ketua Puskesmas tidak valid.";
    } else {
      newErrors.ketua = "";
    }
  
    // Validation for Username
    if (!puskesmasReq.username) {
      isValid = false;
      newErrors.username = "Username harus diisi.";
    } else {
      newErrors.username = "";
    }
  
    // Validation for Password
    if (!puskesmasReq.password) {
      isValid = false;
      newErrors.password = "Password harus diisi.";
    } else {
      newErrors.password = "";
    }
  
    // Validation for Confirm Password
    if (!puskesmasReq.confirm_password) {
      isValid = false;
      newErrors.confirm_password = "Konfirmasi Password harus diisi.";
    } else if (puskesmasReq.confirm_password !== puskesmasReq.password) {
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
      const puskesmasData = {
          nama: puskesmasReq.nama,
          alamat: puskesmasReq.alamat,
          nomor_telepon: puskesmasReq.nomor_telepon,
          ketua: puskesmasReq.ketua,
          username: puskesmasReq.username,
          password: puskesmasReq.password,
        };
        axios.post(`${BASE_URL}/puskesmas`, puskesmasData)
          .then(response => {
          console.log(response.headers);
          setErrors({
            nama: "",
            alamat: "",
            nomor_telepon: "",
            ketua: "",
            username: "",
            password: "",
            confirm_password: "",
        });
        document.querySelector('.container-fluid').classList.add('success');
        })
        .catch(error => {
          console.error('Error:', error);
        });
        console.log(JSON.stringify(puskesmasReq, null, 2));
    }
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
              // required
              value={puskesmasReq.nama}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.nama}</div>
          </label>

          <label htmlFor="alamat">
            <span>Alamat*</span>
            
            <input
              type="text"
              id="alamat"
              name="alamat"
              // required
              value={puskesmasReq.alamat}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.alamat}</div>
          </label>
          {/* <div className="address-section">
            <label htmlFor="alamat">
              <span>Alamat</span>
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="alamat"
              name="alamat"
              value={alamat}
              onChange={(e) => onInputChange(e)}
              readOnly
            />

            <div className="address-details">
              <label htmlFor="jalan">
                <span>Jalan*</span>
                <input
                  type="text"
                  id="jalan"
                  name="jalan"
                  value={jalan}
                  onChange={(e) => onInputChange(e)}
                  // required
                />
                <div className={`error`}>{errors.jalan}</div>
              </label>

              <label htmlFor="rt">
                <span>RT*</span>
                <input
                  type="text"
                  id="rt"
                  name="rt"
                  value={rt}
                  onChange={(e) => onInputChange(e)}
                  // required
                  pattern="\d{2,}"
                  title="Awali angka satuan dengan 0, misal 01"
                  onKeyPress={(e) => {
                    if (e.key < "0" || e.key > "9") {
                      e.preventDefault();
                    }
                  }}
                />
                <div className={`error`}>{errors.rt}</div>
              </label>

              <label htmlFor="rw">
                <span>RW*</span>
                <input
                  type="text"
                  id="rw"
                  name="rw"
                  value={rw}
                  onChange={(e) => onInputChange(e)}
                  // required
                  pattern="\d{2,}"
                  title="Awali angka satuan dengan 0, misal 01"
                  onKeyPress={(e) => {
                    if (e.key < "0" || e.key > "9") {
                      e.preventDefault();
                    }
                  }}
                />
                <div className={`error`}>{errors.rw}</div>
              </label>
            </div>
          </div> */}

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon*</span>
            <input
              type="text"
              id="nomor_telepon"
              name="nomor_telepon"
              // required
              value={puskesmasReq.nomor_telepon}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.nomor_telepon}</div>
          </label>

          <label htmlFor="ketua_puskesmas">
            <span>Ketua Puskesmas*</span>
            <input
              type="text"
              id="ketua_puskesmas"
              name="ketua"
              // required
              value={puskesmasReq.ketua}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.ketua}</div>
          </label>

          <label htmlFor="username">
            <span>Username*</span>
            <input
              type="text"
              id="username"
              name="username"
              // required
              value={puskesmasReq.username}
              onChange={handleChange}
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
              value={puskesmasReq.password}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.password}</div>
          </label>

          <label htmlFor="confirm_password">
            <span> Konfirmasi Password*</span>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              // required
              onChange={handleChange}
            />
            <div className={`error`}>{errors.confirm_password}</div>
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default TambahAkunPuskesmas;
