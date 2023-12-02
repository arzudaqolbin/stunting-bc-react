import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BASE_URL from "../../base/apiConfig";
import "../css/tabel-daftar-posyandu-kelurahan.css";
import { ClipLoader } from "react-spinners";
import $ from "jquery";
import "datatables.net";
// import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function TabelDaftarPosyanduKelurahan({ idKelurahan, apiAuth }) {
  const [posyanduList, setPosyanduList] = useState([]);
  // const [puskesmasList, setPuskesmasList] = useState([]);
  // const [selectedPuskesmas, setSelectedPuskesmas] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $("#myTable").DataTable({
        aaSorting: [],
        language: {
          lengthMenu: "Menampilkan _MENU_ data tiap halaman",
          zeroRecords: "Data tidak ditemukan",
          info: "Menampilkan halaman _PAGE_ dari _PAGES_",
          infoEmpty: "Tidak ada data tersedia",
          infoFiltered: "(Disaring dari _MAX_ data total)",
          decimal: "",
          emptyTable: "Data tidak tersedia",
          loadingRecords: "Memuat...",
          processing: "Memproses...",
          search: 'Cari:  <i class="bi bi-search"></i> ',
          searchPlaceholder: "Cari data balita...",
          paginate: {
            first: "Pertama",
            last: "Terakhir",
            // "next": "Selanjutnya",
            // "previous": "Sebelumnya"
            previous: 'Prev  <i class="bi bi-chevron-double-left"></i>',
            next: '<i class="bi bi-chevron-double-right"></i>  Next',
          },
          aria: {
            sortAscending: ": klik untuk mengurutkan A-Z",
            sortDescending: ": klik untuk mengurutkan Z-A",
          },
        },
      });
    }
  }, []);

  // useEffect(() => {
  //   // Panggil API untuk mendapatkan daftar posyandu
  //   axios
  //     .get(`${BASE_URL}/posyandu`, apiAuth)
  //     .then((response) => {
  //       // setPosyanduList(response.data.data);
  //       setPosyanduList(response.data.data);
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching posyandu:", error);
  //     });
  useEffect(() => {

    // Panggil API untuk mendapatkan daftar posyandu
    axios
      .get(`${BASE_URL}/posyandu`, apiAuth)
      .then((response) => {
        // setPosyanduList(response.data.data);
        setLoading(false);
        setPosyanduList(response.data.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posyandu:", error);
      });
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
  }, [posyanduList]);

  //   // Panggil API untuk mendapatkan daftar puskesmas
  //   axios
  //     .get(`${BASE_URL}/puskesmas`, apiAuth)
  //     .then((response) => {
  //       setPuskesmasList(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching puskesmas:", error);
  //     });
  //   setLoading(false);
  // }, []);


  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <main className="container">
          {/* Mulai isi kontennya disini */}
          <h2 className="custom-judul">
            Daftar Posyandu di Kelurahan Bidara Cina
          </h2>

          <div className="table-responsive">
            <table id="myTable" className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nama Posyandu</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Nomor Telepon</th>
                  {/* <th scope="col">Nama Puskesmas</th> */}
                  <th scope="col">Lihat Detail</th>
                </tr>
              </thead>
              <tbody>
                {posyanduList.map((posyandu) => (
                  <tr key={posyandu.id}>
                    <th scope="row">{posyandu.id}</th>
                    <td>{posyandu.nama}</td>
                    <td>{posyandu.alamat}</td>
                    <td>{posyandu.nomor_telepon}</td>
                    {/* <td>{posyandu.puskesmas.nama}</td> */}
                    <td>
                      <Link
                        to={`/kelurahan/detail-posyandu/${posyandu.id}`}
                        className="btn btn-info"
                      >
                        Info
                      </Link>
                      <Link
                        to={`/kelurahan/edit-posyandu/${posyandu.id}`}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              textAlign: "right",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Link
              to="/kelurahan/tambah-posyandu"
              className="btn btn-success btn-rounded btn-sm"
            >
              + Tambah Posyandu
            </Link>
          </div>
        </main>
      )}
    </>
  );
}

export default TabelDaftarPosyanduKelurahan;
