import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL, { errorHandling } from "../../base/apiConfig";
import "../css/form-kelurahan.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function EditKader({ idKelurahan, apiAuth, idKader }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
        errorHandling(error);
      });

    axios
      .get(`${BASE_URL}/posyandu`, apiAuth)
      .then((response) => {
        setPosyanduOptions(response.data.data);
      })
      .catch((error) => {
        errorHandling(error);
      });
  }, [idKader, apiAuth]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setKader({ ...kader, [name]: value });
  };

  const showAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mengedit kader",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, yakin!",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        onSubmit(e);
      }
    });

  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_URL}/kader/${idKader}`, kader, apiAuth).then((res) => {
        showSuccessPostToast(kader.posyandu_id)
      });
      // navigate(`/kelurahan/detail-posyandu/${kader.posyandu_id}`);
    } catch (error) {
      showFailedPostToast()
      setLoading(false);
      errorHandling(error);
    }
  };

  const showSuccessPostToast = async (idPosyandu) => {
    return new Promise((resolve) => {
      toast.success("Data berhasil diubah", {
        data: {
          title: "Success",
          text: "Data berhasil disimpan",
        },
        onClose: async () => {
          // Menunggu 3 detik sebelum melakukan navigasi
          await new Promise(resolve => setTimeout(resolve, 3000));

          // Mengakhiri janji saat Toast ditutup
          navigate(`/kelurahan/detail-posyandu/${idPosyandu}`);
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
    <main className="container">
      <i className="fa-solid fa-arrow-left"></i>
      <div className="container-fluid">
        <h2 className="custom-judul">EDIT KADER POSYANDU</h2>
        <div className="table-responsive">
          <form
            onSubmit={(e) => {
              showAlert(e);
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
            {loading ? (
              <div className="text-center">
                <ClipLoader loading={loading} size={20} />
              </div>
            ) : (
              <button type="submit" className="submit-button">
                Simpan
              </button>)}
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default EditKader;
