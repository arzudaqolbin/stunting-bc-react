import "../css/edit-pw-puskesmas.css";
import React from 'react';

function EditPwPuskesmas() {
  return (
    <div className="main d-flex flex-column min-vh-100" style={{ backgroundColor: '#E4F3EF' }}>
      {/* Main content */}
      <main className="container">
        <a href=""><img src="back.png" alt="Back" className="logo-back" /></a>
        <div className="container-fluid">
          {/* Edit Password Form */}
          <h2 className="custom-judul">EDIT PASSWORD PUSKESMAS</h2>
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
    </div>
  );
}

export default EditPwPuskesmas;
