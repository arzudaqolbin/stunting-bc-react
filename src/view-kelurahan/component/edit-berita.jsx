import React from 'react';
import "../css/form-kelurahan.css";

function EditBerita() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Edit Berita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form action="" method="post">
          <label htmlFor="tanggal">
            <span>Tanggal*</span>
            <input type="date" id="tanggal" name="tanggal" required />
          </label>

          <label htmlFor="judul">
            <span>Judul*</span>
            <input type="text" id="judul" name="judul" required />
          </label>

          <label htmlFor="deskripsi_singkat">
            <span>Deskripsi Singkat*</span>
            <textarea id="deskripsi_singkat" name="deskripsi_singkat" required rows="5"></textarea>
          </label>

          <label htmlFor="isi_berita">
            <span>Isi Berita*</span>
            <textarea id="isi_berita" name="isi_berita" required rows="35"></textarea>
          </label>

          <label htmlFor="gambar">
            <span>Gambar Pendukung</span>
            <input type="file" id="gambar" name="gambar" />
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default EditBerita;
