import React, { useEffect, useState } from "react";
import "../css/tabel-daftar-pengukuran-balita-stunting.css";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net';
import * as XLSX from 'xlsx';

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

function TabelPengukuranBalitaStunting({ apiAuth, idBalita }) {
  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const [namaBalita, setNamaBalita] = useState(null);
  const [loadData, setLoadData ] = useState(false);

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
  }, [dataPengukuran]);

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
        <button onClick={exportToXLSX} className='btn btn-primary'>Export Table</button>
      </div>
    </main>
  );
}

export default TabelPengukuranBalitaStunting;
