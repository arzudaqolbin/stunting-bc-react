import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile-kelurahan.css";
import logoJaktim from "../../aset/logo-jaktim.png";
import BASE_URL from "../../base/apiConfig";

function ProfileKelurahan({ idKelurahan, apiAuth }) {
  const [kelurahan, setKelurahan] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/kelurahan/${idKelurahan}`, apiAuth)
      .then((response) => {
        setKelurahan(response.data);
        // Setelah mendapatkan data kelurahan, lakukan permintaan untuk mendapatkan data koordinat
        //   axios
        //     .get(`${BASE_URL}/kelurahan/koordinat/${response.data.koordinat_id}`)
        //     .then((koordinatResponse) => {
        //       setKoordinat(koordinatResponse.data);
        //     })
        //     .catch((error) => {
        //       console.error("Error fetching koordinat:", error);
        //     });
      })
      .catch((error) => {
        console.error("Error fetching kelurahan:", error);
      });
  }, []);

  // console.log(kelurahan);
  // console.log(koordinat);

  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src={logoJaktim} alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{kelurahan.alamat}</p>
            <h1>NO. TELP</h1>
            <p>{kelurahan.nomor_telepon}</p>
            <h1>KOORDINAT</h1>
            {/* <p>{koordinat.longitut}</p> */}
            {/* <p>{koordinat.latitude}</p> */}
            <img src="kelurahan.png" alt="Peta Lokasi" />
            <div className="button-container">
              <button type="submit" className="submit">
                Ganti Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileKelurahan;
