import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/form-posyandu.css";
import BASE_URL from "../../base/apiConfig";

function FormDataTambahan({ idBalita, idPosyandu }) {
  let navigate = useNavigate();
  const [idData, setIdData] = useState("");

  const [dataTambahan, setDataTambahan] = useState({
    balita_id: idBalita,
    asi_eksklusif: "",
    imd: "",
    penyakit_penyerta: "",
    riwayat_sakit: "",
    riwayat_imunisasi: "",
    riwayat_ibu_hamil_kek: "",
    kepemilikan_jamban_sehat: "",
    ktp: "",
    jaminan_kesehatan: "",
    akses_makanan_sehat: "",
    konfirmasi_dsa: "",
  });

  const {
    asi_eksklusif,
    imd,
    penyakit_penyerta,
    riwayat_sakit,
    riwayat_imunisasi,
    riwayat_ibu_hamil_kek,
    kepemilikan_jamban_sehat,
    ktp,
    jaminan_kesehatan,
    akses_makanan_sehat,
    konfirmasi_dsa,
  } = dataTambahan;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/dataTambahanBalitas/byBalitaId/${idBalita}`)
      .then((response) => {
        const existingDataTambahan = response.data;

        if (existingDataTambahan) {
          setIdData(existingDataTambahan.id);
          setDataTambahan(existingDataTambahan);
        }
      })
      .catch((error) => {
        console.error(
          "Terjadi kesalahan saat mengambil data tambahan balita:",
          error
        );
      });
  }, [idData]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDataTambahan({ ...dataTambahan, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (idData) {
        await axios.put(
          `${BASE_URL}/dataTambahanBalitas/${idData}`,
          dataTambahan
        );
      } else {
        await axios.post(`${BASE_URL}/dataTambahanBalitas`, dataTambahan);
      }
      navigate(`/posyandu/${idPosyandu}/daftar-balita`);
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
      <h2 className="custom-judul">Data Tambahan Balita Stunting</h2>

      <div className="container-fluid">
      <div className="table-responsive">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <label htmlFor="asi_eksklusif">
            <span>Asi Eksklusif</span>
            <select
              id="asi_eksklusif"
              name="asi_eksklusif"
              value={asi_eksklusif}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="imd">
            <span>IMD</span>
            <select
              id="imd"
              name="imd"
              value={imd}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="penyakit_penyerta">
            <span>Penyakit Penyerta</span>
            <select
              id="penyakit_penyerta"
              name="penyakit_penyerta"
              value={penyakit_penyerta}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="riwayat_sakit">
            <span>Riwayat Sakit</span>
            <input
              type="text"
              id="riwayat_sakit"
              name="riwayat_sakit"
              value={riwayat_sakit}
              onChange={(e) => onInputChange(e)}
            />
          </label>

          <label htmlFor="riwayat_imunisasi">
            <span>Riwayat Imunisasi</span>
            <select
              id="riwayat_imunisasi"
              name="riwayat_imunisasi"
              value={riwayat_imunisasi}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="riwayat_ibu_hamil_kek">
            <span>Riwayat Ibu Hamil KEK</span>
            <select
              id="riwayat_ibu_hamil_kek"
              name="riwayat_ibu_hamil_kek"
              value={riwayat_ibu_hamil_kek}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="kepemilikan_jamban_sehat">
            <span>Kepemilikan Jamban Sehat</span>
            <select
              id="kepemilikan_jamban_sehat"
              name="kepemilikan_jamban_sehat"
              value={kepemilikan_jamban_sehat}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="ktp">
            <span>KTP</span>
            <select
              id="ktp"
              name="ktp"
              value={ktp}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="DKI">DKI</option>
              <option value="Non DKI">Non DKI</option>
            </select>
          </label>

          <label htmlFor="jaminan_kesehatan">
            <span>Kepemilikan BPJS/KIS/JKN/KAJ</span>
            <select
              id="jaminan_kesehatan"
              name="jaminan_kesehatan"
              value={jaminan_kesehatan}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="BPJS">BPJS</option>
              <option value="KIS">KIS</option>
              <option value="JKn">JKn</option>
              <option value="KAJ">KAJ</option>
              <option value="Tidak Ada">Tidak Ada</option>
            </select>
          </label>

          <label htmlFor="akses_makanan_sehat">
            <span>Akses terhadap Makanan Sehat</span>
            <select
              id="akses_makanan_sehat"
              name="akses_makanan_sehat"
              value={akses_makanan_sehat}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </label>

          <label htmlFor="konfirmasi_dsa">
            <span>Sudah Konfirmasi ke DSA</span>
            <select
              id="konfirmasi_dsa"
              name="konfirmasi_dsa"
              value={konfirmasi_dsa}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--pilih--</option>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
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

export default FormDataTambahan;
