import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import "../css/form-kelurahan.css";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
// import BASE_URL from '../../base/apiConfig';

function TambahAkunPuskesmas({ idKelurahan, apiAuth }) {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [puskesmasReq, setpuskesmasReq] = useState({
    nama: "",
    alamat: "",
    rw: "",
    kepala: "",
    nomor_telepon: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    nama: "",
    alamat: "",
    rt: "",
    rw: "",
    nomor_telepon: "",
    kepala: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const { rw, alamat } = puskesmasReq;

  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");

  useEffect(() => {
    setpuskesmasReq((prevpuskesmasReq) => ({
      ...puskesmasReq,
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
      setpuskesmasReq({ ...puskesmasReq, [name]: value });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpuskesmasReq({ ...puskesmasReq, [name]: value });
  };

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
    } else if (!/^[0-9]+$/.test(puskesmasReq.nomor_telepon)) {
      newErrors.nomor_telepon = "Nomor telepon harus berisi angka";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(puskesmasReq.nomor_telepon)) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus berisi 10-15 angka.";
    } else {
      newErrors.nomor_telepon = "";
    }

    // Validation for kepala Puskesmas
    if (!puskesmasReq.kepala) {
      isValid = false;
      newErrors.kepala = "Kepala Puskesmas harus diisi.";
    } else {
      newErrors.kepala = "";
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

    // Validation for Username
    if (!puskesmasReq.username) {
      isValid = false;
      newErrors.username = "Username tidak boleh kosong";
    } else {
      newErrors.username = "";
    }

    // Validation for Password
    if (!puskesmasReq.password) {
      isValid = false;
      newErrors.password = "Password tidak boleh kosong";
    } else {
      newErrors.password = "";
    }

    // Validation for Confirm Password
    if (!puskesmasReq.confirm_password) {
      isValid = false;
      newErrors.confirm_password = "Silakan konfirmasi password";
    } else if (puskesmasReq.confirm_password !== puskesmasReq.password) {
      isValid = false;
      newErrors.confirm_password = "Password tidak cocok.";
    } else {
      newErrors.confirm_password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Menambahkan akun puskesmas",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, yakin!",
        cancelButtonText: "Kembali",
      }).then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          handleSubmit(e);
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const puskesmasData = {
      nama: puskesmasReq.nama,
      alamat: puskesmasReq.alamat,
      rw: 9,
      nomor_telepon: puskesmasReq.nomor_telepon,
      kepala: puskesmasReq.kepala,
      username: puskesmasReq.username,
      password: puskesmasReq.password,
      confirm_password: puskesmasReq.confirm_password,
      koordinat_id: 1,
    };

    axios
      .post(`${BASE_URL}/puskesmas`, puskesmasData, apiAuth)
      .then((response) => {
        showSuccessPostToast()
      })
      .catch((error) => {
        showFailedPostToast()
        setLoading(false);
        errorHandling(error);
      });
  };

  const showSuccessPostToast = async () => {
    return new Promise((resolve) => {
      toast.success("Data berhasil disimpan", {
        data: {
          title: "Success",
          text: "Data berhasil disimpan",
        },
        onClose: async () => {
          // Menunggu 3 detik sebelum melakukan navigasi
          await new Promise(resolve => setTimeout(resolve, 3000));

          // Mengakhiri janji saat Toast ditutup
          navigate('/kelurahan/daftar-puskesmas');
          resolve();
        },
      });
    });
  };

  const showFailedPostToast = () => {
    toast.error("Gagal Menyimpan Data", {
      data: {
        title: "Error toast",
        text: "This is an error message",
      },
    });
  }

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Tambah Akun Puskesmas</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form onSubmit={confirmAlert}>
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

          {/* <label htmlFor="alamat">
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
          </label> */}
          <label htmlFor="alamat">
            <span>Alamat</span>
            <input
              type={"text"}
              className="form-control"
              placeholder="alamat"
              name="alamat"
              value={alamat}
              onChange={(e) => onInputChange(e)}
              readOnly
            />
          </label>

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
                onKeyPress={(e) => {
                  if (e.key === ",") {
                    e.preventDefault();
                  }
                }}
              />
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
                title="Awali angka satuan dengan angka 0, misal 01"
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
                title="Awali angka satuan dengan angka 0, misal 01"
                onKeyPress={(e) => {
                  if (e.key < "0" || e.key > "9") {
                    e.preventDefault();
                  }
                }}
              />
              <div className={`error`}>{errors.rw}</div>
            </label>
          </div>

          <label htmlFor="longitude">
            <span>Longitude*</span>
            <input
              type="text"
              id="longitude"
              name="longitude"
              // required
              value={puskesmasReq.longitude}
              onChange={handleChange}
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
              value={puskesmasReq.latitude}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.latitude}</div>
          </label>

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

          <label htmlFor="kepala_puskesmas">
            <span>Kepala Puskesmas*</span>
            <input
              type="text"
              id="kepala_puskesmas"
              name="kepala"
              // required
              value={puskesmasReq.kepala}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.kepala}</div>
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
            <span>Confirm Password*</span>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              // required
              value={puskesmasReq.confirm_password}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.confirm_password}</div>
          </label>
          {loading ? (
            <div className="text-center">
              <ClipLoader loading={loading} size={20} />
            </div>
          ) : (
            <button type="submit" className="submit-button">
              Simpan
            </button>)}
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}

export default TambahAkunPuskesmas;
