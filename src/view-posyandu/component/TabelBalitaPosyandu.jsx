import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/tabel-balita-posyandu.css";
import BASE_URL from "../../base/apiConfig";
import { Link } from "react-router-dom";
import $ from 'jquery';
import 'datatables.net';
import { ClipLoader } from 'react-spinners';
// import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function TabelBalitaPosyandu({ idPosyandu, apiAuth }) {
  const [balita, setBalita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (!$.fn.DataTable.isDataTable('#myTable')) {
      $('#myTable').DataTable({
        "aaSorting": [],
        "language": {
          "lengthMenu": "Menampilkan _MENU_ data per halaman",
          "zeroRecords": "Tidak ada izin masuk",
          "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
          "infoEmpty": "Tidak ada data tersedia",
          "infoFiltered": "(Disaring dari _MAX_ data total)",
          "decimal": "",
          "emptyTable": "Tidak ada izin masuk",
          "loadingRecords": "Memuat...",
          "processing": "Memproses...",
          "search": 'Pencarian <i class="bi bi-search"></i> ',
          "searchPlaceholder": 'keyword...',
          "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            // "next": "Selanjutnya",
            // "previous": "Sebelumnya"
            "previous": 'Prev  <i class="bi bi-chevron-double-left"></i>',
            "next": '<i class="bi bi-chevron-double-right"></i>  Next'
          },
          "aria": {
            "sortAscending": ": klik untuk mengurutkan A-Z",
            "sortDescending": ": klik untuk mengurutkan Z-A"
          }
        }
      });
    }
  }, [balita]);

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
          "search": 'Cari:  <i class="bi bi-search"></i> ',
          "searchPlaceholder": 'Cari data balita...',
          "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            // "next": "Selanjutnya",
            // "previous": "Sebelumnya"
            "previous": 'Prev  <i class="bi bi-chevron-double-left"></i>',
            "next": '<i class="bi bi-chevron-double-right"></i>  Next'
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
        `${BASE_URL}/balitas/posyandu/${idPosyandu}`, apiAuth
      );
      setBalita(result.data.balitas);
      setLoading(false);
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

  useEffect(() => {
    loadDataBalita();
  }, []);

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

  // perbaiki ini pak
  const getStatusTBUClass = (status) => {
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
            <div className="container-fluid">
              {/* Mulai isi kontennya disini */}
              <h2 className="custom-judul">Daftar Balita Posyandu</h2>

              {/* <form className="d-flex align-items-center">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Cari nama balita..."
                  aria-label="Search"
                />
                <button className="btn btn-success btn-rounded btn-sm" type="submit">
                  Cari
                </button>
              </form> */}

              <div className="table-responsive">
                <table id="myTable" className="table custom-table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Balita</th>
                      <th scope="col">Jenis Kelamin</th>
                      <th scope="col">Nama Orang Tua</th>
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
                        <td>{data.nama_ortu}</td>
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
                          <Link to={`/posyandu/detail-balita/${data.id}`} >
                            <button className="btn btn-info">Info</button>
                          </Link>
                        </td>
                      </tr >
                    ))
                    }
                    {/* <tr key="12">
                  <th scope="row">12</th>
                  <td>aaa</td>
                  <td>bbb</td>
                  <td>12</td>
                  <td>12</td>
                  <td data-status_tbu="q2e">
                    <div className="status rounded">123</div>
                  </td>
                  <td data-status_bbtb="123">
                    <div className="status rounded">erv</div>
                  </td>
                  <td data-status_bbu="123">
                    <div className="status rounded">xyz</div>
                  </td>
                  <td>
                    <Link to={`/posyandu/${idPosyandu}/detail-balita/1`} >
                      <button className="btn btn-info">Info</button>
                    </Link>
                  </td>
                </tr> */}
                  </tbody >
                </table >
              </div >
            </div >
          </main >)
      }
    </>
  );
}

export default TabelBalitaPosyandu;
