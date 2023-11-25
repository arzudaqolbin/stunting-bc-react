import React, { useEffect, useState } from "react";
import "../css/info-detail-posyandu-kelurahan.css";
import BASE_URL from "../../base/apiConfig";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function InfoDetailPosyanduKelurahan({idPosyandu}) {
  const [kader, setKader] = useState([]);
  const [posyandu, setPosyandu] = useState([]);
  const [puskesmas, setPuskesmas] = useState([]);
  const [username, setUsername] = useState([]);

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
  }, [idPosyandu]);
  
  // fetch data Posyandu
  useEffect(() => {
    const fetchData = async () => {
        try {
          // nanti ganti api dengan getKader by idPosyandu
            const result = await axios.get(`${BASE_URL}/posyandu/${idPosyandu}`);
            // const result = await axios.get(`${BASE_URL}/kader/posyandu/${idPosyandu}`);
            setPosyandu(result.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
    fetchData();
  }, [idPosyandu]);
  
  // fetch data kader Posyandu
  useEffect(() => {
    const fetchData = async () => {
      try {
        // nanti ganti api dengan getKader by idPosyandu
        const result = await axios.get(`${BASE_URL}/posyandu/${idPosyandu}/kader`);
        // const result = await axios.get(`${BASE_URL}/kader/posyandu/${idPosyandu}`);
        setKader(result.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
    fetchData();
  }, [idPosyandu]);

  // fetch data Puskesmas
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result2 = await axios.get(`${BASE_URL}/puskesmas/${posyandu.puskesmas_id}}`);
            setPuskesmas(result2.data);
            
            // const result3 = await axios.get(`${BASE_URL}/user/${posyandu.user_id}}`);
            // setUsername(result3.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
    fetchData();
  }, [posyandu.puskesmas_id]);
  
  // fetch data Username
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result3 = await axios.get(`${BASE_URL}/user/${posyandu.user_id}}`);
            setUsername(result3.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
    fetchData();
  }, [posyandu.user_id]);
      
  console.log(kader)
  console.log(posyandu)
  console.log(posyandu.user_id)
  console.log(puskesmas)
  console.log(username)
      
  return (
    <main className="container">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">{posyandu.nama}</h2>

        <p className="h6" style={{ fontWeight: "bold" }}>
          Detail Akun
        </p>
        <ul className="list-unstyled">
          <li>
            <ul style={{ fontSize: "15px" }}>
              <table>
                <tr>
                  <td>Nama Posyandu &nbsp;</td>
                  <td>: {posyandu.nama}</td>
                </tr>
                <tr>
                  <td>Naungan &nbsp;</td>
                  <td>: {puskesmas.nama}</td>
                </tr>
                <tr>
                  <td>Alamat &nbsp;</td>
                  <td>
                    : {posyandu.alamat}
                  </td>
                </tr>
                <tr>
                  <td>Nomor Telepon &nbsp;</td>
                  <td>: {posyandu.nomor_telepon}</td>
                </tr>
                <tr>
                  <td>Username &nbsp;</td>
                  <td>: {username.username}</td>
                </tr>
              </table>
            </ul>
          </li>
        </ul>

        <div style={{ textAlign: "right" }}>
          <Link to={`/edit-posyandu/${idPosyandu}`}>
            <button className="btn">Edit Data</button>
          </Link>
        </div>

        <p className="h6" style={{ fontWeight: "bold" }}>
          Pengurus Kader
        </p>
          <div className="table-responsive">
            <table id="myTable" className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">Jabatan</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Ubah Pengurus</th>
                </tr>
              </thead>
              <tbody>

                {/* Untuk KETUA */}
                  { 
                  kader.filter((k) => k.jabatan === "Ketua").length === 1 ? (
                    kader.filter((k) => k.jabatan === "Ketua").map((ketua) => (
                      <tr key={ketua.id}>
                        <td>Ketua</td>
                        <td>{ketua.nama}</td>
                        <td>
                          <Link to={`/edit-kader/${ketua.id}`}>
                            <button className="fa-solid fa-pen-to-square"></button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Ketua</td>
                      <td><i>belum terdaftar</i></td>
                      <td>
                        <Link to={`/tambah-kader/ketua/${idPosyandu}`}>
                          <button className="fa-solid fa-pen-to-square"></button>
                        </Link>
                      </td>
                    </tr>
                  )
                }

                {/* Untuk SEKRETARIS */}
                  { 
                  kader.filter((k) => k.jabatan === "Sekretaris").length === 1 ? (
                    kader.filter((k) => k.jabatan === "Sekretaris").map((Sekretaris) => (
                      <tr key={Sekretaris.id}>
                        <td>Sekretaris</td>
                        <td>{Sekretaris.nama}</td>
                        <td>
                          <Link to={`/edit-kader/${Sekretaris.id}`}>
                            <button className="fa-solid fa-pen-to-square"></button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Sekretaris</td>
                      <td><i>belum terdaftar</i></td>
                      <td>
                        <Link to={`/tambah-kader/ketua/${idPosyandu}`}>
                          <button className="fa-solid fa-pen-to-square"></button>
                        </Link>
                      </td>
                    </tr>
                  )
                }
                
                {/* Untuk BENDAHARA */}
                  { 
                  kader.filter((k) => k.jabatan === "Bendahara").length === 1 ? (
                    kader.filter((k) => k.jabatan === "Bendahara").map((Bendahara) => (
                      <tr key={Bendahara.id}>
                        <td>Bendahara</td>
                        <td>{Bendahara.nama}</td>
                        <td>
                          <Link to={`/edit-kader/${Bendahara.id}`}>
                            <button className="fa-solid fa-pen-to-square"></button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Bendahara</td>
                      <td><i>belum terdaftar</i></td>
                      <td>
                        <Link to={`/tambah-kader/ketua/${idPosyandu}`}>
                          <button className="fa-solid fa-pen-to-square"></button>
                        </Link>
                      </td>
                    </tr>
                  )
                }

                {/* Untuk ANGGOTA */}
                <tr>
                  <td rowSpan={kader.filter((k) => k.jabatan === "Anggota").length + 1}>Anggota Kader</td>
                  <td><i>silahkan tambah anggota</i></td>
                  <td>
                    <Link to={`/tambah-kader/anggota/${idPosyandu}`}>
                      <button><i class="fa-solid fa-plus" style={{color: "#0a9e59"}}></i></button>
                    </Link>
                  </td>
                </tr>
                {
                  (kader.filter((k) => k.jabatan === "Anggota").map((anggota) => (
                    <tr key={anggota.id}>
                      <td>{anggota.nama}</td>
                      <td>
                        <Link to={`edit-kader/${anggota.id}`}>
                          <button className="fa-solid fa-pen-to-square"></button>
                        </Link>
                          <button><i class="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  )))
                }
              </tbody>
            </table>
          </div>
    </main>
  );
}

export default InfoDetailPosyanduKelurahan;
