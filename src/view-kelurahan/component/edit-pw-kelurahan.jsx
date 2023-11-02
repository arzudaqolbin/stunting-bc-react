import React from 'react';
import "../css/form-kelurahan.css";

function EditPwKelurahan() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT PASSWORD KELURAHAN</h2>

        <form action="" method="post">
          <label htmlFor="username">
            <span>USERNAME</span>
            <input type="text" id="username" name="username" required />
          </label>

          <label htmlFor="password_baru">
            <span>PASSWORD BARU</span>
            <input type="password" id="password_baru" name="password_baru" required />
          </label>

          <label htmlFor="konfirmasi_password">
            <span>KONFIRMASI PASSWORD</span>
            <input type="password" id="konfirmasi_password" name="konfirmasi_password" required />
          </label>

          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default EditPwKelurahan;
