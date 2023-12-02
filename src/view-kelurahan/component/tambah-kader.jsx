import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import "../css/form-kelurahan.css";

function TambahKader({ idKelurahan, apiAuth, idPosyandu, jabatans }) {
  let navigate = useNavigate();

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
        console.error("Terjadi kesalahan saat mengambil data posyandu:", error);
      });
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setKader({ ...kader, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // axios.post(`${BASE_URL}/kader`, kader, apiAuth)
    //   .then((response) => {
    //     console.log(response.data)
    //   }).catch((error) => {
    //     console.log("Terjadi kesalahan saat mengambil data posyandu:", error)
    //   })

    try {
      // console.log(kader);
      const response = await axios.post(`${BASE_URL}/kader`, kader, apiAuth);
      navigate(`/kelurahan/detail-posyandu/${posyandu_id}`);
      console.log(response.data.data)
    } catch (error) {
      // Handle errors
      console.error("Error submitting data:", error);
    }
  };

  return (
    <main className="container">
      <div className="container-fluid">
        <h2 className="custom-judul">TAMBAH KADER POSYANDU</h2>

        <form onSubmit={onSubmit}>
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

          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
}

export default TambahKader;
