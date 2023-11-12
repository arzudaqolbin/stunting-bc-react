import React, { useState } from "react";
import axios from "axios";

import logoDki from "../../aset/logo-dki.png";
import logoJaktim from "../../aset/logo-jaktim.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username: username,
        password: password,
      });

      // Handle respons di sini
      console.log(response.data);
    } catch (error) {
      console.error("Login failed!", error.message);
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
        <div className="title text-center mt-3">
          <h4 style={{ color: "white" }}>Single Sign On</h4>
          <h4 style={{ color: "orange" }}>
            Dashboard Monitoring Stunting Kelurahan Bidara Cina
          </h4>
        </div>
        <div className="container mt-3 pt-5 col-sm-5">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="text-center">Silahkan melakukan login</h4>

                  <form onSubmit={handleLogin} className="">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
