import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BASE_URL from '../../base/apiConfig';
import "../css/tabel-daftar-puskesmas-kelurahan.css";
import { ClipLoader } from 'react-spinners';
import $ from 'jquery';
import 'datatables.net';
// import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function TabelDaftarPuskesmasKelurahan({ idKelurahan, apiAuth }) {
    const [puskesmasList, setPuskesmasList] = useState([]);
    const [loading, setLoading] = useState(true)

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
    }, [puskesmasList]);

    useEffect(() => {
        // Panggil API untuk mendapatkan daftar puskesmas
        axios.get(`${BASE_URL}/puskesmas`, apiAuth)
            .then(response => {
                setPuskesmasList(response.data.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching puskesmas:', error);
            });
        $('.custom-table').DataTable();
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
                        <h2 className="custom-judul">Daftar Puskesmas di Kelurahan Bidara Cina</h2>

                        <div className='table-responsive'>
                            <table id="myTable" className="table custom-table" data-toggle="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nama Puskesmas</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Nomor Telepon</th>
                                        <th scope="col">Lihat Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {puskesmasList.map(puskesmas => (
                                        <tr key={puskesmas.id}>
                                            <th scope="row">{puskesmas.id}</th>
                                            <td>{puskesmas.nama}</td>
                                            <td>{puskesmas.alamat}</td>
                                            <td>{puskesmas.nomor_telepon}</td>
                                            <td>
                                                <Link to={`/kelurahan/detail-puskesmas/${puskesmas.id}`} className="btn btn-info">Info</Link>
                                                <Link to={`/kelurahan/edit-puskesmas/${puskesmas.id}`} className="btn btn-warning">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main >)
            }
        </>
    );
}

export default TabelDaftarPuskesmasKelurahan;
