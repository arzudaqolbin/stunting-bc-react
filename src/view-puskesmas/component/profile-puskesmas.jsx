import React from 'react';
import "../css/profile-puskesmas.css";

function ProfilePuskesmas() {
  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src="logopuskesmas.png" alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>Gg. Kober Depok No. 19, RT 005/RW 06, Bidara Cina, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13330</p>
            <h1>NO. TELP</h1>
            <p>021-85917587</p>
            <img src="puskesmas.png" alt="Peta Lokasi" />
            <div className="button-container">
              <button type="submit" className="submit">Ganti Password</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePuskesmas;
