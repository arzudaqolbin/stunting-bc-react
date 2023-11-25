import React, {useState, useEffect} from 'react';
import "../css/detail-posyandu-puskesmas.css";
import BASE_URL from "../../base/apiConfig";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function InfoDetailPosyanduPuskesmas({idPosyandu}) {
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

    return (
        <main className="container">
        <div className="container-fluid">
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

        {/* <div style={{ textAlign: "right" }}>
            <Link to={`/edit-posyandu/${idPosyandu}`}>
            <button className="btn">Edit Data</button>
            </Link>
        </div> */}

        <p className="h6" style={{ fontWeight: "bold" }}>
            Pengurus Kader
        </p>
        <div className='table-responsive'>
          <table id="myTable" className="table custom-table">
            <thead>
                <tr>
                <th scope="col">Jabatan</th>
                <th scope="col">Nama</th>
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
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>Ketua</td>
                    <td><i>belum terdata</i></td>
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
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>Sekretaris</td>
                    <td><i>belum terdata</i></td>
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
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>Bendahara</td>
                    <td><i>belum terdata</i></td>
                    </tr>
                )
                }

                {/* Untuk ANGGOTA */}
                <tr>
                <td rowSpan={kader.filter((k) => k.jabatan === "Anggota").length + 1}>Anggota Kader</td>
                <td><i>Jumlah anggota terdaftar : {kader.filter((k) => k.jabatan === "Anggota").length}</i></td>
                </tr>
                {
                (kader.filter((k) => k.jabatan === "Anggota").map((anggota) => (
                    <tr key={anggota.id}>
                    <td>{anggota.nama}</td>
                    </tr>
                )))
                }
            </tbody>
            </table>
          </div>
        </div>
        </main>
    );
}

export default InfoDetailPosyanduPuskesmas;
