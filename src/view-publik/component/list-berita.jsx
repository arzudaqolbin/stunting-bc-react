import React from "react";
import berita from "../../aset/berita.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ListBerita = () => {
  const [daftarBerita, setDaftarBerita] = useState([]);

  useEffect(() => {
    // Lakukan fetch data saat komponen dimount
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/beritas");
        setDaftarBerita(response.data); // Atur data berita ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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
      <div className="row mt-3">
        {daftarBerita.map((berita, index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              {/* Gunakan berita.image atau properti yang sesuai untuk URL gambar */}
              <img src={berita.gambar} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{berita.judul}</h5>
                <p className="card-text">{berita.deskripsi}</p>
                {/* ... Tombol dan konten lainnya ... */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBerita;
