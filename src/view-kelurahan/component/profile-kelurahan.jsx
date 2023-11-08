import React from 'react';
import "../css/profile-kelurahan.css";

function ProfileKelurahan() {
  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src="logokelurahan.png" alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>Jl. Tanjung Lengkong, No. 30 RT 004/RW 07, Kecamatan Jatinegara, Kota Jakarta Timur</p>
            <h1>NO. TELP</h1>
            <p>021-8192371</p>
            <img src="kelurahan.png" alt="Peta Lokasi" />
            <div className="button-container">
              <button type="submit" className="submit">Ganti Password</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileKelurahan;
