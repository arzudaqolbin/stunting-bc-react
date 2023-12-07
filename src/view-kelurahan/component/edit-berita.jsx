import React from "react";
import "../css/form-kelurahan.css";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

function EditBerita({ idKelurahan, apiAuth, idBerita, token }) {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const [berita, setBerita] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    // gambar: "",
  });

  // const { judul, deskripsi, isi, gambar } = berita;
  const { tgl_berita, judul, deskripsi, isi } = berita;

  // const [gambarAwal, setGambarAwal] = useState(null);

  const [errors, setErrors] = useState({
    tgl_berita: "",
    judul: "",
    deskripsi: "",
    isi: "",
    // gambar: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validasi Nama tanggal
    if (!berita.tgl_berita) {
      newErrors.tgl_berita = "Tanggal berita tidak boleh kosong";
      isValid = false;
    } else {
      newErrors.tgl_berita = "";
    }

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

    // if (!berita.gambar) {
    //   isValid = false;
    //   newErrors.gambar = "Pilih gambar";
    // } else {
    //   newErrors.gambar = "";
    // }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    // Mendapatkan data berita dari server
    axios
      .get(`${BASE_URL}/beritas/${idBerita}`, apiAuth)
      .then((response) => {
        const dataBerita = response.data.berita;
        setBerita(dataBerita);
      })
      .catch((error) => {
        errorHandling(error);
      });

    // Mendapatkan gambar awal dari API
  }, [idBerita, apiAuth]);

  // useEffect(() => {
  //   // Mendapatkan data berita dari server
  //   axios
  //     .get(`${BASE_URL}/beritas/${idBerita}`, apiAuth)
  //     .then((response) => {
  //       const dataBerita = response.data.berita;
  //       // console.log(dataBerita);
  //       setBerita({
  //         tgl_berita: dataBerita.tgl_berita,
  //         judul: dataBerita.judul,
  //         deskripsi: dataBerita.deskripsi,
  //         isi: dataBerita.isi,
  //         gambar: dataBerita.gambar,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching berita:", error);
  //     });

  //   // Mendapatkan gambar awal dari API
  //   fetch(`${BASE_URL}/beritas/${idBerita}/gambar`, apiAuth)
  //     .then((response) => response.arrayBuffer())
  //     .then((data) => {
  //       const base64 = btoa(
  //         new Uint8Array(data).reduce(
  //           (data, byte) => data + String.fromCharCode(byte),
  //           ""
  //         )
  //       );
  //       setGambarAwal(`data:;base64,${base64}`);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching gambar awal:", error);
  //     });
  // }, [idBerita, apiAuth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const { name, value, files } = e.target;

    // if (name === "gambar") {
    //   setBerita({ ...berita, [name]: files[0] });
    // } else {
    setBerita({ ...berita, [name]: value });
    // }
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Mengedit berita",
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

    axios
      .put(`${BASE_URL}/beritas/${idBerita}`, berita, apiAuth)
      .then((response) => {
        // console.log("Berita berhasil diperbarui:", response.data);
        navigate('/kelurahan/berita');
      })
      .catch((error) => {
        setLoading(false);
        errorHandling(error);
      });

  };

  // const handleFileChange = (e) => {
  //   const { name, value } = e.target;
  //   const selectedFile = e.target.files[0];

  //   if (selectedFile) {
  //     // Assuming you want to display the selected file directly
  //     setBerita({ ...berita, [name]: selectedFile });
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setGambarAwal(reader.result);
  //     };

  //     reader.readAsDataURL(selectedFile);
  //   }
  // }

  return (
    <main className="container">
      <i className="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">FORM EDIT BERITA</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <div className="table-responsive">
          <form onSubmit={confirmAlert}>
            <label htmlFor="tgl_berita">
              <span>Tanggal*</span>
              <input
                type="date"
                id="tgl_berita"
                name="tgl_berita"
                required
                max={today}
                value={tgl_berita}
                onChange={handleChange}
              />
              <div className={`error`}>{errors.tgl_berita}</div>
            </label>

            <label htmlFor="judul">
              <span>Judul*</span>
              <input
                type="text"
                id="judul"
                name="judul"
                required
                value={judul}
                onChange={handleChange}
              />
              <div className={`error`}>{errors.judul}</div>
            </label>

            <label htmlFor="deskripsi">
              <span>Deskripsi Singkat*</span>
              <textarea
                id="deskripsi"
                name="deskripsi"
                required
                rows="5"
                value={deskripsi}
                onChange={handleChange}
              ></textarea>
              <div className={`error`}>{errors.deskripsi}</div>
            </label>

            <label htmlFor="isi">
              <span>Isi Berita*</span>
              <textarea
                id="isi"
                name="isi"
                required
                rows="35"
                value={isi}
                onChange={handleChange}
              ></textarea>
              <div className={`error`}>{errors.isi}</div>
            </label>

            {/* <label htmlFor="gambar">
              <span>Gambar Pendukung</span>
              {gambarAwal && (
                <img src={gambarAwal} alt="Gambar Awal" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              )}
              <input
                type="file"
                id="gambar"
                name="gambar"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className={`error`}>{errors.gambar}</div>
            </label> */}

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
      </div>
    </main>
  );
}

export default EditBerita;
