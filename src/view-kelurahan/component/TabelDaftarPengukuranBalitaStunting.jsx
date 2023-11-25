import React, { useEffect, useState } from 'react';
import "../css/tabel-daftar-pengukuran-balita-stunting.css";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

function applyStatusStyle(statusValue) {
  switch (statusValue) {
    case "Sangat Pendek":
      return { backgroundColor: "darkred", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Pendek":
      return { backgroundColor: "red", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Normal":
      return { backgroundColor: "limegreen", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Tinggi":
      return { backgroundColor: "darkblue", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Gizi Buruk":
      return { backgroundColor: "darkred", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Gizi Kurang":
      return { backgroundColor: "red", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Resiko Lebih":
      return { backgroundColor: "dodgerblue", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Gizi Lebih":
      return { backgroundColor: "mediumblue", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Obesitas":
      return { backgroundColor: "darkblue", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "BB Sangat Kurang":
      return { backgroundColor: "darkred", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "BB Kurang":
      return { backgroundColor: "red", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Resiko BB Lebih":
      return { backgroundColor: "darkblue", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Hijau Atas":
      return { backgroundColor: "green", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Hijau":
      return { backgroundColor: "limegreen", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Kuning":
      return { backgroundColor: "gold", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    case "Merah":
      return { backgroundColor: "red", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
    default:
      return { backgroundColor: "black", color: "white", borderRadius: "10px", padding: "1px", margin: "1px" };
  }
}

function TabelPengukuranBalitaStunting({ apiAuth, idBalita }) {

  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [tanggalLahir, setTanggalLahir] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/pengukurans/balita/${idBalita}`, apiAuth);
        const pengukuranArray = Array.isArray(result.data) ? result.data : [result.data];
        pengukuranArray.sort((a, b) => a.umur - b.umur);
        setDataPengukuran(pengukuranArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataPengukuran]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/balitas/${idBalita}`, apiAuth);
        setTanggalLahir(result.data.tgl_lahir);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tanggalLahir]);

  const handleExport = () => {

  }

  return (
    <main className="container">
      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">Data Pengukuran</h2>

        <div className="p-3 mb-2 bg-light custom-border rounded">
          <Link to={`/posyandu/tambah-pengukuran/${idBalita}`} className='btn btn-primary'>Tambah Pengukuran</Link>
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Tanggal Lahir</th>
                <th scope="col">Tanggal Pengukuran</th>
                <th scope="col">Umur (Bulan)</th>
                <th scope="col">Posisi Pengukuran</th>
                <th scope="col">BB (Kg)</th>
                <th scope="col">TB (Cm)</th>
                <th scope="col">Status TB/U</th>
                <th scope="col">Status BB/TB</th>
                <th scope="col">Status BB/U</th>
                <th scope="col">Rambu Gizi</th>
                <th scope="col">KMS</th>
                {/* <th scope="col">Ubah Pengukuran</th> */}
              </tr>
            </thead>
            <tbody>
              {dataPengukuran.map((pengukuran, index) => (
                <tr key={pengukuran.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{format(new Date(tanggalLahir), "dd-MM-yyyy")}</td>
                  <td>{format(new Date(pengukuran.tgl_input), "dd-MM-yyyy")}</td>
                  <td>{pengukuran.umur}</td>
                  <td>{pengukuran.posisi_balita}</td>
                  <td>{pengukuran.berat_badan}</td>
                  <td>{pengukuran.tinggi_badan}</td>
                  <td data-status_tbu="Sangat Pendek">
                    <div className="validasi rounded" style={applyStatusStyle(pengukuran.status_tbu)}>{pengukuran.status_tbu}</div>
                  </td>
                  <td data-status_bbtb="Gizi Buruk">
                    <div className="validasi rounded" style={applyStatusStyle(pengukuran.status_bbtb)}>{pengukuran.status_bbtb}</div>
                  </td>
                  <td data-status_bbu="BB Sangat Kurang">
                    <div className="validasi rounded" style={applyStatusStyle(pengukuran.status_bbu)}>{pengukuran.status_bbu}</div>
                  </td>
                  <td>{pengukuran.rambu_gizi}</td>
                  <td data-status_kms="Hijau Atas">
                    <div className="validasi rounded" style={applyStatusStyle(pengukuran.kms)}>{pengukuran.kms}</div>
                  </td>
                  {/* <td>
                  {pengukuran.validasi == true ? 
                    <div className="tervalidasi rounded">Tervalidasi</div>
                  :
                  <Link to={`/posyandu/edit-pengukuran/${pengukuran.id}`}>
                    <button className="fa-solid fa-pen-to-square"></button>
                  </Link>
                  }
                </td> */}
                </tr>

              ))}
            </tbody>
          </table>
          <button onClick={handleExport()} className='btn btn-primary'>Export Table</button>
        </div>
      </div>
    </main>
  );
}

export default TabelPengukuranBalitaStunting;