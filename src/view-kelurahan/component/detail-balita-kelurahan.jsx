import React, { useEffect, useState } from "react";
import LineChart_Umur_24_60 from "../../view-publik/component/linechart_24-60";
import LineChart_Umur_0_24 from "../../view-publik/component/linechart_0-24";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import TabelPengukuranBalitaStunting from "./TabelDaftarPengukuranBalitaStunting";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "../css/detail-balita.css";

const DetailBalitaKelurahan = ({ idKelurahan, apiAuth, idBalita }) => {
  // nunggu setting router link
  const [biodata, setBiodata] = useState([]);
  const [riwayat, setRiwayat] = useState([]);
  const [namaPosyandu, setNamaPosyandu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataBalita = async () => {
    try {
      const dataBalita = await axios.get(
        `${BASE_URL}/balitas/${idBalita}`,
        apiAuth
      );

      setBiodata(dataBalita.data);
    } catch (error) {
      errorHandling(error);
    }
  };

  const getNamaPosyandu = async () => {
    try {
      const namaPos = await axios.get(
        `${BASE_URL}/posyandu/${biodata.posyandu_id}`,
        apiAuth
      );
      setNamaPosyandu(namaPos.data.data);
    } catch (error) {
      errorHandling(error);
    }
  };

  const getDataTambahan = async () => {
    try {
      const dataTambahanBalita = await axios.get(
        `${BASE_URL}/dataTambahanBalitas/${idBalita}`,
        apiAuth
      );
      setRiwayat(dataTambahanBalita.data);
    } catch (error) {
      console.error("Error fetching balita data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getDataBalita();
      if (biodata.length != 0) {
        await getNamaPosyandu();
      }
      await getDataTambahan();
      setLoading(false);
    };

    fetchData();
  }, [biodata]);

  // Convert Int to Ya Tidak
  const convertStr = (value) => {
    return value === 1 ? "Ya" : "Tidak";
  };

  // console.log(riwayat);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <main className="container">
          <div className="container-fluid">
            <div className="container">
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                Detail Balita
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table table-hover custom-table">
                    <tbody>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Nama
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.nama}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          NIK
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.nik}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Tanggal Lahir
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.tgl_lahir}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Umur (bulan)
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.umur}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Jenis Kelamin
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.jenis_kelamin}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Alamat
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.alamat}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Nama Orang Tua
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.nama_ortu}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Pekerjaan Orang Tua
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.pekerjaan_ortu}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Nama Posyandu
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{namaPosyandu?.nama || "Loading..."}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Status TB/U
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.status_tbu}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Status BB/TB
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.status_bbtb}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ textAlign: "left" }}>
                          Status BB/U
                        </th>
                        <td style={{ textAlign: "left" }}>
                          {" "}
                          : &nbsp;{biodata.status_bbu}
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                    Riwayat Balita {biodata.status_tbu === "Pendek" || biodata.status_tbu === "Sangat Pendek" ? "(sebaiknya dilengkapi)" : ""}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {riwayat.length === 0 ? (
                      <div className="text-center">
                        Belum mengisikan data tambahan riwayat
                      </div>
                    ) : (
                      <table className="table table-hover custom-table">
                        <tbody>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Asi Eksklusif
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{convertStr(riwayat.asi_eksklusif)}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              IMD
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.imd}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Penyakit Penyerta
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.penyakit_penyerta}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Riwayat Sakit
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.riwayat_sakit}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Riwayat Imunisasi
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.riwayat_imunisasi}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Riwayat Ibu Hamil KEK
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.riwayat_ibu_hamil_kek}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Riwayat Ibu Anemia
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;Tidak
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Kepemilikan Jamban Sehat
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.kepemilikan_jamban_sehat}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Akses Air Minum
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;Air isi ulang
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              KTP
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.ktp}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Kepemilikan BPJS/KIS/JKN/KAJ
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.jaminan_kesehatan}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Akses Terhadap Makanan Sehat
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.akses_makanan_sehat}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ textAlign: "left" }}>
                              Sudah Konfirmasi ke DSA
                            </th>
                            <td style={{ textAlign: "left" }}>
                              {" "}
                              : &nbsp;{riwayat.konfirmasi_dsa}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Data Pengukuran
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {/* Isi komponen accordion disini */}
                    <TabelPengukuranBalitaStunting
                      idBalita={idBalita}
                      apiAuth={apiAuth}
                    />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Grafik Stunting
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {/* Isi komponen accordion disini */}
                    <LineChart_Umur_0_24
                      idBalita={idBalita}
                      apiAuth={apiAuth}
                    />
                    <LineChart_Umur_24_60
                      idBalita={idBalita}
                      apiAuth={apiAuth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DetailBalitaKelurahan;
