import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/tabel-daftar-balita-puskesmas.css";
import BASE_URL from "../../base/apiConfig";
import Statistik from "../../view-publik/component/Statistik";
import { ClipLoader } from 'react-spinners';
import { Link } from "react-router-dom";

function TabelBalitaPuskesmas({ idPuskesmas, apiAuth }) {
  const [balita, setBalita] = useState([]);
  const [posyandu, setPosyandu] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDataBalita();
    loadPosyandu();
  }, []);

  const loadDataBalita = async () => {
    try {
      const result = await axios.get(
        `${BASE_URL}/balitas/puskesmas/${idPuskesmas}`,
        apiAuth
      );
      setBalita(result.data.balitas);
      setLoading(false)
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

  const loadPosyandu = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posyandu`, apiAuth);
      setPosyandu(response.data);
    } catch (error) {
      console.error("Error fetching posyandu data:", error);
    }
  };

  const getStatusTBUClass = (status) => {
    if (status === "Sangat Pendek") {
      return "status rounded darkred";
    } else if (status === "Pendek") {
      return "status rounded red";
    } else if (status === "Normal") {
      return "status rounded limegreen";
    } else if (status === "Tinggi") {
      return "status rounded darkblue";
    } else {
      return "status rounded black";
    }
  };

  const getStatusBBUClass = (status) => {
    if (status === "BB Sangat Kurang") {
      return "status rounded darkred";
    } else if (status === "BB Kurang") {
      return "status rounded red";
    } else if (status === "Normal") {
      return "status rounded limegreen";
    } else if (status === "Risiko BB Lebih") {
      return "status rounded darkblue";
    } else {
      return "status rounded black";
    }
  };

  const getStatusBBTBClass = (status) => {
    if (status === "Gizi Buruk") {
      return "status rounded darkred";
    } else if (status === "Gizi Kurang") {
      return "status rounded red";
    } else if (status === "Normal") {
      return "status rounded limegreen";
    } else if (status === "Risiko Lebih") {
      return "status rounded dodgerblue";
    } else if (status === "Gizi Lebih") {
      return "status rounded mediumblue";
    } else if (status === "Obesitas") {
      return "status rounded darkblue";
    } else {
      return "status rounded black";
    }
  };

  const getPosyanduName = (posyanduId) => {
    const posyanduData =
      posyandu.length > 0 ? posyandu.find((p) => p.id === posyanduId) : null;
    return posyanduData ? posyanduData.nama : "";
  };

  return (
    <>
    {
      loading ?(
      <div className='text-center'>
        <ClipLoader
          loading={loading}
          size={150}
        />
      </div>) : (

    <main className="container">
      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">Daftar Balita Puskemas</h2>

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
                <th scope="col">Nama Posyandu</th>
                <th scope="col">Umur (Bulan)</th>
                <th scope="col">Status TB/U</th>
                <th scope="col">Status BB/TB</th>
                <th scope="col">Status BB/U</th>
                <th scope="col">Lihat Detail</th>
              </tr>
            </thead>
            <tbody>
              {balita.map((data, index) => (
                <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.nama}</td>
                  <td>{data.jenis_kelamin}</td>
                  <td>{getPosyanduName(data.posyandu_id)}</td>
                  <td>{data.umur}</td>
                  <td data-status_tbu={data.status_tbu}>
                    <div className={getStatusTBUClass(data.status_tbu)}>
                      {data.status_tbu}
                    </div>
                  </td>
                  <td data-status_bbtb={data.status_bbtb}>
                    <div className={getStatusBBTBClass(data.status_bbtb)}>
                      {data.status_bbtb}
                    </div>
                  </td>
                  <td data-status_bbu={data.status_bbu}>
                    <div className={getStatusBBUClass(data.status_bbu)}>
                      {data.status_bbu}
                    </div>
                  </td>
                  <td>
                    <Link to={`/puskesmas/detail-balita/${data.id}`} className="btn btn-info">Info</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <Statistik />
      </div>
    </main>)
    }
    </>
  );
}

export default TabelBalitaPuskesmas;
