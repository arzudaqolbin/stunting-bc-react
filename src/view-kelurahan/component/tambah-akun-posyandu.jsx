import React from 'react';
import "../css/form-kelurahan.css";

function TambahAkunPosyandu() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>
      <h2 className="custom-judul">Form Tambah Akun Posyandu</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <form action="" method="post">
          <label htmlFor="nama_posyandu">
            <span>Nama Posyandu*</span>
            <input type="text" id="nama_posyandu" name="nama_posyandu" required />
          </label>

          <label htmlFor="nama_puskesmas">
            <span>Nama Puskesmas*</span>
            <input type="text" id="nama_puskesmas" name="nama_puskesmas" required />
          </label>

          <label htmlFor="alamat">
            <span>Alamat*</span>
            <input type="text" id="alamat" name= "alamat" required />
          </label>

          <label htmlFor="nomor_telepon">
            <span>Nomor Telepon*</span>
            <input type="text" id="nomor_telepon" name="nomor_telepon" required />
          </label>

          <label htmlFor="username">
            <span>Username*</span>
            <input type="text" id="username" name="username" required />
          </label>

          <label htmlFor="password">
            <span>Password*</span>
            <input type="password" id="password" name="password" required />
          </label>

          <label htmlFor="confirm_password">
            <span>Confirm Password*</span>
            <input type="password" id="confirm_password" name="confirm_password" required />
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">Simpan</button>
    </main>
  );
}

export default TambahAkunPosyandu;