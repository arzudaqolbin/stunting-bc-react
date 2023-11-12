import React, { useEffect, useState } from 'react';
import "../css/tabel-pengukuran-balita-posyandu.css";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import format from 'date-fns/format';
import { Link, useParams } from 'react-router-dom';

// function applyStatusStyle(element) {
//   element.style.color = "white";
//   element.style.borderRadius = "10px";
//   element.style.padding = "1px";
//   element.style.margin = "1px";

//   const statusValue = element.textContent;

//   switch (statusValue) {
//     case "Sangat Pendek":
//       element.style.backgroundColor = "darkred";
//       break;
//     case "Pendek":
//       element.style.backgroundColor = "red";
//       break;
//     case "Normal":
//       element.style.backgroundColor = "limegreen";
//       break;
//     case "Tinggi":
//       element.style.backgroundColor = "darkblue";
//       break;
//     case "Gizi Buruk":
//       element.style.backgroundColor = "darkred";
//       break;
//     case "Gizi Kurang":
//       element.style.backgroundColor = "red";
//       break;
//     case "Risiko Lebih":
//       element.style.backgroundColor = "dodgerblue";
//       break;
//     case "Gizi Lebih":
//       element.style.backgroundColor = "mediumblue";
//       break;
//     case "Obesitas":
//       element.style.backgroundColor = "darkblue";
//       break;
//     case "BB Sangat Kurang":
//       element.style.backgroundColor = "darkred";
//       break;
//     case "BB Kurang":
//       element.style.backgroundColor = "red";
//       break;
//     case "Risiko BB Lebih":
//       element.style.backgroundColor = "darkblue";
//       break;
//     case "Hijau Atas":
//       element.style.backgroundColor = "green";
//       break;
//     case "Hijau":
//       element.style.backgroundColor = "limegreen";
//       break;
//     case "Kuning":
//       element.style.backgroundColor = "gold";
//       break;
//     case "Merah":
//       element.style.backgroundColor = "red";
//       break;
//     default:
//       element.style.backgroundColor = "black";
//   }
// }

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

function TabelPengukuranBalitaPosyandu({idBalita}) {

  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const {idPosyandu} = useParams();

  // console.log("tanggal lahir");
  // console.log(typeof tanggalLahir);
  // console.log(tanggalLahir);

  // useEffect(() => {
  //   const statusTBUElements = document.querySelectorAll("[data-status_tbu]");
  //   const statusBBTBElements = document.querySelectorAll("[data-status_bbtb]");
  //   const statusBBUElements = document.querySelectorAll("[data-status_bbu]");
  //   const statusKMSElements = document.querySelectorAll("[data-status_kms]");

  //   statusTBUElements.forEach((statusElement) => {
  //     const divElement = statusElement.querySelector(".validasi");
  //     applyStatusStyle(divElement);
  //   });

  //   statusBBTBElements.forEach((statusElement) => {
  //     const divElement = statusElement.querySelector(".validasi");
  //     applyStatusStyle(divElement);
  //   });

  //   statusBBUElements.forEach((statusElement) => {
  //     const divElement = statusElement.querySelector(".validasi");
  //     applyStatusStyle(divElement);
  //   });

  //   statusKMSElements.forEach((statusElement) => {
  //     const divElement = statusElement.querySelector(".validasi");
  //     applyStatusStyle(divElement);
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/pengukurans/balita/${idBalita}`);
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
        const result = await axios.get(`${BASE_URL}/balitas/${idBalita}`);
        // const pengukuranArray = Array.isArray(result.data) ? result.data : [result.data];
        // setDataPengukuran(pengukuranArray);
        // console.log("isi fetch")
        // console.log(result.data)
        setTanggalLahir(result.data.tgl_lahir);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [tanggalLahir]);

  return (
    <main className="container">
      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">Data Pengukuran</h2>

        <div className="p-3 mb-2 bg-light custom-border rounded">
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
                <th scope="col">Ubah Pengukuran</th>
              </tr>
            </thead>
            <tbody>
              {dataPengukuran.map((pengukuran, index) => (
              <tr key={pengukuran.id}>
                <th scope="row">{index+1}</th>
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
                <td>
                  {pengukuran.validasi == true ? 
                    <div className="tervalidasi rounded">Tervalidasi</div>
                  :
                  <Link to={`/posyandu/${idPosyandu}/edit-pengukuran/${pengukuran.id}`}>
                    <button className="fa-solid fa-pen-to-square"></button>
                  </Link>
                  }
                </td>
              </tr>
                
              ))}
              {/* <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td data-status_tbu="Pendek">
                  <div className="validasi rounded">Pendek</div>
                </td>
                <td data-status_bbtb="Gizi Kurang">
                  <div className="validasi rounded">Gizi Kurang</div>
                </td>
                <td data-status_bbu="BB Kurang">
                  <div className="validasi rounded">BB Kurang</div>
                </td>
                <td>T</td>
                <td data-status_kms="Hijau">
                  <div className="validasi rounded">Hijau</div>
                </td>
                <td>
                  <div className="tervalidasi rounded">Tervalidasi</div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td data-status_tbu="Normal">
                  <div className="validasi rounded">Normal</div>
                </td>
                <td data-status_bbtb="Normal">
                  <div className="validasi rounded">Normal</div>
                </td>
                <td data-status_bbu="Normal">
                  <div className="validasi rounded">Normal</div>
                </td>
                <td>B</td>
                <td data-status_kms="Kuning">
                  <div className="validasi rounded">Kuning</div>
                </td>
                <td>
                  <button className="fa-solid fa-pen-to-square"></button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td data-status_tbu="Tinggi">
                  <div className="validasi rounded">Tinggi</div>
                </td>
                <td data-status_bbtb="Risiko Lebih">
                  <div className="validasi rounded">Risiko Lebih</div>
                </td>
                <td data-status_bbu="Risiko BB Lebih">
                  <div className="validasi rounded">Risiko BB Lebih</div>
                </td>
                <td>O</td>
                <td data-status_kms="Merah">
                  <div className="validasi rounded">Merah</div>
                </td>
                <td>
                  <div className="tervalidasi rounded">Tervalidasi</div>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td data-status_bbtb="Gizi Lebih">
                  <div className="validasi rounded">Gizi Lebih</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="fa-solid fa-pen-to-square"></button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td data-status_bbtb="Obesitas">
                  <div className="validasi rounded">Obesitas</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="fa-solid fa-pen-to-square"></button>
                </td> 
              </tr>*/}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TabelPengukuranBalitaPosyandu;