import React from 'react';
import "../css/profile-posyandu.css";

function ProfilePosyandu() {
  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src="logoposyandu.png" alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>Jl. Sensus No. 4 RT 001/RW 04, Bidara Cina, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13330</p>
            <h1>NO. TELP</h1>
            <p>021-0210210</p>
            <img src="posyandu.png" alt="Peta Lokasi" />
            <h3>Pengurus Kader</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Jabatan</th>
                  <th>Nama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ketua</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sekretaris</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Bendahara</td>
                  <td></td>
                </tr>
                <tr>
                  <td rowspan="5">Anggota Kader</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>B</td>
                </tr>
                <tr>
                  <td>C</td>
                </tr>
                <tr>
                  <td>D</td>
                </tr>
                <tr>
                  <td>E</td>
                </tr>
              </tbody>
            </table>
            <div className="button-container">
              <button type="submit" className="submit">Ganti Password</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePosyandu;
