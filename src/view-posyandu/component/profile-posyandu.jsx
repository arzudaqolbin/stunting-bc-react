import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile-posyandu.css";
import logoPosyandu from "../../aset/logo-posyandu.png";
import BASE_URL from "../../base/apiConfig";

function ProfilePosyandu({ idPosyandu, apiAuth }) {
  const [Posyandu, setPosyandu] = useState({});
  const [koordinat, setKoordinat] = useState({ latitude: 0, longitut: 0 });
  const [Kader, setKader] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posyandu/${idPosyandu}`, apiAuth)
      .then((response) => {
        setPosyandu(response.data.data);
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

        axios
          .get(`${BASE_URL}/posyandu/${idPosyandu}/kader`, apiAuth)
          .then((response) => {
            setKader(response.data.data);
          })
          .catch((error) => {
            console.error(
              "Terjadi kesalahan saat mengambil opsi Posyandu:",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Error fetching puskesmas:", error);
      });
  }, [idPosyandu, apiAuth]);

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
            <img src={logoPosyandu} alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{Posyandu?.alamat || "Loading..."}</p>
            <h1>NO. TELP</h1>
            <p>{Posyandu?.nomor_telepon || "Loading..."}</p>
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
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Ketua")?.nama ||
                      "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>Sekretaris</td>
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Sekretaris")
                      ?.nama || "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>Bendahara</td>
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Bendahara")
                      ?.nama || "Loading..."}
                  </td>
                </tr>
                {Kader.filter(
                  (kader) =>
                    kader.jabatan !== "Ketua" &&
                    kader.jabatan !== "Sekretaris" &&
                    kader.jabatan !== "Bendahara"
                ).map((kader, index) => (
                  <tr key={index}>
                    <td>{kader.jabatan}</td>
                    <td>{kader.nama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ProfilePosyandu;
