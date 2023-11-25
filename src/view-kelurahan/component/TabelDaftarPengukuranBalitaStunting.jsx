import React, { useEffect } from 'react';
import "../css/tabel-daftar-pengukuran-balita-stunting.css";

function applyStatusStyle(element) {
    element.style.color = "white";
    element.style.borderRadius = "10px";
    element.style.padding = "1px";
    element.style.margin = "1px";

    const statusValue = element.textContent;

    switch (statusValue) {
        case "Sangat Pendek":
            element.style.backgroundColor = "darkred";
            break;
        case "Pendek":
            element.style.backgroundColor = "red";
            break;
        case "Normal":
            element.style.backgroundColor = "limegreen";
            break;
        case "Tinggi":
            element.style.backgroundColor = "darkblue";
            break;
        case "Gizi Buruk":
            element.style.backgroundColor = "darkred";
            break;
        case "Gizi Kurang":
            element.style.backgroundColor = "red";
            break;
        case "Risiko Lebih":
            element.style.backgroundColor = "dodgerblue";
            break;
        case "Gizi Lebih":
            element.style.backgroundColor = "mediumblue";
            break;
        case "Obesitas":
            element.style.backgroundColor = "darkblue";
            break;
        case "BB Sangat Kurang":
            element.style.backgroundColor = "darkred";
            break;
        case "BB Kurang":
            element.style.backgroundColor = "red";
            break;
        case "Risiko BB Lebih":
            element.style.backgroundColor = "darkblue";
            break;
        case "Hijau Atas":
            element.style.backgroundColor = "green";
            break;
        case "Hijau":
            element.style.backgroundColor = "limegreen";
            break;
        case "Kuning":
            element.style.backgroundColor = "gold";
            break;
        case "Merah":
            element.style.backgroundColor = "red";
            break;
        default:
            element.style.backgroundColor = "black";
    }
    }

    function TabelPengukuranBalitaStunting() {
    useEffect(() => {
        const statusTBUElements = document.querySelectorAll("[data-status_tbu]");
        const statusBBTBElements = document.querySelectorAll("[data-status_bbtb]");
        const statusBBUElements = document.querySelectorAll("[data-status_bbu]");
        const statusKMSElements = document.querySelectorAll("[data-status_kms]");

        statusTBUElements.forEach((statusElement) => {
        const divElement = statusElement.querySelector(".validasi");
        applyStatusStyle(divElement);
        });

        statusBBTBElements.forEach((statusElement) => {
        const divElement = statusElement.querySelector(".validasi");
        applyStatusStyle(divElement);
        });

        statusBBUElements.forEach((statusElement) => {
        const divElement = statusElement.querySelector(".validasi");
        applyStatusStyle(divElement);
        });

        statusKMSElements.forEach((statusElement) => {
        const divElement = statusElement.querySelector(".validasi");
        applyStatusStyle(divElement);
        });
    }, []);

    return (
        <main className="container">
        <div className="container-fluid">
            {/* Mulai isi kontennya disini */}
            <h2 className="custom-judul">Data Pengukuran</h2>

            <div className="p-3 mb-2 bg-light custom-border rounded">
                <div className='table-responsive'>
                    <table className="table custom-table">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Tanggal Lahir</th>
                        <th scope="col">Tanggal Pengukuran</th>
                        <th scope="col">Umur (Bulan)</th>
                        <th scope="col">Posisi Pengukuran</th>
                        <th scope="col">BB (Kg)</th>
                        <th scope="col">TB (Cm)</th>
                        <th scope="col">Status TB/U</th>
                        <th scope="col">Status BB/TB</th>
                        <th scope="col">Status BB/U</th>
                        <th scope="col">Rambu Gizi</th>
                        <th scope="col">KMS</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>21-05-2020</td>
                            <td>20-09-2023</td>
                            <td>40</td>
                            <td>Berdiri</td>
                            <td>160</td>
                            <td>1200</td>
                            <td data-status_tbu="Sangat Pendek">
                                <div className="validasi rounded">Sangat Pendek</div>
                            </td>
                            <td data-status_bbtb="Gizi Buruk">
                            <div className="validasi rounded">Gizi Buruk</div>
                            </td>
                            <td data-status_bbu="BB Sangat Kurang">
                            <div className="validasi rounded">BB Sangat Kurang</div>
                            </td>
                            <td>N</td>
                            <td data-status_kms="Hijau Atas">
                            <div className="validasi rounded">Hijau Atas</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-status_tbu="Pendek">
                            <div className="validasi rounded">Pendek</div>
                            </td>
                            <td data-status_bbtb="Gizi Kurang">
                            <div className="validasi rounded">Gizi Kurang</div>
                            </td>
                            <td data-status_bbu="BB Kurang">
                            <div className="validasi rounded">BB Kurang</div>
                            </td>
                            <td>T</td>
                            <td data-status_kms="Hijau">
                            <div className="validasi rounded">Hijau</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-status_tbu="Normal">
                            <div className="validasi rounded">Normal</div>
                            </td>
                            <td data-status_bbtb="Normal">
                            <div className="validasi rounded">Normal</div>
                            </td>
                            <td data-status_bbu="Normal">
                            <div className="validasi rounded">Normal</div>
                            </td>
                            <td>B</td>
                            <td data-status_kms="Kuning">
                            <div className="validasi rounded">Kuning</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-status_tbu="Tinggi">
                            <div className="validasi rounded">Tinggi</div>
                            </td>
                            <td data-status_bbtb="Risiko Lebih">
                            <div className="validasi rounded">Risiko Lebih</div>
                            </td>
                            <td data-status_bbu="Risiko BB Lebih">
                            <div className="validasi rounded">Risiko BB Lebih</div>
                            </td>
                            <td>O</td>
                            <td data-status_kms="Merah">
                            <div className="validasi rounded">Merah</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-status_bbtb="Gizi Lebih">
                            <div className="validasi rounded">Gizi Lebih</div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td data-status_bbtb="Obesitas">
                            <div className="validasi rounded">Obesitas</div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        </main>
    );
}

export default TabelPengukuranBalitaStunting;