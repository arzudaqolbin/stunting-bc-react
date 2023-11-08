import React from 'react';
import "../css/info-detail-posyandu-kelurahan.css";

function InfoDetailPosyanduKelurahan() {
    return (
        <main className="container">
        <div className="container-fluid">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Posyandu Kencana Ungu</h2>

            <p className="h6" style={{ fontWeight: 'bold' }}>Detail Akun</p>
            <ul className="list-unstyled">
            <li>
                <ul style={{ fontSize: '15px' }}>
                <table>
                    <tr>
                    <td>Nama Posyandu &nbsp;</td>
                    <td>: Posyandu Kencana Ungu</td>
                    </tr>
                    <tr>
                    <td>Naungan &nbsp;</td>
                    <td>: Puskesmas Bidara Cina I</td>
                    </tr>
                    <tr>
                    <td>Alamat &nbsp;</td>
                    <td>: Jl. Sensus No.4, RT.1/RW.4, Bidara Cina, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13330</td>
                    </tr>
                    <tr>
                    <td>Nomor Telepon &nbsp;</td>
                    <td>: 085226092657</td>
                    </tr>
                    <tr>
                    <td>Username &nbsp;</td>
                    <td>: posyanduabc1</td>
                    </tr>
                </table>
                </ul>
            </li>
            </ul>

            <div style={{ textAlign: 'right' }}>
            <button className="btn">Edit Data</button>
            </div>

            <p className="h6" style={{ fontWeight: 'bold' }}>Pengurus Kader</p>
            <div className="p-3 mb-2 bg-light custom-border rounded">
            <table className="table custom-table">
                <thead>
                <tr>
                    <th scope="col">Jabatan</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Ubah Pengurus</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Ketua</td>
                    <td>Ibu Hermansyah, S.Pd.</td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                <tr>
                    <td>Sekretaris</td>
                    <td></td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                <tr>
                    <td>Bendahara</td>
                    <td></td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                <tr>
                    <td rowSpan="3">Anggota Kader</td>
                    <td>nama anggota 1</td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'center' }}>nama anggota 2</td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'center' }}>nama anggota 3</td>
                    <td>
                    <button className="fa-solid fa-pen-to-square"></button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </main>
    );
}

export default InfoDetailPosyanduKelurahan;
