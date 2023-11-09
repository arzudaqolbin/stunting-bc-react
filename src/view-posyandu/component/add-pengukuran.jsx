import "../css/add-pengukuran.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

function AddPengukuran() {
  let navigate = useNavigate();

  const [balitaOptions, setBalitaOptions] = useState([]);
  const [rambu_gizi, setRambu_gizi] = useState("");
  const [kms, setKms] = useState("");
  const [status_tbu, setStatus_tbu] = useState("");
  const [status_bbu, setStatus_bbu] = useState("");
  const [status_bbtb, setStatus_bbtb] = useState("");

  const [pengukuran, setPengukuran] = useState({
    balita_id: "",
    tgl_input: "",
    umur: "",
    tinggi_badan: "",
    berat_badan: "",
    rambu_gizi: "",
    kms: "",
    status_tbu: "",
    status_bbu: "",
    status_bbtb: "",
    posisi_balita: "",
    validasi: false,
  });

  console.log(pengukuran);

  const {
    balita_id,
    tgl_input,
    tinggi_badan,
    berat_badan,
    umur,
    // bbu,
    // tbu,
    // bbtb,
    // rambu_gizi,
    // kms,
    // status_tbu,
    // status_bbu,
    // status_bbtb,
    posisi_balita,
  } = pengukuran;

  useEffect(() => {
    // if (!isNaN(berat_badan) && !isNaN(umur) && umur > 0) {
    //   const bbu = berat_badan / umur;
    //   setBbu(bbu);
    // }

    // if (!isNaN(tinggi_badan) && !isNaN(umur) && umur > 0) {
    //   const tbu = tinggi_badan / umur;
    //   setTbu(tbu);
    // }

    // if (!isNaN(berat_badan) && !isNaN(tinggi_badan)) {
    //   const bbtb = berat_badan / tinggi_badan;
    //   setBbtb(bbtb);
    // }
    try {
      axios
        .get("http://127.0.0.1:8000/api/balitas")
        .then((response) => {
          setBalitaOptions(response.data);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat mengambil opsi Balita:", error);
        });
    } catch (error) {
      if (error.response) {
        // Respon dari server dengan kode status tertentu
        console.error(
          "Kesalahan dalam permintaan ke server:",
          error.response.status,
          error.response.data
        );
        // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai dengan respon dari server
      } else if (error.request) {
        // Tidak ada respon dari server
        console.error("Tidak ada respon dari server:", error.request);
        // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai untuk kasus ini
      } else {
        // Kesalahan lainnya
        console.error("Terjadi kesalahan:", error.message);
        // Di sini Anda dapat menampilkan pesan kesalahan umum atau menangani dengan cara yang sesuai
      }
    }
  }, []);
  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "balita_id") {
      setPengukuran({ ...pengukuran, balita_id: value });

      const selectedBalita = balitaOptions.find((option) => option.id == value);

      if (selectedBalita && tgl_input) {
        // Hitung umur dalam bulan
        const tgl_lahir = new Date(selectedBalita.tgl_lahir).getTime();
        const tglPengukuran = new Date(tgl_input).getTime();
        const diffMonths = Math.floor(
          (tglPengukuran - tgl_lahir) / (1000 * 60 * 60 * 24 * 30.44)
        );

        // Set umur pada input "umur" dan dalam objek "pengukuran"
        setPengukuran({
          ...pengukuran,
          umur: diffMonths,
          balita_id: value,
        });
      }
    } else if (name === "tgl_input") {
      setPengukuran({ ...pengukuran, tgl_input: value, balita_id: value });

      const selectedBalita = balitaOptions.find((option) => option.id == value);

      if (selectedBalita && tgl_input) {
        // Hitung umur dalam bulan
        const tgl_lahir = new Date(selectedBalita.tgl_lahir).getTime();
        const tglPengukuran = new Date(tgl_input).getTime();
        const diffMonths = Math.floor(
          (tglPengukuran - tgl_lahir) / (1000 * 60 * 60 * 24 * 30.44)
        );

        // Set umur pada input "umur" dan dalam objek "pengukuran"
        setPengukuran({
          ...pengukuran,
          umur: diffMonths,
          tgl_input: value,
        });
      }
    } else {
      // Selain dari "balita", hanya mengganti nilai elemen yang diubah
      setPengukuran({ ...pengukuran, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/pengukurans", pengukuran);
      navigate("/lihat-bayi");
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
      <h2 className="custom-judul">Form Pengukuran Balita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <label htmlFor="tgl_input">
            <span>Tanggal Pengukuran*</span>
            <input
              type="date"
              id="tgl_input"
              name="tgl_input"
              value={tgl_input}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="balita_id">
            <span>Nama Balita*</span>
            <select
              id="balita_id"
              name="balita_id"
              value={balita_id}
              required
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--Pilih--</option>
              {balitaOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.nama}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="umur">
            <span>Umur dalam Bulan*</span>
            <input
              type="text"
              id="umur"
              name="umur"
              value={umur}
              onChange={(e) => onInputChange(e)}
              readOnly
              placeholder="auto system dari tanggal pengukuran"
            />
          </label>

          <label htmlFor="berat_badan">
            <span>Berat (kg)*</span>
            <input
              type="number"
              id="berat_badan"
              name="berat_badan"
              value={berat_badan}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="tinggi_badan">
            <span>Tinggi Badan (cm)*</span>
            <input
              type="number"
              id="tinggi_badan"
              name="tinggi_badan"
              value={tinggi_badan}
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>

          <label htmlFor="posisi_balita">
            <span>Jenis Kelamin*</span>
            <select
              id="posisi_balita"
              name="posisi_balita"
              value={posisi_balita}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--Pilih--</option>
              <option value="Berdiri">Berdiri</option>
              <option value="TIdur">TIdur</option>
            </select>
          </label>
        </form>
      </div>
      <button type="submit" className="submit-button">
        Simpan
      </button>
    </main>
  );
}

export default AddPengukuran;
