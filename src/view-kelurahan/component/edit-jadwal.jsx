import React from 'react';
import "../css/form-kelurahan.css";

function EditJadwal() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Edit Jadwal Kegiatan</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form action="" method="post">
          <label htmlFor="tanggal">
            <span>Tanggal*</span>
            <input type="date" id="tanggal" name="tanggal" required />
          </label>

          <label htmlFor="waktu">
            <span>Waktu*</span>
            <input type="text" id="waktu" name="waktu" required />
          </label>

          <label htmlFor="judul_kegiatan">
            <span>Judul Kegiatan*</span>
            <input type="text" id="judul_kegiatan" name="judul_kegiatan" required />
          </label>

          <label htmlFor="deskripsi_kegiatan">
            <span>Deskripsi Kegiatan*</span>
            <textarea id="deskripsi_kegiatan" name="deskripsi_kegiatan" required></textarea>
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default EditJadwal;
