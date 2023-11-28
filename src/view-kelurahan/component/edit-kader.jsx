import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import "../css/form-kelurahan.css";

function EditKader({ idKelurahan, apiAuth, idKader }) {
  let navigate = useNavigate();

  const [kader, setKader] = useState({
    nama: "",
    jabatan: "",
    posyandu_id: "",
  });

  const [posyanduOptions, setPosyanduOptions] = useState([]);
  const [jabatanOptions, setJabatanOptions] = useState(["Ketua", "Bendahara", "Sekretaris", "Anggota"]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/kader/${idKader}`, apiAuth)
      .then((response) => {
        const kaderData = response.data.data;
        setKader(kaderData);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data kader:", error);
      });

    axios
      .get(`${BASE_URL}/posyandu`, apiAuth)
      .then((response) => {
        setPosyanduOptions(response.data.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data posyandu:", error);
      });
  }, [idKader, apiAuth]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setKader({ ...kader, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_URL}/kader/${idKader}`, kader, apiAuth);
      navigate(`/kelurahan/detail-posyandu/${kader.posyandu_id}`);
    } catch (error) {
      if (error.response) {
        console.error(
          "Kesalahan dalam permintaan ke server:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Tidak ada respon dari server:", error.request);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };

  return (
    <main className="container">
      <i className="fa-solid fa-arrow-left"></i>
      <div className="container-fluid">
        <h2 className="custom-judul">EDIT KADER POSYANDU</h2>
        <div className="table-responsive">
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <label htmlFor="nama">
              <span>NAMA KADER*</span>
              <input
                type="text"
                id="nama"
                name="nama"
                value={kader.nama}
                onChange={onInputChange}
                required
              />
            </label>

            <label htmlFor="posyandu">
              <span>NAMA POSYANDU*</span>
              <select
                id="posyandu"
                name="posyandu_id"
                value={kader.posyandu_id}
                onChange={onInputChange}
              >
                <option value="">--Pilih--</option>
                {posyanduOptions.map((option) => (
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
                value={kader.jabatan}
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

            <button type="submit" className="submit-button">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditKader;
