import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../base/apiConfig";
import "../css/form-kelurahan.css";

function EditKader({idKelurahan, apiAuth, idKader}) {
  let navigate = useNavigate();

  const [kader, setKader] = useState({
    nama: "",
    jabatan: "",
    posyandu_id: "",
  });

  console.log(kader);

  const { nama, jabatan, posyandu_id } = kader;
  const [posyanduOptions, setPosyanduOptions] = useState([]);
  const [namaLama, setNamaLama] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/kader/${idKader}`)
      .then((response) => {
        setKader(response.data.data);
        setNamaLama(response.data.data.nama);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data kader:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posyandu`)
      .then((response) => {
        setPosyanduOptions(response.data[0]);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data posyandu:", error);
      });
  }, []);

  console.log(posyanduOptions);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "posyandu") {
      setKader({ ...kader, posyandu_id: value });
    } else {
      setKader({ ...kader, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_URL}/kader/${idKader}`, kader);
      navigate(`/kelurahan/detail-posyandu/${posyandu_id}`);
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
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i className="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT KADER POSYANDU</h2>

        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <label htmlFor="posyandu">
            <span>Nama Posyandu*</span>
            <select
              id="posyandu"
              name="posyandu"
              value={posyandu_id}
              onChange={(e) => onInputChange(e)}
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
            <span>JABATAN</span>
            <input
              type="text"
              id="jabatan"
              name="jabatan"
              value={jabatan}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="kader_lama">
            <span>KADER LAMA</span>
            <input
              type="text"
              id="kader_lama"
              name="kader_lama"
              value={namaLama}
              onChange={(e) => onInputChange(e)}
              readOnly
            />
          </label>

          <label htmlFor="kader_baru">
            <span>KADER BARU</span>
            <input
              type="text"
              id="kader_baru"
              name="nama"
              value={nama}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditKader;
