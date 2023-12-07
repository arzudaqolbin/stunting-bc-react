import React from "react";
import "../css/form-kelurahan.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const TambahBerita = ({ idKelurahan, apiAuth, token }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  // const tomorrow = new Date();
  // tomorrow.setDate(new Date().getDate() + 1);
  // const tomorrowString = tomorrow.toISOString().split('T')[0];

  const [berita, setBerita] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    gambar: "",
  });

  const { judul, deskripsi, isi, gambar, tgl_berita } = berita;

  const onInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setBerita({ ...berita, [name]: files[0] });
    } else {
      setBerita({ ...berita, [name]: value });
    }
  };

  const [errors, setErrors] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    gambar: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validasi Nama tanggal
    // if (!berita.tgl_berita) {
    //   newErrors.tgl_berita = "Tanggal berita tidak boleh kosong";
    //   isValid = false;
    // } else {
    //   newErrors.tgl_berita = "";
    // }

    // Validation for Username
    if (!berita.judul) {
      isValid = false;
      newErrors.judul = "Judul tidak boleh kosong";
    } else {
      newErrors.judul = "";
    }

    // Validation for Password
    if (!berita.deskripsi) {
      isValid = false;
      newErrors.deskripsi = "Beri deskripsi singkat";
    } else {
      newErrors.deskripsi = "";
    }

    // Validation for Password
    if (!berita.isi) {
      isValid = false;
      newErrors.isi = "Isi berita tidak boleh kosong";
    } else {
      newErrors.isi = "";
    }

    if (!berita.gambar) {
      isValid = false;
      newErrors.gambar = "Pilih gambar";
    } else {
      newErrors.gambar = "";
    }

    if (!berita.tgl_berita) {
      tgl_berita = today;
    }


    setErrors(newErrors);
    return isValid;
  };

  const showAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Menambahkan berita",
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
      const formData = new FormData();
      formData.append("tgl_berita", tgl_berita);
      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("isi", isi);
      formData.append("gambar", gambar); // Ini adalah file yang akan dikirim
      console.log(gambar);

      // console.log(berita.gambar);
      try {
        const response = await axios.post(`${BASE_URL}/beritas`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },
        });
        // console.log(response.data);
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
          navigate('/kelurahan/berita');
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
      <h2 className="custom-judul">Form Berita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form
          onSubmit={(e) => {
            showAlert(e);
          }}
        >
          <label htmlFor="tgl_berita">
            <span>Tanggal*</span>
            <input
              type="date"
              id="tgl_berita"
              name="tgl_berita"
              // required
              onChange={(e) => onInputChange(e)}
            // max={today}
            />
          </label>

          <label htmlFor="judul">
            <span>Judul*</span>
            <input
              type="text"
              id="judul"
              name="judul"
              // required
              onChange={(e) => onInputChange(e)}
            />
            <div className={`error`}>{errors.judul}</div>
          </label>

          <label htmlFor="deskripsi">
            <span>Deskripsi Singkat*</span>
            <textarea
              id="deskripsi"
              name="deskripsi"
              // required
              rows="5"
              onChange={(e) => onInputChange(e)}
            ></textarea>
            <div className={`error`}>{errors.deskripsi}</div>
          </label>

          <label htmlFor="isi">
            <span>Isi Berita*</span>
            <textarea
              id="isi"
              name="isi"
              // required
              rows="35"
              onChange={(e) => onInputChange(e)}
            ></textarea>
            <div className={`error`}>{errors.isi}</div>
          </label>

          <label htmlFor="gambar">
            <span>Gambar Pendukung</span>
            <input
              type="file"
              id="gambar"
              name="gambar"
              accept="image/*"
              onChange={(e) => onInputChange(e)}
            />
            <div className={`error`}>{errors.gambar}</div>
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
    </main >
  );
};

export default TambahBerita;
