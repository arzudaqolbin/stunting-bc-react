import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/form-kelurahan.css";
import BASE_URL from '../../base/apiConfig';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
// import DOMPurify from 'dompurify';

function TambahAkunPosyandu({ idKelurahan, apiAuth }) {
  const { idPuskesmas } = useParams();

  const [puskesmasList, setPuskesmasList] = useState([]);
  // const [selectedPuskesmas, setSelectedPuskesmas] = useState('');
  const token = localStorage.getItem('access_token');

  const [posyanduData, setPosyanduData] = useState({
    nama_posyandu: "",
    nama_puskesmas: idPuskesmas || "", // Ini akan diisi dengan ID Puskesmas yang dipilih
    alamat: "",
    rt: "",
    rw: "",
    kepala: "",
    nomor_telepon: "",
    username: "",
    password: "",
    confirm_password: "",
    koordinat_id: "1"
  });

  const [errors, setErrors] = useState({
    nama_posyandu: "",
    nama_puskesmas: "", // Ini akan diisi dengan ID Puskesmas yang dipilih
    alamat: "",
    rt: "",
    rw: "",
    kepala: "",
    nomor_telepon: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const {
    rw,
    alamat,
  } = posyanduData;

  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");

  useEffect(() => {
    setPosyanduData((prevPosyanduData) => ({
      ...posyanduData,
      alamat: `${jalan ? jalan : ""}${jalan && (rt || rw) ? ", " : ""}${rt ? `RT ${rt}` : ""
        }${rw && rt ? ", " : ""}${rw ? `RW ${rw}` : ""}`,
    }));
  }, [jalan, rw, rt]);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "jalan") {
      setJalan(value);
    } else if (name === "rt") {
      setRt(value);
    } else {
      setPosyanduData({ ...posyanduData, [name]: value });
    }
  };

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

    // Validasi RT dan RW
    if (!jalan) {
      isValid = false;
      newErrors.jalan = "Jalan tidak boleh kosong";
    } else {
      newErrors.jalan = "";
    }

    if (!rt) {
      isValid = false;
      newErrors.rt = "RT tidak boleh kosong";
    } else {
      newErrors.rt = "";
    }

    if (!rw) {
      isValid = false;
      newErrors.rw = "RW tidak boleh kosong";
    } else {
      newErrors.rw = "";
    }

    // Validasi Nama Orang Tua
    if (!posyanduData.kepala) {
      isValid = false;
      newErrors.kepala = "Nama orang tua tidak boleh kosong";
    } else if (!/^[a-zA-Z\s`.'-]+$/.test(posyanduData.kepala)) {
      newErrors.kepala = "Nama orang tua tidak valid";
      isValid = false;
    } else {
      newErrors.kepala = "";
    }

    // Validation for Nomor Telepon
    if (!posyanduData.nomor_telepon) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus diisi.";
    } else if (!/^[0-9]+$/.test(posyanduData.nomor_telepon)) {
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
      newErrors.username = "Username tidak boleh kosong";
    } else {
      newErrors.username = "";
    }

    // Validation for Password
    if (!posyanduData.password) {
      isValid = false;
      newErrors.password = "Password tidak boleh kosong";
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
    // alert(DOMPurify.sanitize(jalan));

    setErrors(newErrors);
    return isValid;
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    if (validateForm()){
      Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Menambahkan akun posyandu",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, yakin!",
        cancelButtonText: "Kembali"
      }).then((result) => {
        if (result.isConfirmed) {
          handleSubmit(e)
        }
      });
    }
  }

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

    axios.post(`${BASE_URL}/posyandu`, posyanduDataToSubmit)
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
    axios.get(`${BASE_URL}/puskesmas`, apiAuth)
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
        <form onSubmit={confirmAlert}>
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

          {/* <label htmlFor="alamat">
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
          </label> */}
          <label htmlFor="alamat">
            <span>Alamat</span>
            <input
              type={"text"}
              className="form-control"
              placeholder="Alamat"
              name="alamat"
              value={alamat}
              onChange={(e) => onInputChange(e)}
              readOnly
            />
          </label>


          <div className="address-section">

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
                  pattern="0\d{1,}"
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
                  pattern="0\d{1,}"
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
          </div>

          <label htmlFor="kepala">
            <span>Kepala Posyandu*</span>
            <input
              type="text"
              id="kepala"
              name="kepala"
              // required
              value={posyanduData.kepala}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="longitude">
            <span>Longitude*</span>
            <input
              type="text"
              id="longitude"
              name="longitude"
              // required
              value={posyanduData.longitude}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.longitude}</div>
          </label>

          <label htmlFor="latitude">
            <span>Latitude*</span>
            <input
              type="text"
              id="latitude"
              name="latitude"
              // required
              value={posyanduData.latitude}
              onChange={handleInputChange}
            />
            <div className={`error`}>{errors.latitude}</div>
          </label>

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon Kepala*</span>
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
