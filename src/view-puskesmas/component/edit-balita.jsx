import React, { useContext } from 'react';
import "../css/edit-balita.css";

function EditBalita() {

  return (
    <main className="container">
      <a href=""><img src="back.png" alt="Back" className="logo-back" /></a>
      <h2 className="custom-judul">Form Edit Data Balita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form action="" method="post">
          <label htmlFor="nik">
            <span>NIK*</span>
            <input type="text" id="nik" name="nik" required />
          </label>

          <label htmlFor="nama_balita">
            <span>Nama Balita*</span>
            <input type="text" id="nama_balita" name="nama_balita" required />
          </label>

          <label htmlFor="jenis_kelamin">
            <span>Jenis Kelamin*</span>
            <select id="jenis_kelamin" name="jenis_kelamin">
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </label>

          <label htmlFor="nama_ortu">
            <span>Nama Orang Tua*</span>
            <input type="text" id="nama_ortu" name="nama_ortu" required />
          </label>

          <div className="address-section">
            <label htmlFor="alamat">
              <span>Alamat</span>
            </label>

            <div className="address-details">
              <label htmlFor="jalan">
                <span>Jalan*</span>
                <input type="text" id="jalan" name="jalan" required />
              </label>

              <label htmlFor="rt">
                <span>RT*</span>
                <input type="text" id="rt" name="rt" required />
              </label>

              <label htmlFor="rw">
                <span>RW*</span>
                <input type="text" id="rw" name="rw" required />
              </label>
            </div>
          </div>

          <label htmlFor="posyandu">
            <span>Nama Posyandu*</span>
            <select id="posyandu" name="posyandu">
              <option value="A">Posyandu A</option>
              <option value="B">Posyandu B</option>
              <option value="C">Posyandu C</option>
              <option value="D">Posyandu D</option>
            </select>
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default EditBalita;
