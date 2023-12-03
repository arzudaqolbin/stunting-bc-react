import React, { useState, useEffect } from "react";
import "../css/form-kelurahan.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../base/apiConfig";
import Swal from "sweetalert2";

function EditAkunPosyandu({ idKelurahan, apiAuth, idPosyandu }) {
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
    axios
      .get(`${BASE_URL}/puskesmas`, apiAuth)
      .then((response) => {
        // console.log(response.data);
        setPuskesmasList(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get(`${BASE_URL}/posyandu/${idPosyandu}`, apiAuth)
      .then((response) => {
        const data = response.data.data;
        setFormData({
          nama_posyandu: data.nama,
          nama_puskesmas: data.puskesmas_id,
          kepala: data.kepala,
          alamat: data.alamat,
          rw: data.rw,
          nomor_telepon: data.nomor_telepon,
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
  }, [idPosyandu]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const { alamat } = formData;

  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");

  useEffect(() => {
    setFormData((prevformData) => ({
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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validation for Nama Posyandu
    if (!formData.nama_posyandu) {
      isValid = false;
      newErrors.nama_posyandu = "Nama Posyandu harus diisi";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(formData.nama_posyandu)) {
      isValid = false;
      newErrors.nama_posyandu = "Nama Posyandu tidak valid";
    } else {
      newErrors.nama_posyandu = "";
    }

    // Validation for Nama Posyandu
    if (!formData.nama_puskesmas) {
      isValid = false;
      newErrors.nama_puskesmas = "Nama Puskesmas harus diisi";
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
    if (!formData.kepala) {
      isValid = false;
      newErrors.kepala = "Nama orang tua tidak boleh kosong";
    } else if (!/^[a-zA-Z\s`.'-]+$/.test(formData.kepala)) {
      newErrors.kepala = "Nama orang tua tidak valid";
      isValid = false;
    } else {
      newErrors.kepala = "";
    }

    // Validation for Nomor Telepon
    if (!formData.nomor_telepon) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor Telepon harus diisi";
    } else if (!/^[0-9]+$/.test(formData.nomor_telepon)) {
      newErrors.nomor_telepon = "Nomor telepon harus berisi angka";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.nomor_telepon)) {
      isValid = false;
      newErrors.nomor_telepon = "Nomor telepon harus berisi 10-15 angka";
    } else {
      newErrors.nomor_telepon = "";
    }

    // Validation for Username
    if (!formData.username) {
      isValid = false;
      newErrors.username = "Username tidak boleh kosong";
    } else {
      newErrors.username = "";
    }

    // Validation for Password
    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password tidak boleh kosong";
    } else {
      newErrors.password = "";
    }

    // Validation for Confirm Password
    if (!formData.confirm_password) {
      isValid = false;
      newErrors.confirm_password = "Silakan konfirmasi password";
    } else if (formData.confirm_password !== formData.password) {
      isValid = false;
      newErrors.confirm_password = "Password tidak cocok";
    } else {
      newErrors.confirm_password = "";
    }
    // alert(DOMPurify.sanitize(jalan));

    setErrors(newErrors);
    return isValid;
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Mengedit akun posyandu",
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
    console.log(formData);
    axios
      .put(
        `${BASE_URL}/posyandu/${idPosyandu}`,
        {
          nama: formData.nama_posyandu,
          puskesmas_id: formData.nama_puskesmas,
          alamat: formData.alamat,
          rw: formData.rw,
          kepala: formData.kepala,
          nomor_telepon: formData.nomor_telepon,
        },
        apiAuth
      )
      .then((response) => {
        console.log("Posyandu updated:", response.data);
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
          <form onSubmit={confirmAlert}>
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
              <div className={`error`}>{errors.pos}</div>
            </label>

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
              <span>Kepala Posyandu*</span>
              <input
                type="text"
                id="kepala"
                name="kepala"
                required
                value={formData.kepala}
                onChange={handleChange}
              />
              <div className={`error`}>{errors.kepala}</div>
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
              <span>Nomor Kepala</span>
              <input
                type="text"
                id="nomor_telepon"
                name="nomor_telepon"
                required
                value={formData.nomor_telepon}
                onChange={handleChange}
              />
              <div className={`error`}>{errors.nomor_telepon}</div>
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
              <div className={`error`}>{errors.username}</div>
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
              <div className={`error`}>{errors.password}</div>
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
              <div className={`error`}>{errors.confirm_password}</div>
            </label>
            <button type="submit" className="submit-button">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditAkunPosyandu;
