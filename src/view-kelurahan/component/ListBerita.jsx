import React from "react";
import berita from "../../aset/berita.png";
import logokelurahan from "../../aset/logokelurahan.png";
import { Link } from "react-router-dom";
import "../../view-publik/css/list-berita.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { apiAuth } from "../../base/apiConfig";

const ListBerita = ({ apiAuth }) => {
  const [daftarBerita, setDaftarBerita] = useState([]);
  const [gambar, setGambar] = useState({});

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
              console.error("Error fetching gambar awal:", error);
            });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/beritas/${id}`, apiAuth);
      console.log("Berita berhasil dihapus:", response.data);

      const updatedBerita = daftarBerita.filter((berita) => berita.id !== id);
      setDaftarBerita(updatedBerita);
    } catch (error) {
      console.error("Error deleting berita:", error);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 offset-md-2">
          <form className="d-flex" style={{ width: "750px" }} role="search">
            <div className="input-group">
              <div
                className="align-self-center"
                style={{ marginRight: "10px" }}
              >
                Berita yang dicari :
              </div>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-label"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="text-end mb-5">
        <Link to={`/kelurahan/tambah-berita/`} className="btn btn-primary">
          Tambah Berita
        </Link>
      </div>
      <div className="row mt-3">
        {daftarBerita.map((berita, index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className="card" style={{ width: "300px", height: "300px" }}>
              <img
                src={gambar[berita.id]}
                className="card-img-top cover-image"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{berita.judul}</h5>
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
                <button
                  className="btn btn-danger float-end"
                  onClick={() => handleDelete(berita.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
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
  );
};

export default ListBerita;
