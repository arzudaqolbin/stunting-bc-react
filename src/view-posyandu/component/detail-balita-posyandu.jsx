import React, { useEffect, useState } from 'react';
import LineChart_Umur_24_60 from '../../view-publik/component/linechart_24-60';
import LineChart_Umur_0_24 from '../../view-publik/component/linechart_0-24';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import TabelPengukuranBalitaPosyandu from './TabelPengukuranBalitaPosyandu';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const DetailBalitaPosyandu = ({idPosyandu, apiAuth, idBalita}) => {

  // nunggu setting router link
  const[biodata, setBiodata] = useState([]);
  const[riwayat, setRiwayat] = useState([]);
  const[namaPosyandu, setNamaPosyandu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataBalita = async () => {
    try {
      const dataBalita = await axios.get(`${BASE_URL}/balitas/${idBalita}`, apiAuth);
      const dataTambahanBalita = await axios.get(`${BASE_URL}/dataTambahanBalitas/${idBalita}`, apiAuth);
      setBiodata(dataBalita.data);
      setRiwayat(dataTambahanBalita.data);
    } catch (error) {
      console.error("Error fetching balita data:", error);
    }
  };

  const getNamaPosyandu = async () => {
    try {
      const namaPos = await axios.get(`${BASE_URL}/posyandu/${idBalita}`);
      setNamaPosyandu(namaPos.data);
    } catch (error) {
      console.error("Error fetching posyandu data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getDataBalita();
      await getNamaPosyandu();
      setLoading(false);
    };

    fetchData();
  }, []);

  // Convert Int to Ya Tidak
  const convertStr = (value) => {
    return value === 1 ? 'Ya' : 'Tidak';
  };
  
  // console.log(riwayat);

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
                            <td> : &nbsp;{biodata.nama}</td>
                          </tr>
                          <tr>
                            <th scope="row">NIK</th>
                            <td> : &nbsp;{biodata.nik}</td>
                          </tr>
                          <tr>
                            <th scope="row">Tanggal Lahir</th>
                            <td> : &nbsp;{biodata.tgl_lahir}</td>
                          </tr>
                          <tr>
                            <th scope="row">Umur (bulan)</th>
                            <td> : &nbsp;{biodata.umur}</td>
                          </tr>
                          <tr>
                            <th scope="row">Jenis Kelamin</th>
                            <td> : &nbsp;{biodata.jenis_kelamin}</td>
                          </tr>
                          <tr>
                            <th scope="row">Alamat</th>
                            <td> : &nbsp;{biodata.alamat}</td>
                          </tr>
                          <tr>
                            <th scope="row">Nama Orang Tua</th>
                            <td> : &nbsp;{biodata.nama_ortu}</td>
                          </tr>
                          <tr>
                            <th scope="row">Pekerjaan Orang Tua</th>
                            <td> : &nbsp;{biodata.pekerjaan_ortu}</td>
                          </tr>
                          <tr>
                            <th scope="row">Nama Posyandu</th>
                            <td> : &nbsp;{namaPosyandu.nama}</td>
                          </tr>
                          <tr>
                            <th scope="row">Status TB/U</th>
                            <td> : &nbsp;{biodata.status_tbu}</td>
                          </tr>
                          <tr>
                            <th scope="row">Status BB/TB</th>
                            <td> : &nbsp;{biodata.status_bbtb}</td>
                          </tr>
                          <tr>
                            <th scope="row">Status BB/U</th>
                            <td> : &nbsp;{biodata.status_bbu}</td>
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
                            <th scope="row">Asi Eksklusif</th>
                            <td> : &nbsp;{convertStr(riwayat.asi_eksklusif)}</td>
                          </tr>
                          <tr>
                            <th scope="row">IMD</th>
                            <td> : &nbsp;{convertStr(riwayat.imd)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Penyakit Penyerta</th>
                            <td> : &nbsp;{convertStr(riwayat.penyakit_penyerta)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Riwayat Sakit</th>
                            <td> : &nbsp;{riwayat.riwayat_sakit}</td>
                          </tr>
                          <tr>
                            <th scope="row">Riwayat Imunisasi</th>
                            <td> : &nbsp;{convertStr(riwayat.riwayat_imunisasi)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Riwayat Ibu Hamil KEK</th>
                            <td> : &nbsp;{convertStr(riwayat.riwayat_ibu_hamil_kek)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Riwayat Ibu Anemia</th>
                            <td> : &nbsp;Tidak</td>
                          </tr>
                          <tr>
                            <th scope="row">Kepemilikan Jamban Sehat</th>
                            <td> : &nbsp;{convertStr(riwayat.kepemilikan_jamban_sehat)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Akses Air Minum</th>
                            <td> : &nbsp;Air isi ulang</td>
                          </tr>
                          <tr>
                            <th scope="row">KTP</th>
                            <td> : &nbsp;{riwayat.ktp}</td>
                          </tr>
                          <tr>
                            <th scope="row">Kepemilikan BPJS/KIS/JKN/KAJ</th>
                            <td> : &nbsp;{riwayat.jaminan_kesehatan}</td>
                          </tr>
                          <tr>
                            <th scope="row">Akses Terhadap Makanan Sehat</th>
                            <td> : &nbsp;{convertStr(riwayat.akses_makanan_sehat)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Sudah Konfirmasi ke DSA</th>
                            <td> : &nbsp;{convertStr(riwayat.konfirmasi_dsa)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Data Pengukuran
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        {/* Isi komponen accordion disini */}
                        </div>
                        <TabelPengukuranBalitaPosyandu idBalita={idBalita}/>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Grafik Stunting
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
        </main>)
    }
    </>
  );
}

export default DetailBalitaPosyandu;
