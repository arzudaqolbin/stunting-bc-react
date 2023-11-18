import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/tabel-daftar-balita-stunting.css";
import BASE_URL from "../../base/apiConfig";

function TabelDaftarBalitaStunting() {
  const [balita, setBalita] = useState([]);
  console.log(balita);

  useEffect(() => {
    loadDataBalita();
  }, []);

  const loadDataBalita = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/balitas/kelurahan/stunting`);
      setBalita(result.data.balitas);
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

  // Fungsi applyStatusStyle untuk mengatur status gaya CSS
  function applyStatusStyle(element) {
    element.style.color = "white";
    element.style.borderRadius = "10px";
    element.style.padding = "1px";
    element.style.margin = "1px";

    var statusValue = element.textContent;

    switch (statusValue) {
      // status TB/U
      case "Sangat Pendek":
        element.style.backgroundColor = "darkred";
        break;
      case "Pendek":
        element.style.backgroundColor = "red";
        break;
      case "Normal":
        element.style.backgroundColor = "limegreen";
        break;
      case "Tinggi":
        element.style.backgroundColor = "darkblue";
        break;
      // status BB/TB
      case "Gizi Buruk":
        element.style.backgroundColor = "darkred";
        break;
      case "Gizi Kurang":
        element.style.backgroundColor = "red";
        break;
      case "Risiko Lebih":
        element.style.backgroundColor = "dodgerblue";
        break;
      case "Gizi Lebih":
        element.style.backgroundColor = "mediumblue";
        break;
      case "Obesitas":
        element.style.backgroundColor = "darkblue";
        break;
      // status BB/U
      case "BB Sangat Kurang":
        element.style.backgroundColor = "darkred";
        break;
      case "BB Kurang":
        element.style.backgroundColor = "red";
        break;
      case "Risiko BB Lebih":
        element.style.backgroundColor = "darkblue";
        break;
      default:
        // Default background color for unknown status
        element.style.backgroundColor = "black";
    }
  }

  // Mengatur status pada elemen-elemen yang memiliki atribut data-status_tbu, data-status_bbtb, data-status_bbu, dan data-status_kms
  var statusTBUElements = document.querySelectorAll("[data-status_tbu]");
  var statusBBTBElements = document.querySelectorAll("[data-status_bbtb]");
  var statusBBUElements = document.querySelectorAll("[data-status_bbu]");

  statusTBUElements.forEach(function (statusElement) {
    var divElement = statusElement.querySelector("div.status");
    applyStatusStyle(divElement);
  });

  statusBBTBElements.forEach(function (statusElement) {
    var divElement = statusElement.querySelector("div.status");
    applyStatusStyle(divElement);
  });

  statusBBUElements.forEach(function (statusElement) {
    var divElement = statusElement.querySelector("div.status");
    applyStatusStyle(divElement);
  });

  return (
    <main className="container">
      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">Daftar Balita Stunting</h2>

        <form className="d-flex align-items-center">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Cari nama balita..."
            aria-label="Search"
          />
          <button className="btn btn-success btn-rounded btn-sm" type="submit">
            Cari
          </button>
        </form>

        <div className="p-3 mb-2 bg-light custom-border rounded">
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Balita</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">RW</th>
                <th scope="col">Umur (Bulan)</th>
                <th scope="col">Status TB/U</th>
                <th scope="col">Status BB/TB</th>
                <th scope="col">Status BB/U</th>
                <th scope="col">Lihat Detail</th>
              </tr>
            </thead>
            <tbody>
              {balita.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.nama}</td>
                  <td>{data.jenis_kelamin}</td>
                  <td>{data.nama_ortu}</td>
                  <td>{data.umur}</td>
                  <td data-status_tbu={data.status_tbu}>
                    <div className="status rounded">{data.status_tbu}</div>
                  </td>
                  <td data-status_bbtb={data.status_bbtb}>
                    <div className="status rounded">{data.status_bbtb}</div>
                  </td>
                  <td data-status_bbu={data.status_bbu}>
                    <div className="status rounded">{data.status_bbu}</div>
                  </td>
                  <td>
                    <button className="btn btn-info">Info</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TabelDaftarBalitaStunting;
