import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/edit-balita.css";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

function EditBalita({ idPuskesmas, apiAuth, idBalita }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

  const fiveYearsAgoFormatted = fiveYearsAgo.toISOString().split("T")[0];
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
    status_tbu,
    status_bbu,
    status_bbtb,
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
        // console.error("Terjadi kesalahan saat mengambil opsi Posyandu:", error);
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
        setLoading(false);
      })
      .catch((error) => {
        errorHandling(error);
        // console.error("Terjadi kesalahan saat mengambil data balita:", error);
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

    // Validasi Nama Orang Tua
    if (!balita.jenis_kelamin) {
      isValid = false;
      newErrors.jenis_kelamin = "Pilih jenis kelamin";
    } else {
      newErrors.jenis_kelamin = "";
    }

    // Validasi Pekerjaan Orang Tua
    if (!balita.pekerjaan_ortu) {
      isValid = false;
      newErrors.pekerjaan_ortu = "Pekerjaan orang tua tidak boleh kosong";
    } else if (!/^[a-zA-Z\s]+$/.test(balita.pekerjaan_ortu)) {
      newErrors.pekerjaan_ortu = "Pekerjaan orang tua tidak valid";
      isValid = false;
    } else {
      newErrors.pekerjaan_ortu = "";
    }

    // Validasi Anak-ke
    if (!balita.anak_ke) {
      isValid = false;
      newErrors.anak_ke = "Anak-ke tidak boleh kosong";
    } else if (!/^[0-9]+$/.test(balita.anak_ke)) {
      newErrors.anak_ke = "Tulis hanya dalam angka";
      isValid = false;
    } else {
      newErrors.anak_ke = "";
    }

    if (!balita.tgl_lahir) {
      newErrors.tgl_lahir = "Tanggal lahir tidak boleh kosong ";
      isValid = false;
    } else {
      newErrors.tgl_lahir = "";
    }

    // Validasi RT dan RW
    const rtRwRegex = /^[0-9]+$/;

    if (!rt) {
      isValid = false;
      newErrors.rt = "RT tidak boleh kosong .";
    } else if (!rtRwRegex.test(rt)) {
      newErrors.rt = "RT harus berisi angka tanpa huruf dan simbol";
      isValid = false;
    } else {
      newErrors.rt = "";
    }

    if (!balita.rw) {
      isValid = false;
      newErrors.rw = "RW tidak boleh kosong .";
    } else if (!balita.rw || !rtRwRegex.test(balita.rw)) {
      newErrors.rw = "RW harus berisi angka tanpa huruf dan simbol";
      isValid = false;
    } else {
      newErrors.rw = "";
    }

    // Set ulang state errors
    setErrors(newErrors);

    return isValid;
  };

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
    nama_posyandu: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.put(`${BASE_URL}/balitas/${idBalita}`, balita, apiAuth);
        showSuccessPostToast(idBalita);
      } catch (error) {
        showFailedPostToast();
        errorHandling(error);
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
          await new Promise((resolve) => setTimeout(resolve, 3000));

          // Mengakhiri janji saat Toast ditutup
          navigate(`/puskesmas/detail-balita/${idBalita}`);
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
  };

  const confirmAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Mengubah data balita",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        // acc izin
        onSubmit(e);
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <main className="container">
          <i class="fa-solid fa-arrow-left text-2x"></i>
          <h2 className="custom-judul">Form Edit Data Balita</h2>
          <h3 className="requirement">
            *Menunjukkan pertanyaan yang wajib diisi
          </h3>

          <div className="container-fluid">
            <div className="table-responsive">
              <form
                onSubmit={(e) => {
                  confirmAlert(e);
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
                    onKeyPress={(e) => {
                      if (e.key < "0" || e.key > "9") {
                        e.preventDefault();
                      }
                    }}
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
                    <option value="" disabled selected>
                      Pilih jenis kelamin
                    </option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <div className={`error`}>{errors.jenis_kelamin}</div>
                </label>

                <label htmlFor="anak_ke">
                  <span>Anak Ke-*</span>
                  <input
                    type="type"
                    id="anak_ke"
                    name="anak_ke"
                    value={anak_ke}
                    onChange={(e) => onInputChange(e)}
                    // required
                    onKeyPress={(e) => {
                      if (e.key < "0" || e.key > "9") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div className={`error`}>{errors.anak_ke}</div>
                </label>

                <label htmlFor="umur">
                  <span>Umur*</span>
                  <input
                    type="type"
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
                      onKeyPress={(e) => {
                        if (e.key === ",") {
                          e.preventDefault();
                        }
                      }}
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
                    max={tomorrowString}
                    min={fiveYearsAgoFormatted}
                  />
                  <div className={`error`}>{errors.tgl_lahir}</div>
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
                  <div className={`error`}>{errors.nama_posyandu}</div>
                </label>

                <label htmlFor="status_tbu">
                  <span>Status TBU*</span>
                  <select
                    id="status_tbu"
                    name="status_tbu"
                    value={status_tbu}
                    onChange={(e) => onInputChange(e)}
                  >
                    <option value="" disabled selected>
                      Pilih Status TBU
                    </option>
                    <option value="Sangat Pendek">Sangat Pendek</option>
                    <option value="Pendek">Pendek</option>
                    <option value="Normal">Normal</option>
                    <option value="Tinggi">Tinggi</option>
                  </select>
                  <div className={`error`}>{errors.status_tbu}</div>
                </label>

                <label htmlFor="status_bbu">
                  <span>Status BBU*</span>
                  <select
                    id="status_bbu"
                    name="status_bbu"
                    value={status_bbu}
                    onChange={(e) => onInputChange(e)}
                  >
                    <option value="" disabled selected>
                      Pilih Status BBU
                    </option>
                    <option value="BB Sangat Kurang">BB Sangat Kurang</option>
                    <option value="BB Kurang">BB Kurang</option>
                    <option value="Normal">Normal</option>
                    <option value="Resiko BB Lebih">Resiko BB Lebih</option>
                  </select>
                  <div className={`error`}>{errors.status_bbu}</div>
                </label>

                <label htmlFor="status_bbtb">
                  <span>Status BBTB*</span>
                  <select
                    id="status_bbtb"
                    name="status_bbtb"
                    value={status_bbtb}
                    onChange={(e) => onInputChange(e)}
                  >
                    <option value="" disabled selected>
                      Pilih Status BBTB
                    </option>
                    <option value="Gizi Buruk">Gizi Buruk</option>
                    <option value="Gizi Kurang">Gizi Kurang</option>
                    <option value="Normal">Normal</option>
                    <option value="Resiko Lebih">Resiko Lebih</option>
                    <option value="Gizi Lebih">Gizi Lebih</option>
                    <option value="Obesitas">Obesitas</option>
                  </select>
                  <div className={`error`}>{errors.status_bbtb}</div>
                </label>
                <button type="submit" className="submit-button">
                  Simpan
                </button>
              </form>
            </div>
          </div>
          <ToastContainer />
        </main>
      )}
    </>
  );
}

export default EditBalita;
