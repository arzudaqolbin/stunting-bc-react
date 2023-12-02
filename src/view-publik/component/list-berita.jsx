import React from "react";
import berita from "../../aset/berita.png";
import logokelurahan from "../../aset/logokelurahan.png"
import { Link } from 'react-router-dom';
import "../css/list-berita.css";
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
      {/* <div className="text-end mb-5">
          <button className="btn btn-primary">Tambah Berita</button>
      </div> */}
      <div className="row mt-3">
  {[1, 2, 3, 4, 5, 6].map((index) => (
    <div key={index} className="col-md-4 mb-5">
      <div className="card" style={{ width: '300px', height: '300px' }}>
      <img src={index === 1 || index === 3 || index === 6 ? berita : logokelurahan}
                className="card-img-top cover-image"
                alt=""/>
        <div className="card-body">
          <h5 className="card-title">Judul berita</h5>
          <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {index === 1 || index === 3 || index === 6
              ? "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
          </p>
          <a href="#" className="btn btn-primary">
            Baca berita
          </a>
          {/* <button className="btn btn-danger float-end">
            <i className="fas fa-trash"></i>
          </button>
          <Link to={`/kelurahan/edit-jadwal`} className="btn btn-primary float-end me-2">
            <i className="fas fa-edit"></i>
          </Link> */}
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default ListBerita;
