import React, { useEffect, useState } from "react";
import "../css/tabel-pengukuran-balita-puskesmas.css";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import format from "date-fns/format";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import $ from 'jquery';
import 'datatables.net';

function applyStatusStyle(statusValue) {
  switch (statusValue) {
    case "Sangat Pendek":
      return {
        backgroundColor: "darkred",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Pendek":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Normal":
      return {
        backgroundColor: "limegreen",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Tinggi":
      return {
        backgroundColor: "darkblue",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Gizi Buruk":
      return {
        backgroundColor: "darkred",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Gizi Kurang":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Resiko Lebih":
      return {
        backgroundColor: "dodgerblue",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Gizi Lebih":
      return {
        backgroundColor: "mediumblue",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Obesitas":
      return {
        backgroundColor: "darkblue",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "BB Sangat Kurang":
      return {
        backgroundColor: "darkred",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "BB Kurang":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Resiko BB Lebih":
      return {
        backgroundColor: "darkblue",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Hijau Atas":
      return {
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Hijau":
      return {
        backgroundColor: "limegreen",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Kuning":
      return {
        backgroundColor: "gold",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    case "Merah":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
    default:
      return {
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
  }
}

function TabelPengukuranBalitaPuskesmas({ apiAuth, idBalita }) {
  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const [namaBalita, setNamaBalita] = useState(null);
  const [loadData, setLoadData ] = useState(false);
  

  const fetchDataPengukuran = async() => {
    try {
      const result = await axios.get(
        `${BASE_URL}/pengukurans/balita/${idBalita}`,
        apiAuth
      );
      const pengukuranArray = Array.isArray(result.data)
        ? result.data
        : [result.data];
      pengukuranArray.sort((a, b) => a.umur - b.umur);
      setDataPengukuran(pengukuranArray);
      setLoadData(true);
    } catch (error) {
      errorHandling(error)
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchDataPengukuran();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${BASE_URL}/balitas/${idBalita}`,
          apiAuth
        );
        setTanggalLahir(result.data.tgl_lahir);
        setNamaBalita(result.data.nama);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tanggalLahir]);

  const exportToXLSX = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const formatDate = (date) => {
      const formattedDate = new Date(date).toLocaleDateString("en-GB");
      return formattedDate;
    };

    const formattedData = dataPengukuran.map((item) => [
      item.id,
      formatDate(item.tgl_input),
      item.umur,
      item.tinggi_badan,
      item.berat_badan,
      item.posisi_balita,
      item.rambu_gizi,
      item.kms,
      item.status_tbu,
      item.status_bbu,
      item.status_bbtb,
      formatDate(item.created_at),
    ]);

    const ws = XLSX.utils.aoa_to_sheet([
      [
        "ID",
        "Tanggal Input",
        "Umur",
        "Tinggi Badan",
        "Berat Badan",
        "Posisi Balita",
        "Rambu Gizi",
        "KMS",
        "Status TBU",
        "Status BBU",
        "Status BBTB",
        "Tanggal Penambahan",
      ],
      ...formattedData,
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });

    const dataFile = new Blob([excelBuffer], { type: fileType });
    const fileName = namaBalita + "_Data Pengukuran Balita" + fileExtension;

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(dataFile, fileName);
      return;
    }

    const dataFileURL = URL.createObjectURL(dataFile);
    const dataLink = document.createElement("a");
    dataLink.href = dataFileURL;
    dataLink.setAttribute("download", fileName);
    document.body.appendChild(dataLink);
    dataLink.click();
    document.body.removeChild(dataLink);
  };

  const handleValidate = async (id_Pengukuran) => {
    let validate = true;
    await Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Memvalidasi data pengukuran",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then(async(result) => {
      if (result.isConfirmed) {
        // lakukan api validasiiii
        await axios.put(`${BASE_URL}/pengukurans/validasi/${id_Pengukuran}`, { validasi: validate }, apiAuth)
        fetchDataPengukuran();
        Swal.fire({
          title: "Berhasil",
          text: "Pengukuran tervalidasi",
          icon: "success"
        });

      }
    });
  };

  const hapusPengukuran = async (id_Pengukuran) => {
    await Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Menghapus data pengukuran",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then(async(result) => {
      if (result.isConfirmed) {
        // lakukan api validasiiii
        await axios.delete(`${BASE_URL}/pengukurans/${id_Pengukuran}`, apiAuth)
        fetchDataPengukuran();
        Swal.fire({
          title: "Berhasil",
          text: "Menghapus data pengukuran",
          icon: "success"
        });

      }
    });
  };


  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (loadData && !$.fn.DataTable.isDataTable('#myTable')) {
      $('#myTable').DataTable({
        "aaSorting": [],
        "language": {
          "lengthMenu": "Menampilkan _MENU_ data tiap halaman",
          "zeroRecords": "Data tidak ditemukan",
          "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
          "infoEmpty": "Tidak ada data tersedia",
          "infoFiltered": "(Disaring dari _MAX_ data total)",
          "decimal": "",
          "emptyTable": "Data tidak tersedia",
          "loadingRecords": "Memuat...",
          "processing": "Memproses...",
          "search": 'Pencarian:   <i class="bi bi-search"></i> ',
          "searchPlaceholder": "cari data pengukuran...",
          "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            "previous": 'Prev     <i class="bi bi-chevron-double-left"></i>',
            "next": '<i class="bi bi-chevron-double-right"></i>     Next'
          },
          "aria": {
            "sortAscending": ": klik untuk mengurutkan A-Z",
            "sortDescending": ": klik untuk mengurutkan Z-A"
          }
        }
      });
    }
  }, [loadData]);

  if (!loadData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container">
      {/* Mulai isi kontennya disini */}
        <div className="d-flex justify-content-between mb-3">
          <Link
            to={`/puskesmas/tambah-pengukuran/${idBalita}`}
            className="btn btn-primary"
          >
            Tambah Pengukuran
          </Link>
          <button className="btn btn-info" onClick={exportToXLSX}>
            Export Table
          </button>
        </div>

          <div className="table-responsive">
          <table id="myTable" className="table custom-table">
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataPengukuran.map((pengukuran, index) => (
                <tr key={pengukuran.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{format(new Date(tanggalLahir), "dd-MM-yyyy")}</td>
                  <td>
                    {format(new Date(pengukuran.tgl_input), "dd-MM-yyyy")}
                  </td>
                  <td>{pengukuran.umur}</td>
                  <td>{pengukuran.posisi_balita}</td>
                  <td>{pengukuran.berat_badan}</td>
                  <td>{pengukuran.tinggi_badan}</td>
                  <td data-status_tbu="Sangat Pendek">
                    <div
                      className="validasi rounded"
                      style={applyStatusStyle(pengukuran.status_tbu)}
                    >
                      {pengukuran.status_tbu}
                    </div>
                  </td>
                  <td data-status_bbtb="Gizi Buruk">
                    <div
                      className="validasi rounded"
                      style={applyStatusStyle(pengukuran.status_bbtb)}
                    >
                      {pengukuran.status_bbtb}
                    </div>
                  </td>
                  <td data-status_bbu="BB Sangat Kurang">
                    <div
                      className="validasi rounded"
                      style={applyStatusStyle(pengukuran.status_bbu)}
                    >
                      {pengukuran.status_bbu}
                    </div>
                  </td>
                  <td>{pengukuran.rambu_gizi}</td>
                  <td data-status_kms="Hijau Atas">
                    <div
                      className="validasi rounded"
                      style={applyStatusStyle(pengukuran.kms)}
                    >
                      {pengukuran.kms}
                    </div>
                  </td>
                  <td className="d-flex">
                    <Link to={`/puskesmas/edit-pengukuran/${pengukuran.id}`}>
                      <button className="btn btn-warning d-flex align-items-center">
                        <i class="fa-solid fa-pen-to-square"></i> Edit
                      </button>
                    </Link>
                    <button className="btn btn-danger d-flex align-items-center" onClick={() => {hapusPengukuran(pengukuran.id)}}>
                      <i class="fa-solid fa-trash"></i> Hapus
                    </button>
                    {pengukuran.validasi == true ? (
                      <button className="btn btn-success d-flex align-items-center" disabled>
                        Valid <i class="fa-solid fa-square-check"></i>
                      </button>)
                      :
                      <button className="btn" onClick={() => handleValidate(pengukuran.id)}>
                        {/* <button className="fa-solid fa-pen-to-square"></button> */}
                        <i class="fa-solid fa-circle-check mx-2" style={{ color: "#408d30" }}></i>
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </main>
  );
}

export default TabelPengukuranBalitaPuskesmas;

// import React, { useEffect } from 'react';
// import "../css/tabel-pengukuran-balita-puskesmas.css";
// import logoCentang from '../../aset/centang.png';

// function applyStatusStyle(element) {
//     element.style.color = "white";
//     element.style.borderRadius = "10px";
//     element.style.padding = "1px";
//     element.style.margin = "1px";

//     const statusValue = element.textContent;

//     switch (statusValue) {
//         case "Sangat Pendek":
//             element.style.backgroundColor = "darkred";
//             break;
//         case "Pendek":
//             element.style.backgroundColor = "red";
//             break;
//         case "Normal":
//             element.style.backgroundColor = "limegreen";
//             break;
//         case "Tinggi":
//             element.style.backgroundColor = "darkblue";
//             break;
//         case "Gizi Buruk":
//             element.style.backgroundColor = "darkred";
//             break;
//         case "Gizi Kurang":
//             element.style.backgroundColor = "red";
//             break;
//         case "Risiko Lebih":
//             element.style.backgroundColor = "dodgerblue";
//             break;
//         case "Gizi Lebih":
//             element.style.backgroundColor = "mediumblue";
//             break;
//         case "Obesitas":
//             element.style.backgroundColor = "darkblue";
//             break;
//         case "BB Sangat Kurang":
//             element.style.backgroundColor = "darkred";
//             break;
//         case "BB Kurang":
//             element.style.backgroundColor = "red";
//             break;
//         case "Risiko BB Lebih":
//             element.style.backgroundColor = "darkblue";
//             break;
//         case "Hijau Atas":
//             element.style.backgroundColor = "green";
//             break;
//         case "Hijau":
//             element.style.backgroundColor = "limegreen";
//             break;
//         case "Kuning":
//             element.style.backgroundColor = "gold";
//             break;
//         case "Merah":
//             element.style.backgroundColor = "red";
//             break;
//         default:
//             element.style.backgroundColor = "black";
//     }
//     }

//     function TabelPengukuranBalitaPuskesmas({idPuskesmas, apiAuth, idBalita}) {
//     useEffect(() => {
//         const statusTBUElements = document.querySelectorAll("[data-status_tbu]");
//         const statusBBTBElements = document.querySelectorAll("[data-status_bbtb]");
//         const statusBBUElements = document.querySelectorAll("[data-status_bbu]");
//         const statusKMSElements = document.querySelectorAll("[data-status_kms]");

//         statusTBUElements.forEach((statusElement) => {
//         const divElement = statusElement.querySelector(".validasi");
//         applyStatusStyle(divElement);
//         });

//         statusBBTBElements.forEach((statusElement) => {
//         const divElement = statusElement.querySelector(".validasi");
//         applyStatusStyle(divElement);
//         });

//         statusBBUElements.forEach((statusElement) => {
//         const divElement = statusElement.querySelector(".validasi");
//         applyStatusStyle(divElement);
//         });

//         statusKMSElements.forEach((statusElement) => {
//         const divElement = statusElement.querySelector(".validasi");
//         applyStatusStyle(divElement);
//         });
//     }, []);

//   return (
//     <main className="container">
//       <div className="container-fluid">
//         {/* Mulai isi kontennya disini */}
//         <h2 className="custom-judul">Data Pengukuran</h2>

//         <div className="p-3 mb-2 bg-light custom-border rounded">
//           <table className="table custom-table">
//             <thead>
//               <tr>
//                 <th scope="col">No</th>
//                 <th scope="col">Tanggal Lahir</th>
//                 <th scope="col">Tanggal Pengukuran</th>
//                 <th scope="col">Umur (Bulan)</th>
//                 <th scope="col">Posisi Pengukuran</th>
//                 <th scope="col">BB (Kg)</th>
//                 <th scope="col">TB (Cm)</th>
//                 <th scope="col">Status TB/U</th>
//                 <th scope="col">Status BB/TB</th>
//                 <th scope="col">Status BB/U</th>
//                 <th scope="col">Rambu Gizi</th>
//                 <th scope="col">KMS</th>
//                 <th scope="col">Ubah Pengukuran</th>
//             </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th scope="row">1</th>
//                     <td>21-05-2020</td>
//                     <td>20-09-2023</td>
//                     <td>40</td>
//                     <td>Berdiri</td>
//                     <td>160</td>
//                     <td>1200</td>
//                     <td data-status_tbu="Sangat Pendek">
//                         <div className="validasi rounded">Sangat Pendek</div>
//                     </td>
//                     <td data-status_bbtb="Gizi Buruk">
//                     <div className="validasi rounded">Gizi Buruk</div>
//                     </td>
//                     <td data-status_bbu="BB Sangat Kurang">
//                     <div className="validasi rounded">BB Sangat Kurang</div>
//                     </td>
//                     <td>N</td>
//                     <td data-status_kms="Hijau Atas">
//                     <div className="validasi rounded">Hijau Atas</div>
//                     </td>
//                     <td class="table-cell">
//                         <button class="fa-solid fa-pen-to-square"></button>
//                         <button class="btn btn-success btn-rounded btn-sm">Validasi</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row">2</th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td data-status_tbu="Pendek">
//                     <div className="validasi rounded">Pendek</div>
//                     </td>
//                     <td data-status_bbtb="Gizi Kurang">
//                     <div className="validasi rounded">Gizi Kurang</div>
//                     </td>
//                     <td data-status_bbu="BB Kurang">
//                     <div className="validasi rounded">BB Kurang</div>
//                     </td>
//                     <td>T</td>
//                     <td data-status_kms="Hijau">
//                     <div className="validasi rounded">Hijau</div>
//                     </td>
//                     <td className="table-cell">
//                         <button className="fa-solid fa-pen-to-square"></button>
//                         <button>
//                             <img src={logoCentang} className="img-fluid" style={{ width: '30px', verticalAlign: 'middle' }} />
//                         </button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row">3</th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td data-status_tbu="Normal">
//                     <div className="validasi rounded">Normal</div>
//                     </td>
//                     <td data-status_bbtb="Normal">
//                     <div className="validasi rounded">Normal</div>
//                     </td>
//                     <td data-status_bbu="Normal">
//                     <div className="validasi rounded">Normal</div>
//                     </td>
//                     <td>B</td>
//                     <td data-status_kms="Kuning">
//                     <div className="validasi rounded">Kuning</div>
//                     </td>
//                     <td className="table-cell">
//                         <button className="fa-solid fa-pen-to-square"></button>
//                         <button>
//                             <img src={logoCentang} className="img-fluid" style={{ width: '30px', verticalAlign: 'middle' }} />
//                         </button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row">4</th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td data-status_tbu="Tinggi">
//                     <div className="validasi rounded">Tinggi</div>
//                     </td>
//                     <td data-status_bbtb="Risiko Lebih">
//                     <div className="validasi rounded">Risiko Lebih</div>
//                     </td>
//                     <td data-status_bbu="Risiko BB Lebih">
//                     <div className="validasi rounded">Risiko BB Lebih</div>
//                     </td>
//                     <td>O</td>
//                     <td data-status_kms="Merah">
//                     <div className="validasi rounded">Merah</div>
//                     </td>
//                     <td className="table-cell">
//                         <button className="fa-solid fa-pen-to-square"></button>
//                         <button>
//                             <img src={logoCentang} className="img-fluid" style={{ width: '30px', verticalAlign: 'middle' }} />
//                         </button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row">5</th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td data-status_bbtb="Gizi Lebih">
//                     <div className="validasi rounded">Gizi Lebih</div>
//                     </td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td className="table-cell">
//                         <button className="fa-solid fa-pen-to-square"></button>
//                         <button>
//                             <img src={logoCentang} className="img-fluid" style={{ width: '30px', verticalAlign: 'middle' }} />
//                         </button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row">6</th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td data-status_bbtb="Obesitas">
//                     <div className="validasi rounded">Obesitas</div>
//                     </td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td className="table-cell">
//                         <button className="fa-solid fa-pen-to-square"></button>
//                         <button>
//                             <img src={logoCentang} className="img-fluid" style={{ width: '30px', verticalAlign: 'middle' }} />
//                         </button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     </div>
//     </main>
// );
// }

// export default TabelPengukuranBalitaPuskesmas;
