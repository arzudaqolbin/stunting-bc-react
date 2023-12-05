import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/tabel-daftar-balita-puskesmas.css";
import BASE_URL from "../../base/apiConfig";
import Statistik from "../../view-publik/component/Statistik";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
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

function TabelBalitaPuskesmas({ idPuskesmas, apiAuth }) {
  const [balita, setBalita] = useState([]);
  const [posyandu, setPosyandu] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Inisialisasi DataTable hanya pada mounting pertama
  //   if (!$.fn.DataTable.isDataTable("#myTable")) {
  //     $("#myTable").DataTable({
  //       aaSorting: [],
  //       language: {
  //         lengthMenu: "Menampilkan _MENU_ data tiap halaman",
  //         zeroRecords: "Data tidak ditemukan",
  //         info: "Menampilkan halaman _PAGE_ dari _PAGES_",
  //         infoEmpty: "Tidak ada data tersedia",
  //         infoFiltered: "(Disaring dari _MAX_ data total)",
  //         decimal: "",
  //         emptyTable: "Data tidak tersedia",
  //         loadingRecords: "Memuat...",
  //         processing: "Memproses...",
  //         search: 'Cari:  <i class="bi bi-search"></i> ',
  //         searchPlaceholder: "Cari data balita...",
  //         paginate: {
  //           first: "Pertama",
  //           last: "Terakhir",
  //           // "next": "Selanjutnya",
  //           // "previous": "Sebelumnya"
  //           previous: 'Prev  <i class="bi bi-chevron-double-left"></i>',
  //           next: '<i class="bi bi-chevron-double-right"></i>  Next',
  //         },
  //         aria: {
  //           sortAscending: ": klik untuk mengurutkan A-Z",
  //           sortDescending: ": klik untuk mengurutkan Z-A",
  //         },
  //       },
  //     });
  //   }

  //   loadDataBalita()
  //   loadPosyandu()
  // }, [balita]);

  useEffect(() => {
    loadDataBalita();
    loadPosyandu();
  }, []);

  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (balita.length > 0) {
      initializeDataTable();
    }
  }, [balita]);

  const initializeDataTable = () => {
    // Inisialisasi DataTable
    if (!$.fn.DataTable.isDataTable("#myTable")) {
    const table = $("#myTable").DataTable({
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
        // ... Konfigurasi bahasa DataTable
      },
    });

    // Hapus event listener sebelumnya untuk mencegah memory leak
    table.off("draw");

    // Tambahkan event listener untuk handle redrawing DataTable
    table.on("draw", () => {
      // ... Logika atau manipulasi setelah DataTable digambar ulang
    });
  }
  };

  const loadDataBalita = async () => {
    try {
      const result = await axios.get(
        `${BASE_URL}/balitas/puskesmas/${idPuskesmas}`,
        apiAuth
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

  const loadPosyandu = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posyandu`, apiAuth);
      setPosyandu(response.data.data);
    } catch (error) {
      console.error("Error fetching posyandu data:", error);
    }
  };

  useEffect(() => {
    loadDataBalita();
    loadPosyandu();
  }, []);

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

  const getPosyanduName = (posyanduId) => {
    const posyanduData =
      posyandu.length > 0 ? posyandu.find((p) => p.id === posyanduId) : null;
    return posyanduData ? posyanduData.nama : "";
  };

  const deleteBalita = (id_balita) => {
    Swal.fire({
      title: "Ketikkan 'saya yakin' untuk menghapus data balita",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Yakin",
      showLoaderOnConfirm: true,
      preConfirm: async (inputText) => {
        // Validasi input
        if (inputText.toLowerCase() !== "saya yakin") {
          Swal.showValidationMessage("Ketikkan 'saya yakin'");
        } else {
          // Jika valid, lakukan aksi yang diinginkan
          try {
            await axios.delete(`${BASE_URL}/balitas/${id_balita}`, apiAuth);
            // Tampilkan pesan berhasil jika berhasil
            loadDataBalita();
            Swal.fire({
              title: "Berhasil",
              text: "Hapus Balita berhasil",
              icon: "success"
            });
          } catch (error) {
            console.error("Error deleting balita data:", error);
            // Tampilkan pesan kesalahan kepada pengguna
            Swal.fire({
              title: "Gagal",
              text: "Hapus Balita gagal",
              icon: "error"
            });
          }
          
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
    
  }

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <main className="container">
          {/* Mulai isi kontennya disini */}
          <h2 className="custom-judul">Daftar Balita Puskemas</h2>

          <div className="table-responsive">
            <table id="myTable" className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama Balita</th>
                  <th scope="col">Jenis Kelamin</th>
                  <th scope="col">Nama Posyandu</th>
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
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.nama}</td>
                    <td>{data.jenis_kelamin}</td>
                    <td>{getPosyanduName(data.posyandu_id)}</td>
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
                      <Link
                        to={`/puskesmas/detail-balita/${data.id}`}
                        className="btn btn-info mr-2 d-flex align-items-center"
                      >
                        <i class="fa-solid fa-circle-info"></i> Info
                      </Link>
                      <button className="btn btn-danger ml-2 d-flex align-items-center" onClick={ () => deleteBalita(data.id)}><i class="fa-solid fa-trash"></i> Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <Statistik />
          {/* </div > */}
        </main>
      )}
    </>
  );
}

export default TabelBalitaPuskesmas;
