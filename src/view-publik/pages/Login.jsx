import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

import logoDki from "../../aset/logo-dki.png";
import logoJaktim from "../../aset/logo-jaktim.png";
import BASE_URL from "../../base/apiConfig";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit login")

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username: username,
        password: password,
      });
      const { data } = response;
      const token = data.access_token;
      localStorage.setItem('access_token', token);

      const decodedToken = decodeToken(token);

      const roleName = decodedToken.role;
      // localStorage.setItem('role', roleName);
      const id = decodedToken.instansi_id;
      console.log(id)
      let redirectUrl = "/";

      if (roleName === "POSYANDU" || roleName === "PUSKESMAS") {
        redirectUrl = `/${roleName.toLowerCase()}/profile`;
      } else if (roleName === "KELURAHAN") {
        redirectUrl = "/kelurahan/profile";
      }
      navigate(redirectUrl);
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
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#026670" }}
    >
      {/* Untuk main content */}
      <section>
        <div className="logo text-center mt-5">
          <img src={logoDki} style={{ width: "100px" }} alt="Logo DKI" />
          <img
            src={logoJaktim}
            style={{ width: "100px" }}
            alt="Logo Jakarta Timur"
          />
        </div>
        <div className="title-login mt-5">
          <h4 style={{ color: "white", textAlign: 'center' }}>Single Sign On</h4>
          <h4 style={{ color: "orange", textAlign: 'center' }}>
            Dashboard Monitoring Stunting Kelurahan Bidara Cina
          </h4>
        </div>
        <div className="container mt-3 pt-5 col-sm-5">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="text-center">Silahkan melakukan login</h4>

                  <form onSubmit={onSubmit} className="">
                    <div className="text-center">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form control my-1 py-1 col-12 mt-3"
                        placeholder="Username"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form control my-1 py-1 col-12"
                        placeholder="Password"
                      />
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <span></span>
                      <label htmlFor="remember">Tampilkan password</label>
                    </div>
                    <div className="text-end mt-3">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  );
};

export default Login;