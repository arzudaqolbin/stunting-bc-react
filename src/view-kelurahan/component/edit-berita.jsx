import React from "react";
import "../css/form-kelurahan.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";

function EditBerita({ idKelurahan, apiAuth, idBerita, token }) {
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

  const { judul, deskripsi, isi, gambar } = berita;

  const [gambarAwal, setGambarAwal] = useState(null);

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

    if (!berita.gambar) {
      isValid = false;
      newErrors.gambar = "Pilih gambar";
    } else {
      newErrors.gambar = "";
    }


    setErrors(newErrors);
    return isValid;
  };


  useEffect(() => {
    // Mendapatkan data berita dari server
    axios.get(`${BASE_URL}/beritas/${idBerita}`, apiAuth)
      .then(response => {
        const dataBerita = response.data.berita;
        // console.log(dataBerita);
        setBerita({
          tgl_berita: dataBerita.tgl_berita,
          judul: dataBerita.judul,
          deskripsi: dataBerita.deskripsi,
          isi: dataBerita.isi,
          gambar: dataBerita.gambar,
        });
      })
      .catch(error => {
        console.error("Error fetching berita:", error);
      });

    // Mendapatkan gambar awal dari API
    fetch(`${BASE_URL}/beritas/${idBerita}/gambar`, apiAuth)
      .then(response => response.arrayBuffer())
      .then(data => {
        const base64 = btoa(
          new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setGambarAwal(`data:;base64,${base64}`);
      })
      .catch(error => {
        console.error("Error fetching gambar awal:", error);
      });

  }, [idBerita, apiAuth]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setBerita({ ...berita, [name]: files[0] });
    } else {
      setBerita({ ...berita, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(berita);
    if (validateForm()) {
      const formData = new FormData();
      formData.append("tgl_berita", today);
      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("isi", isi);
      formData.append("gambar", gambar);
      console.log(formData);
      axios.put(`${BASE_URL}/beritas/${idBerita}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => {
          console.log("Berita berhasil diperbarui:", response.data);
        })
        .catch(error => {
          console.error("Error updating berita:", error);
        });
    }
  };

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Assuming you want to display the selected file directly
      setBerita({ ...berita, [name]: selectedFile });
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambarAwal(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }

  return (
    <main className="container">
      <i className="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">FORM EDIT BERITA</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <div className="table-responsive">
          <form onSubmit={handleSubmit}>
            <label htmlFor="tgl_berita">
              <span>Tanggal*</span>
              <input
                type="date"
                id="tgl_berita"
                name="tgl_berita"
                required
                max={today}
                value={berita.tgl_berita}
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
                value={berita.judul}
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
                value={berita.deskripsi}
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
                value={berita.isi}
                onChange={handleChange}
              ></textarea>
              <div className={`error`}>{errors.isi}</div>
            </label>

            <label htmlFor="gambar">
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

export default EditBerita;
