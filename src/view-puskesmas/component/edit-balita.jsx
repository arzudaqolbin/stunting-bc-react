import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/edit-balita.css";
import BASE_URL from "../../base/apiConfig";

function EditBalita({ idPuskesmas, apiAuth, idBalita }) {
  let navigate = useNavigate();

  const [balita, setBalita] = useState({
    nik: "",
    nama: "",
    jenis_kelamin: "",
    nama_ortu: "",
    pekerjaan_ortu: "",
    alamat: "",
    rw: "",
    tgl_lahir: "",
    anak_ke: "",
    umur: "",
    posyandu_id: "",
    status_tbu: "",
    status_bbu: "",
    status_bbtb: "",
  });

  const {
    nik,
    nama,
    jenis_kelamin,
    nama_ortu,
    pekerjaan_ortu,
    rw,
    alamat,
    tgl_lahir,
    anak_ke,
    umur,
    posyandu_id,
  } = balita;
  const [jalan, setJalan] = useState("");
  const [rt, setRt] = useState("");
  const [posyanduOptions, setPosyanduOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posyandu`, apiAuth)
      .then((response) => {
        setPosyanduOptions(response.data.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil opsi Posyandu:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/balitas/${idBalita}`, apiAuth)
      .then((response) => {
        const dataBalita = response.data;
        // Memisahkan alamat menjadi bagian-bagian terpisah
        const parts = dataBalita.alamat.split(", ");

        let jalan = "";
        let rt = "";

        if (parts.length > 0) {
          jalan = parts[0];
        }
        if (parts.length > 1) {
          const rtPart = parts[1].trim();
          if (rtPart.startsWith("RT")) {
            rt = rtPart.replace("RT ", "");
          }
        }

        setBalita({
          ...dataBalita,
        });
        setJalan(jalan);
        setRt(rt);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data balita:", error);
      });
  }, []);

  useEffect(() => {
    const parts = alamat.split(", ");
    setJalan(parts[0]);
    if (parts[1] !== undefined) {
      setRt(parts[1].replace("RT ", ""));
    } else {
      setRt("");
    }
  }, []);

  useEffect(() => {
    setBalita((prevBalita) => ({
      ...prevBalita,
      alamat: `${jalan ? jalan : ""}${jalan && (rt || rw) ? ", " : ""}${
        rt ? `RT ${rt}` : ""
      }${rw && rt ? ", " : ""}${rw ? `RW ${rw}` : ""}`,
    }));
  }, [jalan, rw, rt]);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "jalan") {
      setJalan(value);
    } else if (name === "rt") {
      setRt(value);
    } else if (name === "posyandu") {
      setBalita({ ...balita, posyandu_id: value });
    } else {
      setBalita({ ...balita, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_URL}/balitas/${idBalita}`, balita, apiAuth);
      navigate(`/puskesmas/detail-balita/${idBalita}`);
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
      <a href="">
        <img src="back.png" alt="Back" className="logo-back" />
      </a>
      <h2 className="custom-judul">Form Edit Data Balita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <label htmlFor="nik">
            <span>NIK*</span>
            <input
              type="text"
              id="nik"
              name="nik"
              value={nik}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="nama">
            <span>Nama Balita*</span>
            <input
              type="text"
              id="nama"
              name="nama"
              value={nama}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="jenis_kelamin">
            <span>Jenis Kelamin*</span>
            <select
              id="jenis_kelamin"
              name="jenis_kelamin"
              value={jenis_kelamin}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--Pilih--</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </label>

          <label htmlFor="anak_ke">
            <span>Anak Ke-*</span>
            <input
              type="number"
              id="anak_ke"
              name="anak_ke"
              value={anak_ke}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="umur">
            <span>Umur*</span>
            <input
              type="number"
              id="umur"
              name="umur"
              value={umur}
              onChange={(e) => onInputChange(e)}
              required
              onKeyPress={(e) => {
                if (e.key < "0" || e.key > "9") {
                  e.preventDefault();
                }
              }}
            />
          </label>

          <label htmlFor="nama_ortu">
            <span>Nama Orang Tua*</span>
            <input
              type="text"
              id="nama_ortu"
              name="nama_ortu"
              value={nama_ortu}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="pekerjaan_ortu">
            <span>Pekerjaan Orang Tua*</span>
            <input
              type="text"
              id="pekerjaan_ortu"
              name="pekerjaan_ortu"
              value={pekerjaan_ortu}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <div className="address-section">
            <label htmlFor="alamat">
              <span>Alamat</span>
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="alamat"
              name="alamat"
              value={alamat}
              onChange={(e) => onInputChange(e)}
              readOnly
            />

            <div className="address-details">
              <label htmlFor="jalan">
                <span>Jalan*</span>
                <input
                  type="text"
                  id="jalan"
                  name="jalan"
                  value={jalan}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </label>

              <label htmlFor="rt">
                <span>RT*</span>
                <input
                  type="text"
                  id="rt"
                  name="rt"
                  value={rt}
                  onChange={(e) => onInputChange(e)}
                  required
                  pattern="\d{2,}"
                  title="Awali angka satuan dengan angka 0, misal 01"
                  onKeyPress={(e) => {
                    if (e.key < "0" || e.key > "9") {
                      e.preventDefault();
                    }
                  }}
                />
              </label>

              <label htmlFor="rw">
                <span>RW*</span>
                <input
                  type="text"
                  id="rw"
                  name="rw"
                  value={rw}
                  onChange={(e) => onInputChange(e)}
                  required
                  pattern="\d{2,}"
                  title="Awali angka satuan dengan angka 0, misal 01"
                  onKeyPress={(e) => {
                    if (e.key < "0" || e.key > "9") {
                      e.preventDefault();
                    }
                  }}
                />
              </label>
            </div>
          </div>

          <label htmlFor="Tanggal Lahir" className="form-label">
            <span>Tanggal Lahir Balita*</span>
            <input
              type="date"
              className="form-control"
              placeholder="Masukkan Tanggal Lahir"
              name="tgl_lahir"
              value={tgl_lahir}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

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
          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditBalita;
