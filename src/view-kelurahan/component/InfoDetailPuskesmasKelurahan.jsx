import React from 'react';
import "../css/info-detail-puskesmas-kelurahan.css";

function InfoDetailPuskesmasKelurahan() {
    return (
        <main className="container">
        <div className="container-fluid">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Puskesmas Bidara Cina I</h2>

            <p className="h6" style={{ fontWeight: 'bold' }}>Detail Akun</p>
            <ul className="list-unstyled">
            <li>
                <ul style={{ fontSize: '15px' }}>
                <table>
                    <tr>
                    <td>Nama Puskesmas &nbsp;</td>
                    <td>: Puskesmas Bidara Cina I</td>
                    </tr>
                    <tr>
                    <td>Kepala Puskesmas &nbsp;</td>
                    <td>: Ibu Helly</td>
                    </tr>
                    <tr>
                    <td>Alamat &nbsp;</td>
                    <td>: Gg. Kober Depok No.19, RT.5/RW.6, Bidara Cina, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13330</td>
                    </tr>
                    <tr>
                    <td>Nomor Telepon &nbsp;</td>
                    <td>: 02185917587</td>
                    </tr>
                    <tr>
                    <td>Username &nbsp;</td>
                    <td>: puskemasabc1</td>
                    </tr>
                </table>
                </ul>
            </li>
            </ul>

            <div style={{ textAlign: 'right' }}>
            <button className="btn">Edit Data</button>
            </div>

            <p className="h6" style={{ fontWeight: 'bold' }}>Posyandu Binaan</p>
            <div className="p-3 mb-2 bg-light custom-border rounded">
            <table className="table custom-table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nama Posyandu</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Nomor Telepon</th>
                    <th scope="col">Detail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Posyandu Kencana Ungu</td>
                    <td>Jl. Sensus No.4</td>
                    <td>021021021021</td>
                    <td>
                    <button className="btn btn-info">Info</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
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
                    <td>
                    <button className="btn btn-info">Info</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

            <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
            <button className="btn">+ Tambah Posyandu</button>
            </div>
        </div>
        </main>
    );
}

export default InfoDetailPuskesmasKelurahan;
