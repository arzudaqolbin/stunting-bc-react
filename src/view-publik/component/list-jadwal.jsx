import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/list-jadwal.css";
import BASE_URL from '../../base/apiConfig';

const ListJadwal = () => {

  const [jadwals, setJadwals] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get(`${BASE_URL}/jadwals`)
      .then(response => {
        setJadwals(response.data);
      })
      .catch(error => {
        console.error('Error fetching jadwal data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <main className="container">
      <div className="container">
        <h2 className="text-center mt-5 mb-5">Jadwal Kegiatan Kelurahan Bidara Cina</h2>
        <div className="text-end mb-3">
          <button className="btn btn-primary">Tambah Kegiatan</button>
        </div>
        {
          jadwals.map(jadwal => (

            <div className="row">
              <div className="col-auto text-center flex-column d-none d-sm-flex">
                <div className="row h-50">
                  <div className="col">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <span className="badge rounded-circle bg-light border">&nbsp;</span>
                </h5>
                <div className="row h-50">
                  <div className="col border-end">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col py-2">
                <div className="card">
                  <div className="card-body">
                    <div className="float-end">{jadwal.tanggal}</div>
                    <h4 className="card-title text-muted">{jadwal.judul}</h4>
                    <p className="card-text text-muted">{jadwal.deskripsi}</p>
                    <button className="btn btn-danger float-end">
                      <i className="fas fa-trash"></i>
                    </button>
                    <button className="btn btn-primary float-end me-2">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }


        <div className="row">
          <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
              <div className="col border-end">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
              <span className="badge rounded-circle bg-custom border-custom">&nbsp;</span>
            </h5>
            <div className="row h-50">
              <div className="col border-end">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
          </div>
          <div className="col py-2">
            <div className="card border-custom shadow">
              <div className="card-body">
                <div className="float-end">Rabu, 20 September 2023</div>
                <h4 className="card-title text-muted">Kegiatan 2</h4>
                <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className="btn btn-danger float-end">
                  <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-primary float-end me-2">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
              <div className="col border-end">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
              <span className="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div className="row h-50">
              <div className="col border-end">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
          </div>
          <div className="col py-2">
            <div className="card">
              <div className="card-body">
                <div className="float-end">Kamis, 21 September 2023</div>
                <h4 className="card-title text-muted">Kegiatan 3</h4>
                <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className="btn btn-danger float-end">
                  <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-primary float-end me-2">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
              <div className="col border-end">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
              <span className="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div className="row h-50">
              <div className="col">&nbsp;</div>
              <div className="col">&nbsp;</div>
            </div>
          </div>
          <div className="col py-2 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="float-end">Jumat, 22 September 2023</div>
                <h4 className="card-title text-muted">Kegiatan 4</h4>
                <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className="btn btn-danger float-end">
                  <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-primary float-end me-2">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListJadwal;
