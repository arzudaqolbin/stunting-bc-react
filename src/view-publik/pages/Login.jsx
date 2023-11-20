// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import logoDki from "../../aset/logo-dki.png";
// import logoJaktim from "../../aset/logo-jaktim.png";

// const Login = () => {
//   let navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       let jwt = require("jsonwebtoken");

//       const response = await axios.post("http://127.0.0.1:8000/api/login", {
//         username: username,
//         password: password,
//       });

//       const { data } = response;
//       const { access_token } = data;

//       if (access_token) {
//         try {
//           // Mendekode token
//           const decodedToken = jwt.decode(access_token);

//           // Dapatkan informasi dari token
//           const { role, nama, id } = decodedToken;

//           console.log("Role:", role);
//           console.log("Nama:", nama);
//           console.log("ID:", id);
//         } catch (error) {
//           console.error("Error decoding token:", error.message);
//         }
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error(
//           "Kesalahan dalam permintaan ke server:",
//           error.response.status,
//           error.response.data.massage
//         );
//       } else if (error.request) {
//         console.error("Tidak ada respon dari server:", error.request);
//       } else {
//         console.error("Terjadi kesalahan:", error.message);
//       }
//     }
//   }; 

//   return (
//     <div
//       className="d-flex flex-column min-vh-100"
//       style={{ backgroundColor: "#026670" }}
//     >
//       {/* Untuk main content */}
//       <section>
//         <div className="logo text-center mt-5">
//           <img src={logoDki} style={{ width: "100px" }} alt="Logo DKI" />
//           <img
//             src={logoJaktim}
//             style={{ width: "100px" }}
//             alt="Logo Jakarta Timur"
//           />
//         </div>
//         <div className="title text-center mt-3">
//           <h4 style={{ color: "white" }}>Single Sign On</h4>
//           <h4 style={{ color: "orange" }}>
//             Dashboard Monitoring Stunting Kelurahan Bidara Cina
//           </h4>
//         </div>
//         <div className="container mt-3 pt-5 col-sm-5">
//           <div className="row">
//             <div className="col-sm-8 m-auto">
//               <div className="card border-0 shadow">
//                 <div className="card-body">
//                   <h4 className="text-center">Silahkan melakukan login</h4>

//                   <form onSubmit={handleLogin} className="">
//                     <div className="text-center">
//                       <input
//                         type="text"
//                         name="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="form control my-1 py-1 col-12 mt-3"
//                         placeholder="Username"
//                       />
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="form control my-1 py-1 col-12"
//                         placeholder="Password"
//                       />
//                     </div>
//                     <div className="checkbox">
//                       <input
//                         type="checkbox"
//                         id="remember"
//                         name="remember"
//                         onChange={() => setShowPassword(!showPassword)}
//                       />
//                       <span></span>
//                       <label htmlFor="remember">Tampilkan password</label>
//                     </div>
//                     <div className="text-end mt-3">
//                       <button type="submit" className="btn btn-primary">
//                         Login
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import BASE_URL from "../../base/apiConfig";
import logoDki from "../../aset/logo-dki.png";
import logoJaktim from "../../aset/logo-jaktim.png";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // console.log("heih");
  // const decodedToken = jwtDecode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3lpa3d1ZnUuZG9tY2xvdWQuaW8vYXBpL2xvZ2luIiwiaWF0IjoxNzAwNDUzMzM0LCJleHAiOjE3MDA0NTY5MzQsIm5iZiI6MTcwMDQ1MzMzNCwianRpIjoiRk9PaEJrRlEya0wyZWgzSCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zxTIOsBi8Y5Y_8tIZi2X4G5F7ulwi_Re9mByTQgkWo8");
  // console.log(decodedToken);

//   function parseJwt (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return console.log(JSON.parse(jsonPayload));
//   }


// parseJwt("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzAwNDQ5MTE4LCJleHAiOjE3MDA0NTI3MTgsIm5iZiI6MTcwMDQ0OTExOCwianRpIjoiNXJxa0I0UzJDSG4yOTUwcCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.TJiohBabpsvS1nxlD5i-2jJxKQZH_oUhEo9y6RNtvBw")

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("onSubmit called");

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
          username: username,
          password: password,
      });
      const { data } = response;
    const token = data.access_token;
    // const role = data.role;
    localStorage.setItem('access_token', token);
    // localStorage.setItem('roleA', roleA);

    // Use the correct parameter for jwtDecode (token instead of localStorage.getItem(token))
    
    const decodedToken = jwtDecode(token);
    localStorage.setItem("decodedToken", JSON.stringify(decodedToken)); // Convert to JSON string
    console.log("hasil decode", decodedToken);  // Tampilkan seluruh objek
    console.log("nama instansi : ", localStorage.getItem(`instansi`))

    // const roleName = decodedToken.role;  // Pastikan properti role ada di sini
    // localStorage.setItem('role dari dekode', roleName);  
      // navigate(/kelurahan/profile);
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
    // console.log(localStorage.getItem('role'))
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

                  <form onSubmit={(e) => {onSubmit(e);}} className="">
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