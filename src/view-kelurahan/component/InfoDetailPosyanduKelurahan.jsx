import React, { useEffect, useState } from "react";
import "../css/info-detail-posyandu-kelurahan.css";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import Swal from "sweetalert2";
import $ from 'jquery';
// import { Navigate } from "react-router-dom";

function InfoDetailPosyanduKelurahan({ apiAuth, idPosyandu }) {
  let navigate = useNavigate();
  const [kader, setKader] = useState([]);
  const [posyandu, setPosyandu] = useState([]);
  const [puskesmas, setPuskesmas] = useState([]);
  const [username, setUsername] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  // const


  const confirmAlert = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Menambahkan akun posyandu",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading2(true);
        handleDelete(id);
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/kader/${id}`, apiAuth);
      navigate(`/kelurahan/detail-posyandu/${idPosyandu}`);
      setLoading2(false);
      // navigate
    } catch (error) {
      errorHandling(error);
      setLoading2(false);
    }
  };



  useEffect(() => {
    // Inisialisasi DataTable hanya pada mounting pertama
    if (!$.fn.DataTable.isDataTable('#myTable')) {
      $('#myTable').DataTable({
        "aaSorting": [],
        "language": {
          "lengthMenu": "Menampilkan _MENU_ data tiap halaman",
          "zeroRecords": "Data tidak ditemukan",
          "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
          "infoEmpty": "Tidak ada data tersedia",
          "infoFiltered": "(Disaring dari _MAX_ data total)",
          "decimal": "",
          "emptyTable": "Data tidak tersedia",
          "loadingRecords": "Memuat...",
          "processing": "Memproses...",
          "search": 'Cari:  <i class="bi bi-search"></i> ',
          "searchPlaceholder": 'Cari data balita...',
          "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            // "next": "Selanjutnya",
            // "previous": "Sebelumnya"
            "previous": 'Prev  <i class="bi bi-chevron-double-left"></i>',
            "next": '<i class="bi bi-chevron-double-right"></i>  Next'
          },
          "aria": {
            "sortAscending": ": klik untuk mengurutkan A-Z",
            "sortDescending": ": klik untuk mengurutkan Z-A"
          }
        }
      });
    }
  }, [idPosyandu]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [posyanduResult, kaderResult] = await Promise.all([
          axios.get(`${BASE_URL}/posyandu/${idPosyandu}`, apiAuth),
          axios.get(`${BASE_URL}/posyandu/${idPosyandu}/kader`, apiAuth)
        ]);

        setPosyandu(posyanduResult.data.data);
        setKader(kaderResult.data.data);
      } catch (error) {
        errorHandling(error);
      }
    };

    fetchData();
  }, [idPosyandu]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (posyandu.puskesmas_id) {
          const result2 = await axios.get(`${BASE_URL}/puskesmas/${posyandu.puskesmas_id}`, apiAuth);
          setPuskesmas(result2.data.data);
        }
      } catch (error) {
        errorHandling(error);
      }
    };

    fetchData();
  }, [posyandu.puskesmas_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (posyandu.user_id) {
          const result3 = await axios.get(`${BASE_URL}/user/${posyandu.user_id}`, apiAuth);
          setUsername(result3.data);
        }
      } catch (error) {
        errorHandling(error);
      } finally {
        // Set loading to false after all data is loaded
        setLoading(false);
      }
    };

    fetchData();
  }, [posyandu.user_id]);

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
              <h2 className="custom-judul">{posyandu.nama}</h2>

              <p className="h6" style={{ fontWeight: "bold" }}>
                Detail Akun
              </p>
              <ul className="list-unstyled">
                <li>
                  <ul style={{ fontSize: "15px" }}>
                    <table>
                      <tr>
                        <td>Nama Posyandu &nbsp;</td>
                        <td>: {posyandu.nama}</td>
                      </tr>
                      <tr>
                        <td>Naungan &nbsp;</td>
                        <td>: {puskesmas.nama}</td>
                      </tr>
                      <tr>
                        <td>Alamat &nbsp;</td>
                        <td>
                          : {posyandu.alamat}
                        </td>
                      </tr>
                      <tr>
                        <td>Nomor Telepon &nbsp;</td>
                        <td>: {posyandu.nomor_telepon}</td>
                      </tr>
                      <tr>
                        <td>Username &nbsp;</td>
                        <td>: {username.username}</td>
                      </tr>
                    </table>
                  </ul>
                </li>
              </ul>

              <div style={{ textAlign: "right" }}>
                <Link to={`/kelurahan/edit-posyandu/${idPosyandu}`}>
                  <button className="btn">Edit Data</button>
                </Link>
              </div>

              <p className="h6" style={{ fontWeight: "bold" }}>
                Pengurus Kader
              </p>
              <div className="table-responsive">
                <table id="myTable" className="table custom-table">
                  <thead>
                    <tr>
                      <th scope="col">Jabatan</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Ubah Pengurus</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* Untuk KETUA */}
                    {
                      kader.filter((k) => k.jabatan === "Ketua").length === 1 ? (
                        kader.filter((k) => k.jabatan === "Ketua").map((ketua) => (
                          <tr key={ketua.id}>
                            <td>Ketua</td>
                            <td>{ketua.nama}</td>
                            <td>
                              <Link to={`/kelurahan/edit-kader/${ketua.id}`}>
                                <button className="fa-solid fa-pen-to-square"></button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Ketua</td>
                          <td><i>belum terdaftar</i></td>
                          <td>
                            <Link to={`/kelurahan/tambah-kader/Ketua/${idPosyandu}`}>
                              <button className="fa-solid fa-pen-to-square"></button>
                            </Link>
                          </td>
                        </tr>
                      )
                    }

                    {/* Untuk SEKRETARIS */}
                    {
                      kader.filter((k) => k.jabatan === "Sekretaris").length === 1 ? (
                        kader.filter((k) => k.jabatan === "Sekretaris").map((Sekretaris) => (
                          <tr key={Sekretaris.id}>
                            <td>Sekretaris</td>
                            <td>{Sekretaris.nama}</td>
                            <td>
                              <Link to={`/kelurahan/edit-kader/${Sekretaris.id}`}>
                                <button className="fa-solid fa-pen-to-square"></button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Sekretaris</td>
                          <td><i>belum terdaftar</i></td>
                          <td>
                            <Link to={`/kelurahan/tambah-kader/Sekretaris/${idPosyandu}`}>
                              <button className="fa-solid fa-pen-to-square"></button>
                            </Link>
                          </td>
                        </tr>
                      )
                    }

                    {/* Untuk BENDAHARA */}
                    {
                      kader.filter((k) => k.jabatan === "Bendahara").length === 1 ? (
                        kader.filter((k) => k.jabatan === "Bendahara").map((Bendahara) => (
                          <tr key={Bendahara.id}>
                            <td>Bendahara</td>
                            <td>{Bendahara.nama}</td>
                            <td>
                              <Link to={`/kelurahan/edit-kader/${Bendahara.id}`}>
                                <button className="fa-solid fa-pen-to-square"></button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Bendahara</td>
                          <td><i>belum terdaftar</i></td>
                          <td>
                            <Link to={`/tambah-kader/Bendahara/${idPosyandu}`}>
                              <button className="fa-solid fa-pen-to-square"></button>
                            </Link>
                          </td>
                        </tr>
                      )
                    }

                    {/* Untuk ANGGOTA */}
                    <tr>
                      <td rowSpan={kader.filter((k) => k.jabatan === "Anggota").length + 1}>Anggota Kader</td>
                      <td><i>silahkan tambah anggota</i></td>
                      <td>
                        <Link to={`/kelurahan/tambah-kader/Anggota/${idPosyandu}`}>
                          <button><i class="fa-solid fa-plus" style={{ color: "#0a9e59" }}></i></button>
                        </Link>
                      </td>
                    </tr>
                    {
                      (kader.filter((k) => k.jabatan === "Anggota").map((anggota) => (
                        <tr key={anggota.id}>
                          <td>{anggota.nama}</td>
                          <td>
                            <Link to={`/kelurahan/edit-kader/${anggota.id}`}>
                              <button className="fa-solid fa-pen-to-square"></button>
                            </Link>
                            {loading2 ? (
                              <div className="text-center">
                                <ClipLoader loading={loading2} size={20} />
                              </div>
                            ) : (
                              <button onClick={() => confirmAlert(anggota.id)}><i class="fa-solid fa-trash"></i></button>)}
                          </td>
                        </tr>
                      )))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </main>)
      }
    </>
  );
}

export default InfoDetailPosyanduKelurahan;
