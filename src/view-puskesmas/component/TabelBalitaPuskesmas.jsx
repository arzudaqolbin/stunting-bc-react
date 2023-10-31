import React from "react";
import "../css/tabel-balita-puskesmas.css";

function TableBalitaPuskesmas() {
  return (
        <main className="container">
          <div className="container-fluid">
            <h2 className="custom-judul text-center">Daftar Pengukuran</h2>
            <form className="d-flex align-items-center">
              <input className="form-control me-2" type="text" placeholder="Cari nama balita..." aria-label="Search" />
              <button className="btn btn-success btn-rounded btn-sm" type="submit">Cari</button>
            </form>
            <div className="p-3 mb-2 bg-light custom-border rounded">
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
                    <th scope="col">Ubah Pengukuran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>21-05-2020</td>
                    <td>L</td>
                    <td>20-09-2023</td>
                    <td>40</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                    <td></td>
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
  );
}

export default TableBalitaPuskesmas;
