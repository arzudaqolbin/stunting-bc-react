import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/profile-kelurahan.css";


function ProfileKelurahan({ kelurahanId }) {

  const [kelurahan, setKelurahan] = useState({
    id: "",
    nama: "",
    alamat: "",
    nomor_telepon: "",
    user_id: "",
    koordinat_id: ""
  });

  const [koordinat, setKoordinat] = useState({
    id: "",
    latitude: "",
    longitut: ""
  });


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/kelurahan/1")
      .then(response => {
        setKelurahan(response.data);
        // Setelah mendapatkan data kelurahan, lakukan permintaan untuk mendapatkan data koordinat
        axios.get(`http://127.0.0.1:8000/api/koordinat/${response.data.koordinat_id}`)
          .then(koordinatResponse => {
            setKoordinat(koordinatResponse.data);
          })
          .catch(error => {
            console.error('Error fetching koordinat:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching kelurahan:', error);
      });
  }, [kelurahanId]);

  console.log(kelurahan);
  console.log(koordinat);

  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src="logokelurahan.png" alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{kelurahan.alamat}</p>
            <h1>NO. TELP</h1>
            <p>{kelurahan.nomor_telepon}</p>
            <h1>KOORDINAT</h1>
            <p>{koordinat.longitut}</p>
            <p>{koordinat.latitude}</p>
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
