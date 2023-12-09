import React from "react";
import berita from "../../aset/berita.png";
import logokelurahan from "../../aset/logokelurahan.png";
import { Link } from "react-router-dom";
import "../../view-publik/css/list-berita.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { apiAuth, errorHandling } from "../../base/apiConfig";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const ListBerita = ({ apiAuth }) => {
  const [daftarBerita, setDaftarBerita] = useState([]);
  const [gambar, setGambar] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BASE_URL}/beritas`);
        setDaftarBerita(response.data); // Atur data berita ke state
        response.data.forEach(async (item) => {
          fetch(`${BASE_URL}/beritas/${item.id}/gambar`, apiAuth)
            .then((response) => response.arrayBuffer())
            .then((data) => {
              const base64 = btoa(
                new Uint8Array(data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              );
              setGambar((prevGambar) => ({
                ...prevGambar,
                [item.id]: `data:;base64,${base64}`,
              }));
            })
            .catch((error) => {
              errorHandling(error);
            });
        });
        setLoading(false)
      } catch (error) {
        errorHandling(error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/beritas/${id}`, apiAuth);
      setLoading(false);

      const updatedBerita = daftarBerita.filter((berita) => berita.id !== id);
      setDaftarBerita(updatedBerita);
    } catch (error) {
      errorHandling(error);
      setLoading(false);
    }
  };

  const confirmAlert = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Menghapus berita",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        handleDelete(id);
      }
    });

  };

  return (
    <>
    {loading ? (
      <div className='text-center'>
          <ClipLoader
              loading={loading}
              size={150}
          />
      </div>
    ) 
    : 
    (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">
          List Berita Kelurahan Bidara Cina
        </h2>
        {/* <Link to="/kelurahan/tambah-jadwal">
          <div className="text-end mb-3">
            <button className="btn btn-primary">Tambah Kegiatan</button>
          </div>
        </Link> */}
      <div className="text-end m-5 mr-10">
        <Link to={`/kelurahan/tambah-berita/`} className="btn btn-primary">
          Tambah Berita
        </Link>
      </div>
      <div className="row mt-3">
        {daftarBerita.map((berita, index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className="card" style={{ width: "300px", height: "300px", marginLeft: "40px" }}>
              <img
                src={gambar[berita.id]}
                className="card-img-top cover-image"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title" style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}>{berita.judul}</h5>
                <p
                  className="card-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {berita.isi}
                </p>
                <Link
                  to={`detail-berita/${berita.id}`}
                  className="btn btn-primary"
                >
                  Baca berita
                </Link>
                {loading ? (
                  <div className="text-center">
                    <ClipLoader loading={loading} size={20} />
                  </div>
                ) : (
                  <button
                    className="btn btn-danger float-end"
                    onClick={() => confirmAlert(berita.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>)}
                <Link
                  to={`/kelurahan/edit-berita/${berita.id}`}
                  className="btn btn-primary float-end me-2"
                >
                  <i className="fas fa-edit"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )}
    </>
  );
};

export default ListBerita;
