import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { Link } from "react-router-dom";
import "../../view-publik/css/list-jadwal.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const ListJadwal = ({ apiAuth }) => {
  const [jadwals, setJadwals] = useState([]);
  const currentDate = new Date();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios
      .get(`${BASE_URL}/jadwals`)
      .then((response) => {
        setJadwals(response.data);
      })
      .catch((error) => {
        errorHandling(error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const isEventFuture = (eventDate) => {
    const eventDateTime = new Date(eventDate);
    const timeDiff = eventDateTime - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const closestEventDaysDiff = jadwals.reduce((minDaysDiff, jadwal) => {
      const eventDateTime = new Date(jadwal.tanggal);
      const timeDiff = eventDateTime - currentDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return daysDiff >= 1 && daysDiff < minDaysDiff ? daysDiff : minDaysDiff;
    }, Infinity);

    return daysDiff === closestEventDaysDiff;
  };

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
        setLoading(true);
        handleDelete(id);
      }
    });

  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/jadwals/${id}`, apiAuth);
      setLoading(false);

      const updatedJadwal = jadwals.filter((jadwal) => jadwal.id !== id);
      setJadwals(updatedJadwal);
    } catch (error) {
      errorHandling(error);
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="container">
        <h2 className="text-center mt-5 mb-5">
          Jadwal Kegiatan Kelurahan Bidara Cina
        </h2>
        <Link to="/kelurahan/tambah-jadwal">
          <div className="text-end mb-3">
            <button className="btn btn-primary">Tambah Kegiatan</button>
          </div>
        </Link>
        {jadwals.map((jadwal) => (
          <div className="row" key={jadwal.id}>
            <div className="col-auto text-center flex-column d-none d-sm-flex">
              <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
              </div>
              <h5 className="m-2">
                <span
                  className={`badge rounded-circle ${isEventFuture(jadwal.tanggal)
                    ? "bg-custom border-custom"
                    : "bg-light border"
                    }`}
                >
                  &nbsp;
                </span>
              </h5>
              <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card">
                <div className="card-body">
                  <div className="float-end">
                    {new Date(jadwal.tanggal).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h4 className="card-title text-muted">{jadwal.judul}</h4>
                  <p className="card-text text-muted">{jadwal.deskripsi}</p>
                  {loading ? (
                    <div className="text-center">
                      <ClipLoader loading={loading} size={20} />
                    </div>
                  ) : (
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => confirmAlert(jadwal.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>)}
                  <Link
                    to={`/kelurahan/edit-jadwal/${jadwal.id}`}
                    className="btn btn-primary float-end me-2"
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListJadwal;
