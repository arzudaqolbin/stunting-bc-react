import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile-kelurahan.css";
import logoJaktim from "../../aset/logo-jaktim.png";
import BASE_URL from "../../base/apiConfig";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function ProfileKelurahan({ idKelurahan, apiAuth }) {
  const [kelurahan, setKelurahan] = useState({});
  const [koordinat, setKoordinat] = useState({ latitude: 0, longitut: 0 });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/kelurahan/${idKelurahan}`, apiAuth)
      .then((response) => {
        setKelurahan(response.data);
        axios
          .get(`${BASE_URL}/koordinat/${response.data.koordinat_id}`, apiAuth)
          .then((koordinatResponse) => {
            setKoordinat(koordinatResponse.data);
          })
          .catch((error) => {
            console.error("Error fetching koordinat:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching kelurahan:", error);
      });
  }, [idKelurahan, apiAuth]);

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
            <img src={logoJaktim} alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{kelurahan.alamat}</p>
            <h1>NO. TELP</h1>
            <p>{kelurahan.nomor_telepon}</p>
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

export default ProfileKelurahan;
