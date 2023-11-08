import React from 'react';
import "../css/form-kelurahan.css";

function EditAkunPosyandu() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left text-2x"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT AKUN POSYANDU</h2>

        <form action="" method="post">
          <label htmlFor="nama_posyandu">
            <span>NAMA POSYANDU</span>
            <input type="text" id="nama_posyandu" name="nama_posyandu" required />
          </label>

          <label htmlFor="nama_puskesmas">
            <span>NAMA PUSKESMAS</span>
            <input type="text" id="nama_puskesmas" name="nama_puskesmas" required />
          </label>

          <label htmlFor="alamat">
            <span>ALAMAT</span>
            <input type="text" id="alamat" name= "alamat" required />
          </label>

          <label htmlFor="nomor_telepon">
            <span>NOMOR TELEPON</span>
            <input type="text" id="nomor_telepon" name="nomor_telepon" required />
          </label>

          <label htmlFor="username">
            <span>USERNAME</span>
            <input type="text" id="username" name="username" required />
          </label>

          <label htmlFor="password">
            <span>PASSWORD</span>
            <input type="password" id="password" name="password" required />
          </label>

          <label htmlFor="confirm_password">
            <span>CONFIRM PASSWORD</span>
            <input type="password" id="confirm_password" name="confirm_password" required />
          </label>

          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default EditAkunPosyandu;
