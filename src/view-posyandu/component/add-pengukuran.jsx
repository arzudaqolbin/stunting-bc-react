import "../css/add-pengukuran.css";

import React from 'react';

function AddPengukuran() {
  return (
    <main className="container">
      <h2 className="custom-judul">Form Pengukuran Balita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form action="" method="post">
          <label htmlFor="nama_balita">
            <span>Nama Balita*</span>
            <select id="nama_balita" name="nama_balita" required>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </label>

          <label htmlFor="umur">
            <span>Umur*</span>
            <input type="text" id="umur" name="umur" required placeholder="auto system dari tanggal pengukuran" />
          </label>

          <label htmlFor="tanggal_pengukuran">
            <span>Tanggal Pengukuran*</span>
            <input type="date" id="tanggal_pengukuran" name="tanggal_pengukuran" required />
          </label>

          <label htmlFor="berat_badan">
            <span>Berat (kg)*</span>
            <input type="text" id="berat_badan" name="berat_badan" required />
          </label>

          <label htmlFor="tinggi_badan">
            <span>Tinggi Badan (cm)*</span>
            <input type="text" id="tinggi_badan" name="tinggi_badan" required />
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default AddPengukuran;
