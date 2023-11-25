import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import "../css/tabel-daftar-posyandu-puskesmas.css";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function TabelDaftarPosyanduPuskesmas({ idPuskesmas }) {
    // const { idPuskesmas } = useParams();
    const [posyanduList, setPosyanduList] = useState([]);

    useEffect(() => {
        // Fetch posyandu data for the specific puskesmas
        axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}/posyandu`)
            .then(response => {
                setPosyanduList(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching posyandu:', error);
            });
    }, [idPuskesmas]);

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
    }, [idPuskesmas]);

    return (
        <main className="container">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Daftar Posyandu di Puskesmas</h2>

            <div className='table-responsive'>
                <table id="myTable" className="table custom-table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama Posyandu</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Ketua Kader</th>
                            <th scope="col">Nomor Telepon</th>
                            <th scope="col">Lihat Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posyanduList.map(posyandu => (
                            <tr key={posyandu.id}>
                                <th scope="row">{posyandu.id}</th>
                                <td>{posyandu.nama}</td>
                                <td>{posyandu.alamat}</td>
                                <td>{posyandu.ketua_kader}</td>
                                <td>{posyandu.nomor_telepon}</td>
                                <td>
                                    <button className="btn btn-info">Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default TabelDaftarPosyanduPuskesmas;