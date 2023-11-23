import React from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import Login from "../view-publik/pages/Login";

const PrivateRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate(); // Pindahkan useNavigate ke luar blok kondisional

  if (!token) {
    // Token tidak ada, arahkan pengguna ke halaman login
    return <Login />;
  }

  try {
    // Coba mendekode token
    const decodedToken = decodeToken(token);

    // Periksa peran pengguna
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
