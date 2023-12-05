import React, { useState, useEffect } from "react";
import "../css/edit-pw-posyandu.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditPwPosyandu({ idPosyandu, userId, apiAuth }) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password_baru: "",
    konfirmasi_password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password_baru:"",
    konfirmasi_password: "",
  });

  useEffect(() => {
    // Panggil API untuk mendapatkan data user yang sedang login
    axios
      .get(`${BASE_URL}/user/${userId}`, apiAuth) // Ganti dengan endpoint yang sesuai
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

  const confirmAlert = (e) => {
    e.preventDefault();
    if (validateForm()){
      Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Mengedit password akun",
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validation for Username
    if (!formData.username) {
      isValid = false;
      newErrors.username = "Username tidak boleh kosong";
    } else {
      newErrors.username = "";
    }

    // Validation for Password
    if (!formData.password_baru) {
      isValid = false;
      newErrors.password_baru = "Password tidak boleh kosong";
    } else {
      newErrors.password_baru = "";
    }

    // Validation for Confirm Password
    if (!formData.konfirmasi_password) {
      isValid = false;
      newErrors.konfirmasi_password = "Silakan konfirmasi password";
    } else if (formData.konfirmasi_password !== formData.password_baru) {
      isValid = false;
      newErrors.konfirmasi_password = "Password tidak cocok";
    } else {
      newErrors.konfirmasi_password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("isi form data = ",formData);
    // ... (tambahkan logika sesuai kebutuhan)
    axios
      .put(
        `${BASE_URL}/user/${userId}`,
        {
          username: formData.username,
          password: formData.password_baru,
        },
        apiAuth
      )
      .then((response) => {
        console.log("Password berhasil diubah:", response.data);
        showSuccessPostToast();
      })
      .catch((error) => {
        showFailedPostToast();
        console.error("Error:", error);
        // Tambahkan logika atau feedback sesuai kebutuhan
      });
  };

  const showSuccessPostToast = async () => {
    return new Promise((resolve) => {
      toast.success("Password berhasil diganti", {
        data: {
          title: "Success",
          text: "Password berhasil diganti",
        },
        onClose: async () => {
          // Menunggu 3 detik sebelum melakukan navigasi
          await new Promise((resolve) => setTimeout(resolve, 3000));
          navigate(`/posyandu/profile`);
          resolve();
        },
      });
    });
  };

  const showFailedPostToast = () => {
    toast.error("Gagal Mengganti Password", {
      data: {
        title: "Error toast",
        text: "This is an error message",
      },
    });
  };

  return (
    <main className="container">
      {/* <a href="">
        <img src="back.png" alt="Back" className="logo-back" />
      </a> */}

      <div className="container-fluid">
      <div className="table-responsive">
        <h2 className="custom-judul">EDIT PASSWORD POSYANDU</h2>

        <form onSubmit={confirmAlert}>
          <label htmlFor="username">
            <span>USERNAME</span>
            <input
              type="text"
              id="username"
              name="username"
              // required
              value={formData.username}
              readOnly // Membuat input tidak bisa diubah
            />
            <div className={`error`}>{errors.username}</div>
          </label>

          <label htmlFor="password_baru">
            <span>PASSWORD BARU</span>
            <input
              type="password"
              id="password_baru"
              name="password_baru"
              // required
              value={formData.password_baru}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.password_baru}</div>
          </label>

          <label htmlFor="konfirmasi_password">
            <span>KONFIRMASI PASSWORD</span>
            <input
              type="password"
              id="konfirmasi_password"
              name="konfirmasi_password"
              // required
              value={formData.konfirmasi_password}
              onChange={handleChange}
            />
            <div className={`error`}>{errors.konfirmasi_password}</div>
          </label>

          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default EditPwPosyandu;
