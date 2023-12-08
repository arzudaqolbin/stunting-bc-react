import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/edit-data-tambahan.css";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

function EditDataTambahan({ idPuskesmas, apiAuth, idBalita }) {
  let navigate = useNavigate();
  const [idData, setIdData] = useState("");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

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
      .get(`${BASE_URL}/dataTambahanBalitas/byBalitaId/${idBalita}`, apiAuth)
      .then((response) => {
        const existingDataTambahan = response.data;

        if (existingDataTambahan) {
          setIdData(existingDataTambahan.id);
          setDataTambahan(existingDataTambahan);
        }
        setLoading(false)
      })
      .catch((error) => {
        errorHandling(error);
        setLoading(false);
        // console.error(
        //   "Terjadi kesalahan saat mengambil data tambahan balita:",
        //   error
        // );
      });
  }, [idData]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDataTambahan({ ...dataTambahan, [name]: value });
  };

  const [errors, setErrors] = useState({
    riwayat_sakit: "",
  });

  const confirmAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mengedit data tambahan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali"
    }).then((result) => {
      if (result.isConfirmed) {
        // acc izin
        onSubmit(e)
      }
    });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

  // Validasi riwayat penyakit
  if (dataTambahan.riwayat_sakit && !/^[a-zA-Z.,'`-\s]+$/.test(dataTambahan.riwayat_sakit)) {
    isValid = false;
    newErrors.riwayat_sakit = "Riwayat penyakit tidak valid.";
  } else {
    newErrors.riwayat_sakit = "";
  }

    // Set ulang state errors
    setErrors(newErrors);

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading2(true);
    try {
      if (idData) {
        await axios.put(
          `${BASE_URL}/dataTambahanBalitas/${idData}`,
          dataTambahan,
          apiAuth
        );
      } else {
        await axios.post(`${BASE_URL}/dataTambahanBalitas`, dataTambahan, apiAuth);
      }
      showSuccessPostToast(idBalita);
      // setLoading2(false);
    } catch (error) {
      setLoading2(false);
      showFailedPostToast()
      // if (error.response) {
      //   console.error(
      //     "Kesalahan dalam permintaan ke server:",
      //     error.response.status,
      //     error.response.data
      //   );
      // } else if (error.request) {
      //   console.error("Tidak ada respon dari server:", error.request);
      // } else {
      //   console.error("Terjadi kesalahan:", error.message);
      // }
    }
  };

  const showSuccessPostToast = async (idBalita) => {
    return new Promise((resolve) => {
      toast.success("Data berhasil diubah", {
        data: {
          title: "Success",
          text: "Data berhasil diubah",
        },
        onClose: async () => {
          // Menunggu 3 detik sebelum melakukan navigasi
          await new Promise(resolve => setTimeout(resolve, 3000));

          // Mengakhiri janji saat Toast ditutup
          navigate(`/puskesmas/detail-balita/${idBalita}`);
          setLoading2(false);
          resolve();
        },
      });
    });
  };

  const showFailedPostToast = () => {
    toast.error("Gagal Menyimpan Data", {
      data: {
        title: "Error toast",
        text: "This is an error message",
      },
    });
  }

  return (
    <>
      {loading ? (
        <div className='text-center'>
          <ClipLoader
            loading={loading}
            size={150}
          />
        </div>) : (
        <div className="main d-flex flex-column min-vh-100" style={{ backgroundColor: '#E4F3EF' }}>
          <main className="container">
            <i class="fa-solid fa-arrow-left text-2x"></i>
            <h2 className="custom-judul">Ubah Data Tambahan Balita Stunting</h2>
            <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>
            <div className="container-fluid">
              <div className="table-responsive">
                <form
                  onSubmit={(e) => {
                    // Mencegah pengiriman formulir langsung
                    e.preventDefault();
                    if (validateForm()) {
                      confirmAlert(e);
                    }
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
                    <div className={`error`}>{errors.riwayat_sakit}</div>
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
                  {loading2 ? (
                    <div className="text-center">
                      <ClipLoader loading={loading2} size={20} />
                    </div>
                  ) : (
                    <button type="submit" className="submit-button">
                      Simpan
                    </button>)}
                </form>
              </div>
            </div>
          </main>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default EditDataTambahan;
