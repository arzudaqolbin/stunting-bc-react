import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL, { errorHandling } from '../../base/apiConfig';
import "../css/tabel-daftar-posyandu-puskesmas.css";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import $ from 'jquery';
import 'datatables.net';
// import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function TabelDaftarPosyanduPuskesmas({ idPuskesmas, apiAuth }) {
    // const { idPuskesmas } = useParams();
    const [posyanduList, setPosyanduList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch posyandu data for the specific puskesmas
        axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}/posyandu`, apiAuth)
            .then(response => {
                setPosyanduList(response.data.data);
                setLoading(false)
            })
            .catch(error => {
                errorHandling(error)
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
    }, [posyanduList]);

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
                        <h2 className="custom-judul">Daftar Posyandu di Puskesmas</h2>

                        <div className='table-responsive'>
                            <table id="myTable" className="table custom-table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nama Posyandu</th>
                                        <th scope="col" className='text-center' >Alamat</th>
                                        <th scope="col" >RW</th>
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
                                            <td>{posyandu.rw}</td>
                                            <td>{posyandu.kepala}</td>
                                            <td>{posyandu.nomor_telepon}</td>
                                            <td>
                                                <Link
                                                    to={`/puskesmas/detail-posyandu/${posyandu.id}`}>
                                                    <button className="btn btn-info d-flex align-items-center"><i class="fa-solid fa-circle-info"></i> Info</button>

                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div >
                    </main >)
            }
        </>
    )
}

export default TabelDaftarPosyanduPuskesmas;