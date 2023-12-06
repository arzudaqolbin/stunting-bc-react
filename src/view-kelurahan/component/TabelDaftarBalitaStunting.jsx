import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/tabel-daftar-balita-stunting.css";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { ClipLoader } from "react-spinners";
import $ from 'jquery';
import 'datatables.net';
import { Link } from "react-router-dom";
import Statistik from "../../view-publik/component/Statistik";
import Swal from "sweetalert2";

function applyStatusStyle(statusValue) {
  switch (statusValue) {
    case "Sangat Pendek":
      return {
        backgroundColor: "darkred",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
        fontWeight: 'bold'
      };
    case "Pendek":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
        fontWeight: 'bold'
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
        fontWeight: 'bold'
      };
    case "Gizi Kurang":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
        fontWeight: 'bold'
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
        fontWeight: 'bold'
      };
    case "BB Sangat Kurang":
      return {
        backgroundColor: "darkred",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
        fontWeight: 'bold'
      };
    case "BB Kurang":
      return {
        backgroundColor: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
        fontWeight: 'bold'
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
        fontWeight: 'bold'
      };
    default:
      return {
        backgroundColor: "white",
        color: "white",
        borderRadius: "10px",
        padding: "1px",
        margin: "1px",
      };
  }
}

function TabelDaftarBalitaStunting({ apiAuth }) {
  const [balita, setBalita] = useState([]);
  const [loading, setLoading] = useState(true)
  console.log(balita);

  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (!$.fn.DataTable.isDataTable('#myTable')) {
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
          "searchPlaceholder": "cari data balita...",
          "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            // "next": "Selanjutnya",
            // "previous": "Sebelumnya"
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
  }, [balita]);

  const loadDataBalita = async () => {
    try {
      const result = await axios.get(
        `${BASE_URL}/balitas/kelurahan/stunting`,
        apiAuth
      );
      setBalita(result.data.balitas);
      setLoading(false)
    } catch (error) {
      errorHandling(error);
    }
  };

  // const getStatusTBUClass = (status) => {
  //   if (status === "Sangat Pendek") {
  //     return "status rounded darkred";
  //   } else if (status === "Pendek") {
  //     return "status rounded red";
  //   } else if (status === "Normal") {
  //     return "status rounded limegreen";
  //   } else if (status === "Tinggi") {
  //     return "status rounded darkblue";
  //   } else {
  //     return "status rounded black";
  //   }
  // };

  // const getStatusBBUClass = (status) => {
  //   if (status === "BB Sangat Kurang") {
  //     return "status rounded darkred";
  //   } else if (status === "BB Kurang") {
  //     return "status rounded red";
  //   } else if (status === "Normal") {
  //     return "status rounded limegreen";
  //   } else if (status === "Risiko BB Lebih") {
  //     return "status rounded darkblue";
  //   } else {
  //     return "status rounded black";
  //   }
  // };

  // const getStatusBBTBClass = (status) => {
  //   if (status === "Gizi Buruk") {
  //     return "status rounded darkred";
  //   } else if (status === "Gizi Kurang") {
  //     return "status rounded red";
  //   } else if (status === "Normal") {
  //     return "status rounded limegreen";
  //   } else if (status === "Risiko Lebih") {
  //     return "status rounded dodgerblue";
  //   } else if (status === "Gizi Lebih") {
  //     return "status rounded mediumblue";
  //   } else if (status === "Obesitas") {
  //     return "status rounded darkblue";
  //   } else {
  //     return "status rounded black";
  //   }
  // };

  useEffect(() => {
    loadDataBalita();
  }, []);

  return (
    <>
      {
        loading ? (
          <div className='text-center'>
            <ClipLoader
              loading={loading}
              size={150}
            />
          </div>) : (
          <main className="container">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Daftar Balita Stunting</h2>

            <div className="table-responsive">
              <table id="myTable" className="table custom-table">
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
                      <td>{data.rw}</td>
                      <td>{data.umur}</td>
                      <td data-status_tbu={data.status_tbu}>
                      <div className="validasi rounded" style={applyStatusStyle(data.status_tbu)}>
                          {data.status_tbu}
                        </div>
                      </td>
                      <td data-status_bbtb={data.status_bbtb}>
                      <div className="validasi rounded" style={applyStatusStyle(data.status_bbtb)}>
                          {data.status_bbtb}
                        </div>
                      </td>
                      <td data-status_bbu={data.status_bbu}>
                      <div className="validasi rounded" style={applyStatusStyle(data.status_bbu)}>
                          {data.status_bbu}
                        </div>
                      </td>
                      <td className="d-flex">
                        <Link to={`/kelurahan/detail-balita/${data.id}`} className="btn btn-info d-flex align-items-center">
                          <i class="fa-solid fa-circle-info"></i> Info
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Statistik />
          </main>)
      }
    </>
  );
}

export default TabelDaftarBalitaStunting;
