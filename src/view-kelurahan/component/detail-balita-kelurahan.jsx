import React from 'react';
import LineChart_Umur_24_60 from '../../view-publik/component/linechart_24-60';
import LineChart_Umur_0_24 from '../../view-publik/component/linechart_0-24';

const DetailBalitaKelurahan = () => {
  return (
    <main className="container">
      <div className="container-fluid">
        <div className="container">
          <h2 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
            Detail Balita
          </h2>
          <div className="accordion mb-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Biodata Balita
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th scope="row">Nama</th>
                        <td> : &nbsp;Lathifa Fakhriza Ramadhani</td>
                      </tr>
                      <tr>
                        <th scope="row">NIK</th>
                        <td> : &nbsp;123456789</td>
                      </tr>
                      <tr>
                        <th scope="row">Tanggal Lahir</th>
                        <td> : &nbsp;24 April 2020</td>
                      </tr>
                      <tr>
                        <th scope="row">Umur (bulan)</th>
                        <td> : &nbsp;42</td>
                      </tr>
                      <tr>
                        <th scope="row">Jenis Kelamin</th>
                        <td> : &nbsp;Perempuan</td>
                      </tr>
                      <tr>
                        <th scope="row">Alamat</th>
                        <td> : &nbsp;Jl. Ayub RT 012 RW 08</td>
                      </tr>
                      <tr>
                        <th scope="row">Nama Orang Tua</th>
                        <td> : &nbsp;Sukirman</td>
                      </tr>
                      <tr>
                        <th scope="row">Nama Posyandu</th>
                        <td> : &nbsp;Tunas Melati A</td>
                      </tr>
                      <tr>
                        <th scope="row">Status TB/U</th>
                        <td> : &nbsp;Normal</td>
                      </tr>
                      <tr>
                        <th scope="row">Status BB/TB</th>
                        <td> : &nbsp;Gizi Baik</td>
                      </tr>
                      <tr>
                        <th scope="row">Status BB/U</th>
                        <td> : &nbsp;Normal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Riwayat Balita
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th scope="row" style={{ width: "40%"}}>Asi Eksklusif</th>
                        <td> : &nbsp;Tidak</td>
                      </tr>
                      <tr>
                        <th scope="row">IMD</th>
                        <td> : &nbsp;Tidak</td>
                      </tr>
                      <tr>
                        <th scope="row">Penyakit Penyerta</th>
                        <td> : &nbsp;Tidak Ada</td>
                      </tr>
                      <tr>
                        <th scope="row">Riwayat Sakit</th>
                        <td> : &nbsp;Tidak Ada</td>
                      </tr>
                      <tr>
                        <th scope="row">Riwayat Imunisasi</th>
                        <td> : &nbsp;Tidak Lengkap</td>
                      </tr>
                      <tr>
                        <th scope="row">Riwayat Ibu Hamil KEK</th>
                        <td> : &nbsp;Tidak</td>
                      </tr>
                      <tr>
                        <th scope="row">Riwayat Ibu Anemia</th>
                        <td> : &nbsp;Tidak</td>
                      </tr>
                      <tr>
                        <th scope="row">Pekerjaan Orang Tua</th>
                        <td> : &nbsp;Buruh</td>
                      </tr>
                      <tr>
                        <th scope="row">Kepemilikan Jamban Sehat</th>
                        <td> : &nbsp;Ya</td>
                      </tr>
                      <tr>
                        <th scope="row">Akses Air Minum</th>
                        <td> : &nbsp;Air isi ulang</td>
                      </tr>
                      <tr>
                        <th scope="row">KTP</th>
                        <td> : &nbsp;DKI</td>
                      </tr>
                      <tr>
                        <th scope="row">Kepemilikan BPJS/KIS/JKN/KAJ</th>
                        <td> : &nbsp;BPJS</td>
                      </tr>
                      <tr>
                        <th scope="row">Akses Terhadap Makanan Sehat</th>
                        <td> : &nbsp;Ya</td>
                      </tr>
                      <tr>
                        <th scope="row">Sudah Konfirmasi ke DSA</th>
                        <td> : &nbsp;Ya</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Grafik Stunting
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    {/* Isi komponen accordion disini */}
                    <LineChart_Umur_0_24 />
                    <LineChart_Umur_24_60 />
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default DetailBalitaKelurahan;
