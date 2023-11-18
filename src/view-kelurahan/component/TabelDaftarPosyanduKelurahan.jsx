import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BASE_URL from '../../base/apiConfig';
import "../css/tabel-daftar-posyandu-kelurahan.css";

function TabelDaftarPosyanduKelurahan() {

    const [posyanduList, setPosyanduList] = useState([]);
    const [puskesmasList, setPuskesmasList] = useState([]);
    const [selectedPuskesmas, setSelectedPuskesmas] = useState("");

    useEffect(() => {
        // Panggil API untuk mendapatkan daftar posyandu
        axios.get(`${BASE_URL}/posyandu`)
            .then(response => {
                // setPosyanduList(response.data.data);
                setPosyanduList(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching posyandu:', error);
            });

        // Panggil API untuk mendapatkan daftar puskesmas
        axios.get(`${BASE_URL}/puskesmas`)
            .then(response => {
                setPuskesmasList(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching puskesmas:', error);
            });
    }, []);

    const handlePuskesmasChange = (e) => {
        setSelectedPuskesmas(e.target.value);
    };

    const filteredPosyanduList = selectedPuskesmas
        ? posyanduList.filter(posyandu => posyandu.puskesmas_id === parseInt(selectedPuskesmas))
        : posyanduList;

    return (
        <main className="container">
            <div className="container-fluid">
                {/* Mulai isi kontennya disini */}
                <h2 className="custom-judul">Daftar Posyandu di Kelurahan Bidara Cina</h2>

                <form className="d-flex align-items-center">
                    <div className="mb-3">
                        <label htmlFor="puskesmasDropdown" className="form-label">Filter berdasarkan Puskesmas</label>
                        <select
                            id="puskesmasDropdown"
                            className="form-select"
                            value={selectedPuskesmas}
                            onChange={handlePuskesmasChange}
                        >
                            <option value="">Semua Puskesmas</option>
                            {puskesmasList.map(puskesmas => (
                                <option key={puskesmas.id} value={puskesmas.id}>
                                    {puskesmas.nama}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input className="form-control me-2" type="text" placeholder="Cari nama posyandu..." aria-label="Search" />
                    <button className="btn btn-success btn-rounded btn-sm" type="submit">Cari</button>
                </form>

                <div className="p-3 mb-2 bg-light custom-border rounded">
                    <table className="table custom-table">
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
                            {filteredPosyanduList.map(posyandu => (
                                <tr key={posyandu.id}>
                                    <th scope="row">{posyandu.id}</th>
                                    <td>{posyandu.nama}</td>
                                    <td>{posyandu.alamat}</td>
                                    <td>{posyandu.nomor_telepon}</td>
                                    {/* <td>{posyandu.puskesmas.nama}</td> */}
                                    <td>
                                        <Link to={`/kelurahan/detail-posyandu/${posyandu.id}`} className="btn btn-info">Info</Link>
                                        <Link to={`/kelurahan/edit-posyandu/${posyandu.id}`} className="btn btn-warning">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
                    <Link to="/kelurahan/tambah-posyandu" className="btn btn-success btn-rounded btn-sm">+ Tambah Posyandu</Link>
                </div>
            </div>
        </main>
    );
}

export default TabelDaftarPosyanduKelurahan;
