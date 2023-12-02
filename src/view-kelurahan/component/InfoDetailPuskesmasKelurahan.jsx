import React, { useState, useEffect } from 'react';
import "../css/info-detail-puskesmas-kelurahan.css";
import { Link } from 'react-router-dom';
import BASE_URL from '../../base/apiConfig';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
// import $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

function InfoDetailPuskesmasKelurahan({ idKelurahan, apiAuth, idPuskesmas }) {
  const [posyandu, setPosyandu] = useState([]);
  const [puskesmas, setPuskesmas] = useState([]);
  const [username, setUsername] = useState([]);
  const [loading, setLoading] = useState(true)

  // fetch data Puskesmas
  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //         // nanti ganti api dengan getKader by idPosyandu
  //           const result = await axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}`,apiAuth);
  //           // const result = await axios.get(`${BASE_URL}/kader/posyandu/${idPosyandu}`);
  //           setPuskesmas(result.data);
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       };

  //   fetchData();
  // }, [idPuskesmas]);

  // // fetch data Posyandu
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}/posyandu`, apiAuth);
  //       // const result = await axios.get(`${BASE_URL}/kader/posyandu/${idPosyandu}`);
  //       setPosyandu(result.data.data);
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       };

  //   fetchData();
  // }, [idPuskesmas]);

  // // fetch data Username
  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //           const result3 = await axios.get(`${BASE_URL}/user/${puskesmas.user_id}}`, apiAuth);
  //           setUsername(result3.data);
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       };

  //   fetchData();
  // }, [puskesmas.user_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const puskesmasPromise = axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}`, apiAuth);
        const posyanduPromise = axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}/posyandu`, apiAuth);

        const [puskesmasResult, posyanduResult] = await Promise.all([puskesmasPromise, posyanduPromise]);

        setPuskesmas(puskesmasResult.data.data);
        setPosyandu(posyanduResult.data.data);

        const result3 = await axios.get(`${BASE_URL}/user/${puskesmasResult.data.data.user_id}`, apiAuth);
        setUsername(result3.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idPuskesmas]);



  return (
    <>
      {
        loading ? (
          <div className='text-center'>
            <ClipLoader
              loading={loading}
              size={150}
            />
          </div>) : (
          <main className="container">
            <div className="container-fluid">
              {/* Mulai isi kontennya disini */}
              <h2 className="custom-judul">{puskesmas.nama}</h2>

              <p className="h6" style={{ fontWeight: 'bold' }}>Detail Akun</p>
              <ul className="list-unstyled">
                <li>
                  <ul style={{ fontSize: '15px' }}>
                    <table>
                      <tr>
                        <td>Nama Puskesmas &nbsp;</td>
                        <td>: {puskesmas.nama}</td>
                      </tr>
                      <tr>
                        <td>Kepala Puskesmas &nbsp;</td>
                        <td>: {puskesmas.kepala}</td>
                      </tr>
                      <tr>
                        <td>Alamat &nbsp;</td>
                        <td>: {puskesmas.alamat}</td>
                      </tr>
                      <tr>
                        <td>Nomor Telepon &nbsp;</td>
                        <td>: {puskesmas.nomor_telepon}</td>
                      </tr>
                      <tr>
                        <td>Username &nbsp;</td>
                        <td>: {username.username}</td>
                      </tr>
                    </table>
                  </ul>
                </li>
              </ul>

              <div style={{ textAlign: 'right' }}>
                <Link to={`/kelurahan/edit-puskesmas/${puskesmas.id}`}>
                  <button className="btn">Edit Data</button>
                </Link>
              </div>

              <p className="h6" style={{ fontWeight: 'bold' }}>Posyandu Binaan</p>
              <div className="p-3 mb-2 bg-light custom-border rounded">
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Posyandu</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Nomor Telepon</th>
                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      posyandu.map((poss, idx) => (
                        <tr key={poss.id}>
                          <th scope="row">{idx}</th>
                          <td>{poss.nama}</td>
                          <td>{poss.alamat}</td>
                          <td>{poss.nomor_telepon}</td>
                          <td>
                            <Link to={`/kelurahan/detail-posyandu/${poss.id}`}>
                              <button className="btn btn-info">Info</button>
                            </Link>
                          </td>
                        </tr>

                      ))
                    }
                    {/* <tr>
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
                  </tr> */}
                  </tbody>
                </table>
              </div >
            </div >

            <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}>
              <Link to={`/kelurahan/tambah-posyandu/${idPuskesmas}`} className="btn">+ Tambah Posyandu</Link>
            </div>
          </main >)
      }
    </>
  );
}

export default InfoDetailPuskesmasKelurahan;
