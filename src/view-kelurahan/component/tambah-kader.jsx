import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import "../css/form-kelurahan.css";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

function TambahKader({ idKelurahan, apiAuth, idPosyandu, jabatans }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [kader, setKader] = useState({
    nama: "",
    jabatan: jabatans,
    posyandu_id: idPosyandu,
  });

  const [posyanduOptions, setPosyanduOptions] = useState([]);
  const [jabatanOptions] = useState(["Ketua", "Sekretaris", "Anggota", "Bendahara"]);

  const { nama, jabatan, posyandu_id } = kader;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posyandu`, apiAuth)
      .then((response) => {
        setPosyanduOptions(response.data.data);
      })
      .catch((error) => {
        errorHandling(error);
      });
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setKader({ ...kader, [name]: value });
  };

  const showAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mengedit kader",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        onSubmit(e);
      }
    });

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/kader`, kader, apiAuth);
      navigate(`/kelurahan/detail-posyandu/${posyandu_id}`);
    } catch (error) {
      // Handle errors
      setLoading(false);
      errorHandling(error);
    }
  };

  return (
    <main className="container">
      <div className="container-fluid">
        <h2 className="custom-judul">TAMBAH KADER POSYANDU</h2>

        <form onSubmit={showAlert}>
          <label htmlFor="nama">
            <span>Nama Kader*</span>
            <input
              type="text"
              id="nama"
              name="nama"
              value={nama}
              onChange={onInputChange}
              required
            />
          </label>

          <label htmlFor="posyandu">
            <span>Nama Posyandu*</span>
            <select
              id="posyandu"
              name="posyandu_id"  // Match the name attribute with the key in the kader state
              value={posyandu_id}
              onChange={onInputChange}
            >
              <option value="">--Pilih--</option>
              {posyanduOptions &&
                posyanduOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.nama}
                  </option>
                ))}
            </select>

          </label>

          <label htmlFor="jabatan">
            <span>JABATAN*</span>
            <select
              id="jabatan"
              name="jabatan"
              value={jabatan}
              onChange={onInputChange}
            >
              <option value="">--Pilih--</option>
              {jabatanOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {loading ? (
            <div className="text-center">
              <ClipLoader loading={loading} size={20} />
            </div>
          ) : (
            <button type="submit" className="submit-button">
              Simpan
            </button>)}
        </form>
      </div>
    </main>
  );
}

export default TambahKader;
