import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BASE_URL from '../../base/apiConfig';
import "../css/tabel-daftar-puskesmas-kelurahan.css";
import { ClipLoader } from 'react-spinners';

function TabelDaftarPuskesmasKelurahan({idKelurahan, apiAuth }) {

    const [puskesmasList, setPuskesmasList] = useState([]);
    const [loading, setLoading] = useState(true)

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
    }, []);

    return (
        <>
    {
      loading ?(
      <div className='text-center'>
        <ClipLoader
          loading={loading}
          size={150}
        />
      </div>) : (
        <main className="container">
            <div className="container-fluid">
                {/* Mulai isi kontennya disini */}
                <h2 className="custom-judul">Daftar Puskesmas di Kelurahan Bidara Cina</h2>

                <form className="d-flex align-items-center">
                    <input className="form-control me-2" type="text" placeholder="Cari nama puskesmas..." aria-label="Search" />
                    <button className="btn btn-success btn-rounded btn-sm" type="submit">Cari</button>
                </form>

                <div className="p-3 mb-2 bg-light custom-border rounded">
                    <table className="table custom-table">
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

                <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
                    <Link to="/kelurahan/tambah-puskesmas" className="btn btn-success btn-rounded btn-sm">+ Tambah Puskesmas</Link>
                </div>
            </div>
        </main>)
    }
    </>
    );
}

export default TabelDaftarPuskesmasKelurahan;
