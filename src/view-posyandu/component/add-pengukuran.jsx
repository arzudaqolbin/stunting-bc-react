import "../css/add-pengukuran.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import BASE_URL from "../../base/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { ClipLoader } from 'react-spinners';
// import 'react-datepicker/dist/react-datepicker.css';


import data_tbu_lk from '../../data-patokan-pengukuran/data-tbu-lk';
import data_tbu_pr from '../../data-patokan-pengukuran/data-tbu-pr';
import data_bbu_lk from '../../data-patokan-pengukuran/data-bbu-lk';
import data_bbu_pr from '../../data-patokan-pengukuran/data-bbu-pr';
import data_bbpb_lk from '../../data-patokan-pengukuran/data-bbpb-0_24-lk';
import data_bbpb_pr from '../../data-patokan-pengukuran/data-bbpb-0_24-pr';
import data_bbtb_lk from '../../data-patokan-pengukuran/data-bbtb-24_60-lk';
import data_bbtb_pr from '../../data-patokan-pengukuran/data-bbtb-24_60-pr';
import data_kbm_lk from "../../data-patokan-pengukuran/data-kbm-lk";
import data_kbm_pr from "../../data-patokan-pengukuran/data-kbm-pr";


function AddPengukuran({idPosyandu, apiAuth }) {
  let navigate = useNavigate();
  console.log("id posyandu = ", idPosyandu);
  const [hasRunEffect, setHasRunEffect] = useState(false);
  const [balitaOptions, setBalitaOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tglLahir, setTglLahir] = useState("");
  const [pengukuran, setPengukuran] = useState({
    balita_id: "",
    tgl_input: null,
    umur: 0,
    tinggi_badan: "",
    berat_badan: "",
    rambu_gizi: "",
    kms: "",
    status_tbu: "",
    status_bbu: "",
    status_bbtb: "",
    posisi_balita: "",
    validasi: false
  });
  console.log("pengukuran");
  console.log(pengukuran);

  const [balita, setBalita] = useState({
    nik: "",
    nama: "",
    jenis_kelamin: "",
    nama_ortu: "",
    pekerjaan_ortu: "Programmer",
    alamat: "",
    rw: "",
    tgl_lahir: "",
    anak_ke: "1",
    umur: "10",
    posyandu_id: 1,
    status_tbu: "Normal",
    status_bbu: "Normal",
    status_bbtb: "Normal"
  });

  // console.log(balita);

  // console.log(pengukuran);

  const {
    balita_id,
    tgl_input,
    tinggi_badan,
    berat_badan,
    umur,
    posisi_balita,
  } = pengukuran;

  const initialPengukuran = {
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
    validasi: 0,
  };


  // untuk mendapatkan list balita diposyandu tersebut
  useEffect(() => {
    if (!hasRunEffect) {
      try {
        axios
          // ini nanti ganti endpointnya by posyandu id
          .get(`${BASE_URL}/balitas/posyandu/${idPosyandu}`, apiAuth)
          .then((response) => {
            setBalitaOptions(response.data.balitas);
            setLoading(false);
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
      setHasRunEffect(true);
    }
  }, [hasRunEffect]);

  // useEffect(() => {
  //   if (!hasRunEffect) {
  //     try {
  //       axios
  //         .get(`${BASE_URL}/balitas/posyandu/${idPosyandu}`, apiAuth)
  //         .then((response) => {
  //           console.log("balita posyandu = ", response.data)
  //           if (Array.isArray(response.data) && response.data.length > 0) {
  //             setBalitaOptions(response.data);
  //             setLoading(false);
  //           } else {
  //             console.error("Respon server tidak sesuai dengan format yang diharapkan.");
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Terjadi kesalahan saat mengambil opsi Balita:", error);
  //         });
  //     } catch (error) {
  //       console.error("Terjadi kesalahan:", error.message);
  //     }
  //     setHasRunEffect(true);
  //   }
  // }, [hasRunEffect]);
  

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "balita_id") {
      setPengukuran({ ...initialPengukuran, balita_id: parseInt(value) });
      const selectedBalita = balitaOptions.find((option) => option.id == value);
      // const selectedBalita = balitaOptions.find((option) => option.nama === value);
      setTglLahir(selectedBalita.tgl_lahir);
      // balita = selectedBalita;

      setBalita((prevBalita) => {
        return {
          ...prevBalita,
          nik: selectedBalita.nik,
          nama: selectedBalita.nama,
          jenis_kelamin: selectedBalita.jenis_kelamin,
          nama_ortu: selectedBalita.nama_ortu,
          pekerjaan_ortu: selectedBalita.pekerjaan_ortu,
          alamat: selectedBalita.alamat,
          rw: selectedBalita.rw,
          tgl_lahir: selectedBalita.tgl_lahir,
          anak_ke: selectedBalita.anak_ke,
          umur: selectedBalita.umur,
          posyandu_id: selectedBalita.posyandu_id,
          status_tbu: selectedBalita.status_tbu,
          status_bbu: selectedBalita.status_bbu,
          status_bbtb: selectedBalita.status_bbtb,
        };
      });


      console.log("ini pilihan balitanya");
      console.log(balita);

    } else if (name === "tgl_input") {
      // setPengukuran({ ...pengukuran, [name]: value });
      pengukuran.tgl_input = value;
      // setPengukuran({ ...initialPengukuran, name: new Date(value) });
      console.log("mau lihat value tgl_input bro");
      console.log(typeof value, value);
      // pengukuran.tgl_input: value;
      calculateUmur(value, tglLahir);
    } else if (name === "posisi_balita") {
      setPengukuran({ ...pengukuran, [name]: value });
    } else {
      setPengukuran({ ...pengukuran, [name]: parseFloat(value) });

    }
  };

  const calculateUmur = (tglPengukuran, tglLahir) => {
    const tglLahirTimestamp = new Date(tglLahir).getTime();
    const tglPengukuranTimestamp = new Date(tglPengukuran).getTime();
    const diffMonths = Math.floor(
      (tglPengukuranTimestamp - tglLahirTimestamp) / (1000 * 60 * 60 * 24 * 30.44)
    );

    setPengukuran({ ...pengukuran, umur: diffMonths });
  };


  const adjustTinggi = (tinggi) => {
    const integerPart = Math.floor(tinggi);
    const decimalPart = tinggi - integerPart;
    let tinggiAdj;

    if (decimalPart >= 0 && decimalPart <= 0.3) {
      tinggiAdj = integerPart;
    } else if (decimalPart >= 0.4 && decimalPart <= 0.6) {
      tinggiAdj = integerPart + 0.5;
    } else if (decimalPart >= 0.8 && decimalPart <= 0.9) {
      tinggiAdj = integerPart + 1;
    } else if (decimalPart === 0.7) {
      if (integerPart % 2 === 0) {
        tinggiAdj = integerPart + 0.5;
      } else {
        tinggiAdj = integerPart + 1;
      }
    }

    return tinggiAdj;
  }

  const generateStatus_tbu = (jk, umur, tb) => {
    let status = "";

    let patokanData = jk == "Laki-Laki" ? data_tbu_lk : data_tbu_pr;
    const dataReff = patokanData.find((data) => data.umur === umur);

    console.log("reff tbu")
    console.log(dataReff)

    if (dataReff != null) {
      console.log("ini berarti masuk if")
      switch (true) {
        case tb < dataReff.sd_3:
          status = "Sangat Pendek";
          break;
        case tb >= dataReff.sd_3 && tb < dataReff.sd_2:
          status = "Pendek";
          break;
        case tb >= dataReff.sd_2 && tb <= dataReff.sd3:
          status = "Normal";
          break;
        case tb > dataReff.sd3:
          status = "Tinggi";
          break;
        default:
          status = "---";
          break;
      }
      console.log("case pertama ? ", tb, " < ", dataReff.sd_3);
      console.log(status);
    }


    pengukuran.status_tbu = status;

  }

  const generateStatus_bbu = (jk, umur, bb) => {
    let status = "";

    let patokanData = jk == "Laki-Laki" ? data_bbu_lk : data_bbu_pr;
    const dataReff = patokanData.find((data) => data.umur === umur);

    if (dataReff) {
      switch (true) {
        case bb < dataReff.sd_3:
          status = "BB Sangat Kurang";
          break;
        case bb >= dataReff.sd_3 && bb < dataReff.sd_2:
          status = "BB Kurang";
          break;
        case bb >= dataReff.sd_2 && bb <= dataReff.sd1:
          status = "Normal";
          break;
        case bb > dataReff.sd1:
          status = "Resiko BB Lebih";
          break;
        default:
          status = "---";
          break;
      }
    }

    pengukuran.status_bbu = status;

  }

  const generateStatus_bbtb = (jk, umur, bb, tb) => {
    let status = "";
    let tbAdj = adjustTinggi(tb);

    console.log("jk = ", jk,"umur = ", umur,"bb = ", bb,"tb = ", tb,"tbAdj = ", tbAdj)

    let patokanData = [];
    if (jk == "Laki-Laki") {
      patokanData = umur <= 24 ? data_bbpb_lk : data_bbtb_lk;
    }
    else {
      patokanData = umur <= 24 ? data_bbpb_pr : data_bbtb_pr;
    }

    const dataReff = patokanData.find((data) => data.tb === tbAdj);

    if (dataReff) {
      switch (true) {
        case bb < dataReff.sd_3:
          status = "Gizi Buruk";
          break;
        case bb >= dataReff.sd_3 && bb < dataReff.sd_2:
          status = "Gizi Kurang";
          break;
        case bb >= dataReff.sd_2 && bb <= dataReff.sd1:
          status = "Normal";
          break;
        case bb > dataReff.sd1 && bb <= dataReff.sd2:
          status = "Resiko Lebih";
          break;
        case bb > dataReff.sd2 && bb <= dataReff.sd3:
          status = "Gizi Lebih";
          break;
        case bb > dataReff.sd3:
          status = "Obesitas";
          break;
        default:
          status = "---";
          break;
      }
    }

    console.log("statusbbtb : ", status)

    // setPengukuran((prevResult) => ({
    //   ...prevResult,
    //   status_bbtb: status
    // }));

    pengukuran.status_bbtb = status;
  }

  const generateKms = (jk, umur, bb) => {

    let status = "";

    let patokanData = jk === 1 ? data_bbu_lk : data_bbu_pr;
    const dataReff = patokanData.find((data) => data.umur === umur);

    if (dataReff) {
      switch (true) {
        case bb <= dataReff.sd_3:
          status = "Merah";
          break;
        case bb >= dataReff.sd_1 && bb <= dataReff.sd1:
          status = "Hijau";
          break;
        case bb >= dataReff.sd_2 && bb < dataReff.sd_1:
          status = "Hijau Atas";
          break;
        case bb > dataReff.sd1 && bb <= dataReff.sd2:
          status = "Hijau Atas";
          break;
        case bb < dataReff.sd_2 && bb > dataReff.sd_3:
          status = "Kuning";
          break;
        case bb > dataReff.sd2:
          status = "Kuning";
          break;
        default:
          status = "---";
          break;
      }
    }

    pengukuran.kms = status;

  }

  const generateRambuGizi = async (jk, umur, bb, idBalita) => {
    const patokanData = jk === 1 ? data_kbm_lk : data_kbm_pr;
    const kbm = patokanData.find((data) => data.umur === umur).kbm;
    console.log("melbu rambu gizi")

    if (umur === 0) {
      pengukuran.rambu_gizi = "B";
    } else {
      try {
        const prevUmur = umur - 1;
        const prevPengukuran = await axios.get(`${BASE_URL}/pengukurans/umur/${idBalita}/${prevUmur}`, apiAuth);
        console.log("wkjebfiwefbwkevfiwyevfbwbefljwqbfuoqw fhqw fwqufvwqufvwdqqqqqqqqqq")
        console.log("pengukuran sbelumnya = ", prevPengukuran)
        // const prevPengukuran = await axios.get(`${BASE_URL}/pengukurans/1`, apiAuth);
        const differ = bb - prevPengukuran.data.bb;

        let status = "";
        if (differ < kbm) {
          status = 'T';
        } else {
          status = 'N';
        }

        setPengukuran((prevResult) => ({
          ...prevResult,
          rambu_gizi: status
        }));
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 Not Found: set a default status
          setPengukuran((prevResult) => ({
            ...prevResult,
            rambu_gizi: 'O'
          }));
        } else {
          console.log("Terjadi kesalahan dalam generateRambuGizi:", error);
        }
      }
    }
  };


  // nanti atur statusnya disini broo
  const onSubmit = async (e, balita, pengukuran) => {
    e.preventDefault();

    console.log("balita")
    console.log(balita)

    // console.log("pengukuran")
    // console.log(pengukuran)

    const jk = balita.jenis_kelamin;
    const idBalita = parseInt(balita_id)
    const umur = parseInt(pengukuran.umur);
    const bb = parseFloat(pengukuran.berat_badan);
    const tb = parseFloat(pengukuran.tinggi_badan);
    console.log("jk = ", jk, "umur = ", umur);
    generateStatus_bbtb(jk, umur, bb, tb);
    generateStatus_tbu(jk, umur, tb);
    generateStatus_bbu(jk, umur, bb);
    generateKms(jk, umur, bb);
    generateRambuGizi(jk, umur, bb, idBalita);

    try {

      console.log("pengukuran terbaru");
      console.log(pengukuran);

      await axios.post(`${BASE_URL}/pengukurans`, pengukuran, apiAuth).then((fetch) => {
        console.log(fetch.status);
      })

      showSuccessPostToast( balita_id);


    } catch (error) {
      showFailedPostToast()
      if (error.response) {
        console.error(
          "Kesalahan dalam permintaan ke server:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        showFailedPostToast()
        console.error("Tidak ada respon dari server:", error.request);
      } else {
        showFailedPostToast()
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };

  // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const showSuccessPostToast = async ( idBalita) => {
    return new Promise((resolve) => {
        toast.success("Data berhasil disimpan", {
            data: {
                title: "Success",
                text: "Data berhasil disimpan",
            },
            onClose: async () => {
                // Menunggu 3 detik sebelum melakukan navigasi
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // Mengakhiri janji saat Toast ditutup
                navigate(`/posyandu/detail-balita/${idBalita}`);
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

  const confirmAlert = (e, balita, pengukuran) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Menambahkan data pengukuran",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali"
      }).then((result) => {
      if (result.isConfirmed) {
          // acc izin
          onSubmit(e, balita, pengukuran)
      }
  });

  }

  return (
    <>
    {
      loading ?(
      <div className='text-center'>
        <ClipLoader
          loading={loading}
          size={150}
        />
      </div>) : (
    <main className="container">
      <h2 className="custom-judul">Form Pengukuran Balita</h2>
      <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>

      <div className="container-fluid">
      <div className="table-responsive">
        <form
          onSubmit={(e) => {
            // onSubmit(e, balita, pengukuran);
            confirmAlert(e, balita, pengukuran);
          }}
        >
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
          <label>
            <span>Tanggal Lahir*</span>
            <input
              type="date"
              id="tgl_lahir"
              name="tgl_lahir"
              value={tglLahir}
              disabled
            />
          </label>
          <label htmlFor="tgl_input">
            <span>Tanggal Pengukuran*</span>
            <input
              type="date"
              className="form-control"
              id="tgl_input"
              name="tgl_input"
              value={tgl_input}
              onChange={(e) => onInputChange(e)}
              required
            />
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
            <span>Posisi Pengukuran</span>
            <select
              id="posisi_balita"
              name="posisi_balita"
              value={posisi_balita}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">--Pilih--</option>
              <option value="Berdiri">Berdiri</option>
              <option value="Tidur">Tidur</option>
            </select>
          </label>
          <button type="submit" className="submit-button">
            Simpan
          </button>
        </form>
        </div>
      </div>
      <ToastContainer />
    </main>)
    }
    </>
  );
}

export default AddPengukuran;
