import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile-puskesmas.css";
import logoPuskesmas from "../../aset/logo-puskesmas.png";
import BASE_URL from "../../base/apiConfig";

function ProfilePuskesmas({ idPuskesmas, apiAuth }) {
  const [Puskesmas, setPuskesmas] = useState({});

  // const dt = dataAuth()
  // console.log(dt.id)

  useEffect(() => {
    loadDataPuskesmas();
  }, []);

  const loadDataPuskesmas = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}`, apiAuth);
      setPuskesmas(result.data.data);
    } catch (error) {
      if (error.response) {
        // Respon dari server dengan kode status tertentu
        console.error(
          "Kesalahan dalam permintaan ke server:",
          error.response.status,
          error.response.data
        );
        // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai dengan respon dari server
      } else if (error.request) {
        // Tidak ada respon dari server
        console.error("Tidak ada respon dari server:", error.request);
        // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai untuk kasus ini
      } else {
        // Kesalahan lainnya
        console.error("Terjadi kesalahan:", error.message);
        // Di sini Anda dapat menampilkan pesan kesalahan umum atau menangani dengan cara yang sesuai
      }
    }
  };

  return (
    <main className="container">
      <div className="container-fluid">
        <div className="content-box">
          <div className="content-header">
            <img src={logoPuskesmas} alt="Logo Puskesmas" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{Puskesmas?.alamat || "Loading..."}</p>
            <h1>NO. TELP</h1>
            <p>{Puskesmas?.nomor_telepon || "Loading..."}</p>
            <img src="puskesmas.png" alt="Peta Lokasi" />
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

export default ProfilePuskesmas;
