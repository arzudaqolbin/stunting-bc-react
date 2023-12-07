import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { errorHandling } from "../../base/apiConfig";

export default function LihatBayi() {
  const [balita, setBalita] = useState([]);
  const [posyandu, setPosyandu] = useState([]);

  useEffect(() => {
    loadDataBalita();
  }, []);

  const loadDataBalita = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/balitas");
      setBalita(result.data);

      axios
        .get("http://127.0.0.1:8000/api/posyandu")
        .then((response) => {
          setPosyandu(response.data.data);
        })
        .catch((error) => {
          // console.error(
          //   "Terjadi kesalahan saat mengambil opsi Posyandu:",
          //   error
          // );
        });
    } catch (error) {
      errorHandling(error);
      // if (error.response) {
      //   // Respon dari server dengan kode status tertentu
      //   console.error(
      //     "Kesalahan dalam permintaan ke server:",
      //     error.response.status,
      //     error.response.data
      //   );
      //   // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai dengan respon dari server
      // } else if (error.request) {
      //   // Tidak ada respon dari server
      //   console.error("Tidak ada respon dari server:", error.request);
      //   // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai untuk kasus ini
      // } else {
      //   // Kesalahan lainnya
      //   console.error("Terjadi kesalahan:", error.message);
      //   // Di sini Anda dapat menampilkan pesan kesalahan umum atau menangani dengan cara yang sesuai
      // }
    }
  };

  return (
    <div className="py-4">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">NIK</th>
            <th scope="col">Nama</th>
            <th scope="col">JK</th>
            <th scope="col">Ortu</th>
            <th scope="col">Pekerjaan_Ortu</th>
            <th scope="col">Alamat</th>
            <th scope="col">RW</th>
            <th scope="col">TTL</th>
            <th scope="col">Anak Ke-</th>
            <th scope="col">Umur</th>
            <th scope="col">Posyandu id</th>
          </tr>
        </thead>
        <tbody>
          {balita.map((bayi) => (
            <tr key={bayi.id}>
              <td>{bayi.nik}</td>
              <td>{bayi.nama}</td>
              <td>{bayi.jenis_kelamin}</td>
              <td>{bayi.nama_ortu}</td>
              <td>{bayi.pekerjaan_ortu}</td>
              <td>{bayi.alamat}</td>
              <td>{bayi.rw}</td>
              <td>{format(new Date(bayi.tgl_lahir), "dd-MM-yyyy")}</td>
              <td>{bayi.anak_ke}</td>
              <td>{bayi.umur}</td>
              {posyandu.map((option) => (
                <td key={option.id}>{option.nama}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
