import React from 'react';
import "../css/form-kelurahan.css";

const TambahJadwal = () => {
  return (
    <main className="container">
      <a href=""><img src="back.png" alt="Back" className="logo-back" /></a>
      <h2 className="custom-judul">Form Tambah Jadwal Kegiatan</h2>
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
            <input type="text" id="judul_kegiatan" name="judul_kegiatan" required rows="2" />
          </label>

          <label htmlFor="deskripsi_kegiatan">
            <span>Deskripsi Kegiatan*</span>
            <textarea id="deskripsi_kegiatan" name="deskripsi_kegiatan" required rows="4"></textarea>
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default TambahJadwal;
