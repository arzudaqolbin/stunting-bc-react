import React from "react";
import "../css/sidebar-posyandu.css";
import { useState } from "react";
import logoDki from '../../aset/logo-dki.png';
import logoJaktim from '../../aset/logo-jaktim.png';
import logoPosyandu from '../../aset/logo-posyandu.png';
import { useParams, Link } from "react-router-dom";

const SidebarPosyandu = ({content}) =>  {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {idPosyandu} = useParams();

    // fungsi toggle
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };
    

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <aside id="sidenav" className={isCollapsed? "collapse" : ""} style={{ backgroundColor: "#026670" }}>
        <div className="h-100">
          <div className="sidebar-logo">
            <Link to={`/posyandu/${idPosyandu}`} >
              <img src={logoDki} className="img-fluid" style={{ width: "40px" }} alt="" />
              <img src={logoJaktim} className="img-fluid" style={{ width: "45px" }} alt="" />
            </Link>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-header" style={{textDecoration: "none"}}>
              Elemen Dashboard Stunting
            </li>
            <li className="sidebar-item" style={{textDecoration: "none"}}>
              <Link to={`/posyandu/${idPosyandu}/profile`} className="sidebar-link border-top">
                <i className="fa-solid fa-baby pe-2"></i>Profile
              </Link>
            </li>
            <li className="sidebar-item" style={{textDecoration: "none"}}>
              <Link to={`/posyandu/${idPosyandu}/daftar-balita`} className="sidebar-link border-top">
                <i className="fa-solid fa-baby pe-2"></i>Daftar Balita
              </Link>
            </li>
            <li className="sidebar-item" style={{textDecoration: "none"}}>
              <Link to={`/posyandu/${idPosyandu}/tambah-balita`} className="sidebar-link border-bottom border-top">
                <i className="fa-solid fa-user-plus pe-2"></i>+ Balita Baru
              </Link>
            </li>
            <li className="sidebar-item" style={{textDecoration: "none"}}>
              <Link to={`/posyandu/${idPosyandu}/tambah-pengukuran`} className="sidebar-link border-bottom">
                <i className="fa-solid fa-file-circle-plus pe-2"></i>+ Data Pengukuran
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to={`/login-admin`} className="sidebar-link border-bottom" style={{textDecoration: "none"}}>
                <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Keluar
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Section */}
      <div className="main d-flex flex-column min-vh-100" style={{ backgroundColor: "#E4F3EF" }}>
        {/* Main Navbar Section */}
        <nav className="navbar navbar-expand px-3 border-bottom" style={{ backgroundColor: "#026670" }}>
          <button id="sidebar-toggle" className="btn" style={{ backgroundColor: "#9fedd7" }} onClick={toggleNavbar}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="d-flex align-items-center navbar-title">
            <p className="mb-0 font-weight-bold text-light" style={{ fontSize: "1.2rem" }}>Posyandu Melati</p>
          </div>
          <div className="navbar-collapse navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-icon">
                  <img src={logoPosyandu} className="avatar img-fluid" alt="" style={{height: "40px"}} />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to={`/posyandu/${idPosyandu}/profile`} className="dropdown-item">Profile</Link>
                  <Link to={`/login-admin`} className="dropdown-item">Keluar</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content Section */}
        <main className="container">
        {content}
        </main>


      </div>
    </div>
  );
}

export default SidebarPosyandu;
