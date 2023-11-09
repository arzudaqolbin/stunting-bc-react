import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile-posyandu.css";

function ProfilePosyandu({ id }) {
  const [Posyandu, setPosyandu] = useState({});
  console.log(Posyandu);

  const [Kader, setKader] = useState([]);

  useEffect(() => {
    loadDataPosyandu();
  }, []);

  const loadDataPosyandu = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/posyandu/${id}`
      );
      setPosyandu(result.data.data);

      axios
        .get(`http://127.0.0.1:8000/api/posyandu/${id}/kader`)
        .then((response) => {
          setKader(response.data.data);
        })
        .catch((error) => {
          console.error(
            "Terjadi kesalahan saat mengambil opsi Posyandu:",
            error
          );
        });
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
            <img src="logoposyandu.png" alt="Logo Posyandu" />
          </div>
          <div className="content-body">
            <h1>ALAMAT</h1>
            <p>{Posyandu?.alamat || "Alamat belum tersedia"}</p>
            <h1>NO. TELP</h1>
            <p>{Posyandu?.nomor_telepon || "Nomor Telepon belum tersedia"}</p>
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
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Ketua")?.nama ||
                      "-"}
                  </td>
                </tr>
                <tr>
                  <td>Sekretaris</td>
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Sekretaris")
                      ?.nama || "-"}
                  </td>
                </tr>
                <tr>
                  <td>Bendahara</td>
                  <td>
                    {Kader.find((kader) => kader.jabatan === "Bendahara")
                      ?.nama || "-"}
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
