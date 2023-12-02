import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/add-balita.css";
import BASE_URL from "../../base/apiConfig";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBalita({ idPosyandu, apiAuth }) {
  let navigate = useNavigate();
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

  const fiveYearsAgoFormatted = fiveYearsAgo.toISOString().split('T')[0];

  const [errors, setErrors] = useState({
    nik: "",
    nama: "",
    jenis_kelamin: "",
    nama_ortu: "",
    pekerjaan_ortu: "",
    alamat: "",
    rt: "",
    rw: "",
    tgl_lahir: "",
    anak_ke: "",
    umur: "",
    posyandu: "",
  });

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
    status_tbu: "Normal",
    status_bbu: "Normal",
    status_bbtb: "Normal",
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
    posyandu,
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
    setBalita((prevBalita) => ({
      ...prevBalita,
      alamat: `${jalan ? jalan : ""}${jalan && (rt || rw) ? ", " : ""}${rt ? `RT ${rt}` : ""
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validasi NIK
    if (!balita.nik) {
      isValid = false;
      newErrors.nik = "NIK tidak boleh kosong";
    } else if (!/^[0-9]+$/.test(balita.nik)) {
      newErrors.nik = "NIK harus berisi angka tanpa huruf dan simbol";
      isValid = false;
    } else {
      newErrors.nik = "";
    }

    // Validasi Nama
    if (!balita.nama) {
      isValid = false;
      newErrors.nama = "Nama balita tidak boleh kosong";
    } else if (!/^[a-zA-Z\s`.'-]+$/.test(balita.nama)) {
      newErrors.nama = "Nama tidak valid";
      isValid = false;
    } else {
      newErrors.nama = "";
    }

    // Validasi Umur
    if (!balita.umur) {
      isValid = false;
      newErrors.umur = "Umur tidak boleh kosong";
    } else if (balita.umur <= 0 || balita.umur > 60) {
      newErrors.umur = "Umur harus diantara 1-60 tahun";
      isValid = false;
    } else {
      newErrors.umur = "";
    }

    // Validasi Nama Orang Tua
    if (!balita.nama_ortu) {
      isValid = false;
      newErrors.nama_ortu = "Nama orang tua tidak boleh kosong";
    } else if (!/^[a-zA-Z\s`.'-]+$/.test(balita.nama_ortu)) {
      newErrors.nama_ortu = "Nama orang tua tidak valid";
      isValid = false;
    } else {
      newErrors.nama_ortu = "";
    }

    // Validasi jenis kelamin
    if (!balita.jenis_kelamin) {
      isValid = false;
      newErrors.jenis_kelamin = "Pilih jenis kelamin.";
    } else {
      newErrors.jenis_kelamin = "";
    }

    // Validasi Pekerjaan Orang Tua
    if (!balita.pekerjaan_ortu) {
      isValid = false;
      newErrors.pekerjaan_ortu = "Pekerjaan orang tua tidak boleh kosong";
    } else if (!/^[a-zA-Z0-9\s]+$/.test(balita.pekerjaan_ortu)) {
      newErrors.pekerjaan_ortu = "Pekerjaan orang tua tidak valid";
      isValid = false;
    } else {
      newErrors.pekerjaan_ortu = "";
    }

    // Validasi Anak-ke
    if (!balita.anak_ke) {
      isValid = false;
      newErrors.anak_ke = "Anak-ke tidak boleh kosong";
    } else if (balita.anak_ke < 1 || balita.anak_ke > 25) {
      newErrors.anak_ke = "Anak ke- tidak valid";
      isValid = false;
    } else {
      newErrors.anak_ke = "";
    }

    if (!balita.tgl_lahir) {
      newErrors.tgl_lahir = "Tanggal lahir tidak boleh kosong";
      isValid = false;
    } else {
      newErrors.tgl_lahir = "";
    }

    // Validasi RT dan RW

    if (!jalan) {
      isValid = false;
      newErrors.jalan = "Jalan tidak boleh kosong";
    } else {
      newErrors.jalan = "";
    }

    if (!rt) {
      isValid = false;
      newErrors.rt = "RT tidak boleh kosong";
    } else {
      newErrors.rt = "";
    }

    if (!balita.rw) {
      isValid = false;
      newErrors.rw = "RW tidak boleh kosong";
    } else {
      newErrors.rw = "";
    }
    // alert(balita.posyandu_id);

    // Validasi nama posyandu
    if (!balita.posyandu_id) {
      isValid = false;
      newErrors.posyandu = "Pilih posyandu";
    } else {
      newErrors.posyandu = "";
    }

    // Set ulang state errors
    setErrors(newErrors);

    return isValid;
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Menambahkan balita baru",
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

  const showSuccessPostToast = async () => {
    return new Promise((resolve) => {
      toast.success("Data berhasil disimpan", {
        data: {
          title: "Success",
          text: "Data berhasil disimpan",
        },
        onClose: async () => {
          // Menunggu 3 detik sebelum melakukan navigasi
          await new Promise(resolve => setTimeout(resolve, 3000));
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const respon = await axios.post(`${BASE_URL}/balitas`, balita, apiAuth);
        showSuccessPostToast();
        navigate(`/posyandu/detail-balita/${respon.data.id}`);
        
      } catch (error) {
        showFailedPostToast();
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
    }


  };

  return (
    <main className="container">
      <h2 className="custom-judul">Form Pendataan Balita</h2>
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
            
            <label htmlFor="nik">
              <span>NIK*</span>
              <input
                type="text"
                id="nik"
                name="nik"
                value={nik}
                onChange={(e) => onInputChange(e)}
                // required
              />
              <div className={`error`}>{errors.nik}</div>
            </label>

            <label htmlFor="nama">
              <span>Nama Balita*</span>
              <input
                type="text"
                id="nama"
                name="nama"
                value={nama}
                onChange={(e) => onInputChange(e)}
                // required
              />
              <div className={`error`}>{errors.nama}</div>
            </label>

            <label htmlFor="jenis_kelamin">
              <span>Jenis Kelamin*</span>
              <select
                id="jenis_kelamin"
                name="jenis_kelamin"
                value={jenis_kelamin}
                onChange={(e) => onInputChange(e)}
              >
                <option value="" disabled selected>--Pilih--</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <div className={`error`}>{errors.jenis_kelamin}</div>
            </label>

            <label htmlFor="anak_ke">
              <span>Anak Ke-*</span>
              <input
                type="number"
                id="anak_ke"
                name="anak_ke"
                value={anak_ke}
                onChange={(e) => onInputChange(e)}
                // required
              />
              <div className={`error`}>{errors.anak_ke}</div>
            </label>

            <label htmlFor="umur">
              <span>Umur*</span>
              <input
                type="number"
                id="umur"
                name="umur"
                value={umur}
                onChange={(e) => onInputChange(e)}
                // required
                onKeyPress={(e) => {
                  if (e.key < "0" || e.key > "9") {
                    e.preventDefault();
                  }
                }}
              />
              <div className={`error`}>{errors.umur}</div>
            </label>

            <label htmlFor="nama_ortu">
              <span>Nama Orang Tua*</span>
              <input
                type="text"
                id="nama_ortu"
                name="nama_ortu"
                value={nama_ortu}
                onChange={(e) => onInputChange(e)}
                // required
              />
              <div className={`error`}>{errors.nama_ortu}</div>
            </label>

            <label htmlFor="pekerjaan_ortu">
              <span>Pekerjaan Orang Tua*</span>
              <input
                type="text"
                id="pekerjaan_ortu"
                name="pekerjaan_ortu"
                value={pekerjaan_ortu}
                onChange={(e) => onInputChange(e)}
                // required
              />
              <div className={`error`}>{errors.pekerjaan_ortu}</div>
            </label>

              <label htmlFor="alamat">
                <span>Alamat</span>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="alamat"
                  name="alamat"
                  value={alamat}
                  onChange={(e) => onInputChange(e)}
                  readOnly
                />
              </label>

            <div className="address-section">
              <div className="address-details">
                <label htmlFor="jalan">
                  <span>Jalan*</span>
                  <input
                    type="text"
                    id="jalan"
                    name="jalan"
                    value={jalan}
                    onChange={(e) => onInputChange(e)}
                    // required
                  />
                  <div className={`error`}>{errors.jalan}</div>
                </label>

                <label htmlFor="rt">
                  <span>RT*</span>
                  <input
                    type="text"
                    id="rt"
                    name="rt"
                    value={rt}
                    onChange={(e) => onInputChange(e)}
                    // required
                    pattern="\d{2,}"
                    title="Awali angka satuan dengan angka 0, misal 01"
                    onKeyPress={(e) => {
                      if (e.key < "0" || e.key > "9") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div className={`error`}>{errors.rt}</div>
                </label>

                <label htmlFor="rw">
                  <span>RW*</span>
                  <input
                    type="text"
                    id="rw"
                    name="rw"
                    value={rw}
                    onChange={(e) => onInputChange(e)}
                    // required
                    pattern="\d{2,}"
                    title="Awali angka satuan dengan angka 0, misal 01"
                    onKeyPress={(e) => {
                      if (e.key < "0" || e.key > "9") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div className={`error`}>{errors.rw}</div>
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
                // required
                min={fiveYearsAgoFormatted}
                max={tomorrowString}
              />
              <div className={`error`}>{errors.tgl_lahir}</div>
            </label>

            <label htmlFor="posyandu">
              <span>Nama Posyandu*</span>
              <select
                id="posyandu"
                name="posyandu"
                value={posyandu}
                onChange={(e) => onInputChange(e)}
              >
                <option value="" disabled selected>--Pilih--</option>
                {posyanduOptions &&
                  posyanduOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.nama}
                    </option>
                  ))}
              </select>
              <div className={`error`}>{errors.posyandu}</div>
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

export default AddBalita;
