import React, { useEffect, useState } from "react";
import "../css/tabel-pengukuran-balita-posyandu.css";
// import * as XLSX from "xlsx";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net';
import logoCentang from '../../aset/centang.png';

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

function TabelPengukuranBalitaPosyandu({ idPosyandu, apiAuth, idBalita }) {
  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const [loadData, setLoadData ] = useState(false)

  // useEffect(() => {
  //   // Inisialisasi DataTable hanya pada mounting pertama
  //   const myTable = $('.custom-table');
  
  //   if ($.fn.DataTable.isDataTable(myTable)) {
  //     myTable.DataTable().destroy(); // Hapus DataTable sebelum inisialisasi ulang
  //   }
  
  //   myTable.DataTable({
  //     "aaSorting": [],
  //     "language": {
  //       "lengthMenu": "Menampilkan _MENU_ data tiap halaman",
  //       "zeroRecords": "Data tidak ditemukan",
  //       "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
  //       "infoEmpty": "Tidak ada data tersedia",
  //       "infoFiltered": "(Disaring dari _MAX_ data total)",
  //       "decimal": "",
  //       "emptyTable": "Data tidak tersedia",
  //       "loadingRecords": "Memuat...",
  //       "processing": "Memproses...",
  //       "search": 'Pencarian:   <i class="bi bi-search"></i> ',
  //       "searchPlaceholder": "cari data pengukuran...",
  //       "paginate": {
  //         "first": "Pertama",
  //         "last": "Terakhir",
  //         "previous": 'Prev     <i class="bi bi-chevron-double-left"></i>',
  //         "next": '<i class="bi bi-chevron-double-right"></i>     Next'
  //       },
  //       "aria": {
  //         "sortAscending": ": klik untuk mengurutkan A-Z",
  //         "sortDescending": ": klik untuk mengurutkan Z-A"
  //       }
  //     }
  //   });
  // }, [dataPengukuran]);

  useEffect(() => {
    const fetchData = async () => {
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${BASE_URL}/balitas/${idBalita}`,
          apiAuth
        );
        setTanggalLahir(result.data.tgl_lahir);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tanggalLahir]);

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

      <Link to={`/posyandu/tambah-pengukuran/${idBalita}`} className='btn btn-primary'>Tambah Pengukuran</Link>
          <div className='table-responsive'>
            <table id='myTable' className="table custom-table">
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
                    <td>
                      {pengukuran.validasi == true ? (
                        <div className="tervalidasi rounded">Tervalidasi</div>)
                        :
                        (
                          <Link to={`/posyandu/edit-pengukuran/${pengukuran.id}`}>
                            <button className="fa-solid fa-pen-to-square"></button>
                          </Link>
                        )}
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

        {/* <script>
        $(document).ready(function () {
        $('#myTable').DataTable({
          // DataTable options...
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
        })
        });
        </script> */}
    </main>
  );
}

export default TabelPengukuranBalitaPosyandu;
