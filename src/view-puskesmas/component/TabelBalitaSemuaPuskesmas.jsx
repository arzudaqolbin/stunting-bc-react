import React, { useEffect } from 'react';
import "../css/tabel-daftar-balita-semua-puskesmas.css";

function TabelBalitaSemuaPuskesmas() {
    useEffect(() => {
        // Fungsi applyStatusStyle untuk mengatur status gaya CSS
        function applyStatusStyle(element) {
        element.style.color = 'white';
        element.style.borderRadius = '10px';
        element.style.padding = '1px';
        element.style.margin = '1px';

        var statusValue = element.textContent;

        switch (statusValue) {
            // status TB/U
            case 'Sangat Pendek':
            element.style.backgroundColor = 'darkred';
            break;
            case 'Pendek':
            element.style.backgroundColor = 'red';
            break;
            case 'Normal':
            element.style.backgroundColor = 'limegreen';
            break;
            case 'Tinggi':
            element.style.backgroundColor = 'darkblue';
            break;
            // status BB/TB
            case 'Gizi Buruk':
            element.style.backgroundColor = 'darkred';
            break;
            case 'Gizi Kurang':
            element.style.backgroundColor = 'red';
            break;
            case 'Risiko Lebih':
            element.style.backgroundColor = 'dodgerblue';
            break;
            case 'Gizi Lebih':
            element.style.backgroundColor = 'mediumblue';
            break;
            case 'Obesitas':
            element.style.backgroundColor = 'darkblue';
            break;
            // status BB/U
            case 'BB Sangat Kurang':
            element.style.backgroundColor = 'darkred';
            break;
            case 'BB Kurang':
            element.style.backgroundColor = 'red';
            break;
            case 'Risiko BB Lebih':
            element.style.backgroundColor = 'darkblue';
            break;
            default:
            // Default background color for unknown status
            element.style.backgroundColor = 'black';
        }
        }

        // Mengatur status pada elemen-elemen yang memiliki atribut data-status_tbu, data-status_bbtb, data-status_bbu, dan data-status_kms
        var statusTBUElements = document.querySelectorAll('[data-status_tbu]');
        var statusBBTBElements = document.querySelectorAll('[data-status_bbtb]');
        var statusBBUElements = document.querySelectorAll('[data-status_bbu]');

        statusTBUElements.forEach(function (statusElement) {
        var divElement = statusElement.querySelector('div.status');
        applyStatusStyle(divElement);
        });

        statusBBTBElements.forEach(function (statusElement) {
        var divElement = statusElement.querySelector('div.status');
        applyStatusStyle(divElement);
        });

        statusBBUElements.forEach(function (statusElement) {
        var divElement = statusElement.querySelector('div.status');
        applyStatusStyle(divElement);
        });

    }, []);

    return (
        <main className="container">
        <div className="container-fluid">
        
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">Daftar Balita di Kelurahan Bidara Cina</h2>

        <form className="d-flex align-items-center">
        <input className="form-control me-2" type="text" placeholder="Cari nama balita..." aria-label="Search" />
        <button className="btn btn-success btn-rounded btn-sm" type="submit">Cari</button>
        </form>

            <div className="p-3 mb-2 bg-light custom-border rounded">
            <table className="table custom-table">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Balita</th>
                    <th scope="col">Jenis Kelamin</th>
                    <th scope="col">Nama Posyandu</th>
                    <th scope="col">Umur (Bulan)</th>
                    <th scope="col">Status TB/U</th>
                    <th scope="col">Status BB/TB</th>
                    <th scope="col">Status BB/U</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Sayyid Nur</td>
                    <td>L</td>
                    <td>Melati</td>
                    <td>40</td>
                    <td data-status_tbu="Sangat Pendek">
                    <div className="status rounded">Sangat Pendek</div>
                    </td>
                    <td data-status_bbtb="Gizi Buruk">
                    <div className="status rounded">Gizi Buruk</div>
                    </td>
                    <td data-status_bbu="BB Sangat Kurang">
                    <div className="status rounded">BB Sangat Kurang</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td data-status_tbu="Pendek">
                    <div className="status rounded">Pendek</div>
                    </td>
                    <td data-status_bbtb="Gizi Kurang">
                    <div className="status rounded">Gizi Kurang</div>
                    </td>
                    <td data-status_bbu="BB Kurang">
                    <div className="status rounded">BB Kurang</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td data-status_tbu="Normal">
                    <div className="status rounded">Normal</div>
                    </td>
                    <td data-status_bbtb="Normal">
                    <div className="status rounded">Normal</div>
                    </td>
                    <td data-status_bbu="Normal">
                    <div className="status rounded">Normal</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td data-status_tbu="Tinggi">
                    <div className="status rounded">Tinggi</div>
                    </td>
                    <td data-status_bbtb="Risiko Lebih">
                    <div className="status rounded">Risiko Lebih</div>
                    </td>
                    <td data-status_bbu="Risiko BB Lebih">
                    <div className="status rounded">Risiko BB Lebih</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td data-status_bbtb="Gizi Lebih">
                    <div className="status rounded">Gizi Lebih</div>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td data-status_bbtb="Obesitas">
                    <div className="status rounded">Obesitas</div>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </main>
    );
}

export default TabelBalitaSemuaPuskesmas;