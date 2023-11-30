import React from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import Login from "../view-publik/pages/Login";
import Swal from "sweetalert2";

const PrivateRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem("access_token");
  let navigate = useNavigate(); // Pindahkan useNavigate ke luar blok kondisional

  if (!token) {
    // Token tidak ada, arahkan pengguna ke halaman login
    // return <Login />;
    navigate('/login-admin');
  }

  try {
    // Coba mendekode token
    const decodedToken = decodeToken(token);

    console.log("apakah masuk private route")
    console.log(decodedToken)

    if(decodedToken.exp < (Date.now()/1000)){
      Swal.fire({
          title: "Waktu Anda Habis",
          text: "Silahkan login kembali"
        }).then((result) => {
          if (result.isConfirmed) {
            // acc izin
            localStorage.clear();
            navigate('/login-admin');
          }
      });
    }

    const roleName = decodedToken.role.toLowerCase();
    if (!roleName || roleName !== requiredRole.toLowerCase()) {
      return <Login />;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Login />;
  }

  // Jika diotorisasi, tampilkan elemen yang sebenarnya
  return element;
};

export default PrivateRoute;
