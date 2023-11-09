import React from 'react';
import "../css/tabel-daftar-posyandu-puskesmas.css";

function TabelDaftarPosyanduPuskesmas() {
    return(
        <main className="container">
        <div className="container-fluid">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Daftar Posyandu di Puskesmas</h2>

            <form className="d-flex align-items-center">
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
                        <th scope="col">Ketua Kader</th>
                        <th scope="col">Nomor Telepon</th>
                        <th scope="col">Lihat Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Posyandu Kencana Ungu</td>
                        <td>Jl. Sensus No. 4</td>
                        <td>Ibu Ayu</td>
                        <td>021021021</td>
                        <td>
                        <button className="btn btn-info">Info</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <button className="btn btn-info">Info</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <button className="btn btn-info">Info</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    )
}

export default TabelDaftarPosyanduPuskesmas;