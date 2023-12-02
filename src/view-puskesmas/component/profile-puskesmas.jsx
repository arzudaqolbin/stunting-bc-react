import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile-puskesmas.css";
import logoPuskesmas from "../../aset/logo-puskesmas.png";
import BASE_URL from "../../base/apiConfig";

function ProfilePuskesmas({ idPuskesmas, apiAuth }) {
  const [Puskesmas, setPuskesmas] = useState({});
  const [koordinat, setKoordinat] = useState({ latitude: 0, longitut: 0 });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/puskesmas/${idPuskesmas}`, apiAuth)
      .then((response) => {
        setPuskesmas(response.data.data);
        axios
          .get(
            `${BASE_URL}/koordinat/${response.data.data.koordinat_id}`,
            apiAuth
          )
          .then((koordinatResponse) => {
            setKoordinat(koordinatResponse.data);
          })
          .catch((error) => {
            console.error("Error fetching koordinat:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching puskesmas:", error);
      });
  }, [idPuskesmas, apiAuth]);

  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${koordinat.longitut},${koordinat.latitude}&marker=${koordinat.latitude},${koordinat.longitut}`;
    setMapUrl(url);
  }, [koordinat.latitude, koordinat.longitut]);

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
            <h1>KOORDINAT</h1>
            <div className="text-center">
              {mapUrl && (
                <iframe
                  title="Open Street Map"
                  width="50%"
                  height="200px"
                  loading="lazy"
                  allowFullScreen
                  src={mapUrl}
                ></iframe>
              )}
            </div>
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
