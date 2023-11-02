import React from 'react';
import "../css/form-kelurahan.css";

function EditAkunPuskesmas() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT AKUN PUSKESMAS</h2>

        <form action="" method="post">
          <label htmlFor="nama">
            <span>NAMA</span>
            <input type="text" id="nama" name="nama" required />
          </label>

          <label htmlFor="alamat">
            <span>ALAMAT</span>
            <input type="text" id="alamat" name="alamat" required />
          </label>

          <label htmlFor="nomor_telepon">
            <span>NOMOR TELEPON</span>
            <input type="text" id="nomor_telepon" name="nomor_telepon" required />
          </label>

          <label htmlFor="kepala">
            <span>KEPALA</span>
            <input type="text" id="kepala" name="kepala" required />
          </label>
          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default EditAkunPuskesmas;
