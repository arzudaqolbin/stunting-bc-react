import React, { useState, useEffect } from "react";
import "../css/form-kelurahan.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";

function EditPwKelurahan() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password_baru: "",
    konfirmasi_password: "",
  });

  useEffect(() => {
    // Panggil API untuk mendapatkan data user yang sedang login
    axios
      .get(`${BASE_URL}/user/1`) // Ganti dengan endpoint yang sesuai
      .then((response) => {
        const userData = response.data;
        // Mengisi state formData dengan data user yang sedang login
        setFormData({
          username: userData.username,
          password_baru: "",
          konfirmasi_password: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // useEffect hanya dijalankan sekali setelah render pertama

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi bahwa password baru dan konfirmasi password sama
    if (formData.password_baru !== formData.konfirmasi_password) {
      console.error("Password baru dan konfirmasi password harus sama");
      return;
    }

    console.log(formData);
    // ... (tambahkan logika sesuai kebutuhan)
    axios
      .put(`${BASE_URL}/user/1`, {
        username: formData.username,
        password: formData.password_baru,
      })
      .then((response) => {
        console.log("Password berhasil diubah:", response.data);
        navigate("/kelurahan/profile");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Tambahkan logika atau feedback sesuai kebutuhan
      });
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT PASSWORD KELURAHAN</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <span>USERNAME</span>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              readOnly // Membuat input tidak bisa diubah
            />
          </label>

          <label htmlFor="password_baru">
            <span>PASSWORD BARU</span>
            <input
              type="password"
              id="password_baru"
              name="password_baru"
              required
              value={formData.password_baru}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="konfirmasi_password">
            <span>KONFIRMASI PASSWORD</span>
            <input
              type="password"
              id="konfirmasi_password"
              name="konfirmasi_password"
              required
              value={formData.konfirmasi_password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditPwKelurahan;
