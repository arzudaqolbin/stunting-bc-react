import "../css/edit-pw-puskesmas.css";
import React from 'react';

function EditPwPuskesmas() {
  return (
    <div className="main d-flex flex-column min-vh-100" style={{ backgroundColor: '#E4F3EF' }}>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand px-3 border-bottom" style={{ backgroundColor: '#026670' }}>
        <button id="sidebar-toggle" className="btn" style={{ backgroundColor: '#9fedd7' }}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="d-flex align-items-center navbar-title">
          <p className="mb-0 font-weight-bold text-light" style={{ fontSize: '1.2rem' }}>Kelurahan Bidara Cina</p>
        </div>
        <div className="navbar-collapse navbar">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a href="#" data-bs-toggle="dropdown" className="nav-icon">
                <img src="logo-kantor.png" className="avatar img-fluid" alt="" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Keluar</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

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
