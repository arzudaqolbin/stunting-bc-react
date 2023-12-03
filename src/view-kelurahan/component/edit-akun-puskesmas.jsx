import React, { useState, useEffect } from "react";
import "../css/form-kelurahan.css";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import Swal from "sweetalert2";

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

  const { alamat } = formData;

  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      alamat: `${jalan ? jalan : ""}${jalan && (rt || rw) ? ", " : ""}${
        rt ? `RT ${rt}` : ""
      }${rw && rt ? ", " : ""}${rw ? `RW ${rw}` : ""}`,
    }));
  }, [jalan, rw, rt]);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "jalan") {
      setJalan(value);
    } else if (name === "rt") {
      setRt(value);
    } else if (name === "rw") {
      setRw(value);
      // Update nilai pada bagian Alamat
      setFormData((prevFormData) => ({
        ...prevFormData,
        alamat: `${jalan ? jalan : ""}${jalan && (rt || value) ? ", " : ""}${
          rt ? `RT ${rt}` : ""
        }${value && rt ? ", " : ""}${value ? `RW ${value}` : ""}`,
      }));
    }
  };

  // Menggunakan useEffect untuk mengambil data dari API
  useEffect(() => {
    // Panggil API untuk mengambil data puskesmas
    axios
      .get(`${BASE_URL}/puskesmas/${idPuskesmas}`, apiAuth)
      .then((response) => {
        const data = response.data.data;
        // Mengisi state formData dengan data dari API
        setFormData({
          nama: data.nama,
          alamat: data.alamat,
          rw: data.rw,
          nomor_telepon: data.nomor_telepon,
          kepala: data.kepala,
          user_id: data.user_id,
        });

        const parts = data.alamat.split(", ");
        setJalan(parts[0] || "");
        setRt(parts[1] ? parts[1].replace("RT ", "") : "");
        setRw(parts[2] ? parts[2].replace("RW ", "") : "");

        console.log(data);

        axios
          .get(`${BASE_URL}/user/${data.user_id}`, apiAuth)
          .then((userResponse) => {
            const userData = userResponse.data;
            setFormData((prevFormData) => ({
              ...prevFormData,
              username: userData.username,
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validation for Nama Puskesmas
    if (!formData.nama) {
      isValid = false;
      newErrors.nama = "Nama Puskesmas harus diisi.";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(formData.nama)) {
      isValid = false;
      newErrors.nama = "Nama Puskesmas tidak valid.";
    } else {
      newErrors.nama = "";
    }

    // Validation for Alamat
    if (!formData.alamat) {
      isValid = false;
      newErrors.alamat = "Alamat harus diisi.";
    } else {
      newErrors.alamat = "";
    }

    // Validation for Nomor Telepon
    if (!formData.nomor_telepon) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus diisi.";
    } else if (!/^[0-9]+$/.test(formData.nomor_telepon)) {
      newErrors.nomor_telepon = "Nomor telepon harus berisi angka";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.nomor_telepon)) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus berisi 10-15 angka.";
    } else {
      newErrors.nomor_telepon = "";
    }

    // Validation for kepala Puskesmas
    if (!formData.kepala) {
      isValid = false;
      newErrors.kepala = "Kepala Puskesmas harus diisi.";
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.kepala)) {
      isValid = false;
      newErrors.kepala = "kepala Puskesmas tidak valid.";
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
    if (!formData.username) {
      isValid = false;
      newErrors.username = "Username tidak boleh kosong";
    } else {
      newErrors.username = "";
    }

    // Validation for Password
    // if (!formData.password) {
    //   isValid = false;
    //   newErrors.password = "Password tidak boleh kosong";
    // } else {
    //   newErrors.password = "";
    // }

    // Validation for Confirm Password
    if (formData.confirm_password !== formData.password) {
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
        text: "Mengedit akun puskesmas",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, yakin!",
        cancelButtonText: "Kembali",
      }).then((result) => {
        if (result.isConfirmed) {
          handleSubmit(e);
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      axios
        .put(
          `${BASE_URL}/puskesmas/${idPuskesmas}`,
          {
            nama: formData.nama,
            alamat: formData.alamat,
            nomor_telepon: formData.nomor_telepon,
            kepala: formData.kepala,
            rw: formData.rw,
          },
          apiAuth
        )
        .then((response) => {
          console.log("Puskesmas updated:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .put(
          `${BASE_URL}/user/${formData.user_id}`,
          {
            username: formData.username,
            password: formData.password,
            confirm_password: formData.confirm_password,
          },
          apiAuth
        )
        .then((response) => {
          console.log("User updated:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log(formData);
    }
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
          <form onSubmit={confirmAlert}>
            <label htmlFor="nama">
              <span>Nama</span>
              <input
                type="text"
                id="nama"
                name="nama"
                // required
                value={formData.nama}
                onChange={handleChange}
              />
              <div className={`error`}>{errors.nama}</div>
            </label>

            {/* <label htmlFor="alamat">
              <span>Alamat</span>
              <input
                type="text"
                id="alamat"
                name="alamat"
                required
                value={formData.alamat}
                onChange={handleChange}
              />
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

            <label htmlFor="kepala">
              <span>Kepala</span>
              <input
                type="text"
                id="kepala"
                name="kepala"
                // required
                value={formData.kepala}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="longitude">
              <span>Longitude*</span>
              <input
                type="text"
                id="longitude"
                name="longitude"
                // required
                // value={posyanduData.longitude}
                // onChange={handleInputChange}
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
                // value={posyanduData.latitude}
                // onChange={handleInputChange}
              />
              <div className={`error`}>{errors.latitude}</div>
            </label>

            <label htmlFor="nomor_telepon">
              <span>Nomor Telepon</span>
              <input
                type="text"
                id="nomor_telepon"
                name="nomor_telepon"
                // required
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
                // required
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
            <button type="submit" className="submit-button">
              Simpan
            </button>
            <p>input password jika ingin membuat password baru</p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditAkunPuskesmas;
