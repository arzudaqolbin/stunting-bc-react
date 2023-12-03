import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import '../css/form-kelurahan.css';

function EditJadwal({ idKelurahan, apiAuth, idJadwal }) {
  const [jadwal, setJadwal] = useState({
    tanggal: '',
    waktu: '',
    judul: '',
    deskripsi: '',
  });

  const [errors, setErrors] = useState({
    tanggal: '',
    waktu: '',
    judul: '',
    deskripsi: '',
  });

  useEffect(() => {
    // Fetch existing data for the specified idJadwal
    axios.get(`${BASE_URL}/jadwals/${idJadwal}`, apiAuth)
      .then(response => {
        const { tanggal, waktu, judul, deskripsi } = response.data;
        setJadwal({ tanggal, waktu, judul, deskripsi });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (validateForm()){
      try {
        const response = await axios.put(`${BASE_URL}/jadwals/${idJadwal}`, jadwal, apiAuth);
        // Handle success, e.g., redirect or show a success message
        console.log(response)
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error submitting data:', error);
      }
    // }
  };

  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="text-center p-4">FORM EDIT JADWAL KEGIATAN</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <div className="table-responsive">
          <form onSubmit={(e) => {onSubmit(e)}}>
            <label htmlFor="tanggal">
              <span>Tanggal*</span>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={jadwal.tanggal}
                onChange={onInputChange}
                required
              />
            </label>

            <label htmlFor="waktu">
              <span>Waktu*</span>
              <input
                type="time"
                id="waktu"
                name="waktu"
                value={jadwal.waktu}
                onChange={onInputChange}
                required
              />
            </label>

            <label htmlFor="judul">
              <span>Judul Kegiatan*</span>
              <input
                type="text"
                id="judul"
                name="judul"
                value={jadwal.judul}
                onChange={onInputChange}
                required
              />
            </label>

            <label htmlFor="deskripsi">
              <span>Deskripsi Kegiatan*</span>
              <textarea
                id="deskripsi"
                name="deskripsi"
                value={jadwal.deskripsi}
                onChange={onInputChange}
                required
              ></textarea>
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

export default EditJadwal;
