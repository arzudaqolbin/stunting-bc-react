import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL, { errorHandling } from '../../base/apiConfig';
import '../css/form-kelurahan.css';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const TambahJadwal = ({ idKelurahan, apiAuth }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [jadwal, setJadwal] = useState({
    tanggal: '',
    waktu: '',
    judul: '',
    deskripsi: '',
  });

  const { tanggal, waktu, judul, deskripsi } = jadwal;

  const [errors, setErrors] = useState({
    tanggal: '',
    waktu: '',
    judul: '',
    deskripsi: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setJadwal({ ...jadwal, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validasi Nama tanggal
    if (!jadwal.tanggal) {
      newErrors.tanggal = "Tanggal jadwal tidak boleh kosong";
      isValid = false;
    } else {
      newErrors.tanggal = "";
    }

    // Validation for Username
    if (!jadwal.waktu) {
      isValid = false;
      newErrors.waktu = "Judul tidak boleh kosong";
    } else {
      newErrors.waktu = "";
    }

    // Validation for Username
    if (!jadwal.judul) {
      isValid = false;
      newErrors.judul = "Judul tidak boleh kosong";
    } else {
      newErrors.judul = "";
    }

    // Validation for Password
    if (!jadwal.deskripsi) {
      isValid = false;
      newErrors.deskripsi = "Beri deskripsi singkat";
    } else {
      newErrors.deskripsi = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const showAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mengedit kader",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        onSubmit(e);
      }
    });

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log(jadwal)
      try {
        const response = await axios.post(`${BASE_URL}/jadwals`, jadwal, apiAuth);
        showSuccessPostToast()
      } catch (error) {
        showFailedPostToast()
        setLoading(false);
        errorHandling(error);
      }
    }
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
          navigate('/kelurahan/jadwal');
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
      <a href="">
        <img src="back.png" alt="Back" className="logo-back" />
      </a>
      <h2 className="custom-judul">Form Tambah Jadwal Kegiatan</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form onSubmit={showAlert}>
          <label htmlFor="tanggal">
            <span>Tanggal*</span>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={tanggal}
              onChange={onInputChange}
              required
            />
            <div className={`error`}>{errors.tanggal}</div>
          </label>

          <label htmlFor="waktu">
            <span>Waktu*</span>
            <input
              type="time"
              id="waktu"
              name="waktu"
              value={waktu}
              onChange={onInputChange}
              required
            />
            <div className={`error`}>{errors.waktu}</div>
          </label>

          <label htmlFor="judul">
            <span>Judul Kegiatan*</span>
            <input
              type="text"
              id="judul"
              name="judul"
              value={judul}
              onChange={onInputChange}
              required
              rows="2"
            />
            <div className={`error`}>{errors.judul}</div>
          </label>

          <label htmlFor="deskripsi">
            <span>Deskripsi Kegiatan*</span>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={deskripsi}
              onChange={onInputChange}
              required
              rows="4"
            ></textarea>
            <div className={`error`}>{errors.deskripsi}</div>
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
};

export default TambahJadwal;
