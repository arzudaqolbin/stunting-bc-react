import React from "react";
import "../css/sidebar-kelurahan.css";
import { useState } from "react";
import logoDki from '../../aset/logo-dki.png';
import logoJaktim from '../../aset/logo-jaktim.png';
import logoKantor from '../../aset/logo-kantor.png';
import { Link, useParams } from "react-router-dom";


const SidebarKelurahan = ({content}) =>  {
    const [isCollapsed, setIsCollapsed] = useState(false);

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
            <Link to={"/kelurahan"}>
            <img src={logoDki} className="img-fluid" style={{ width: "40px" }} alt="" />
            <img src={logoJaktim} className="img-fluid" style={{ width: "45px" }} alt="" />
            </Link>
          </div>
          <ul className="sidebar-nav">
          <li class="sidebar-header">
                        Elemen Dashboard Stunting
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/profile"} class="sidebar-link border-top">
                              <i class="fa-solid fa-user pe-2"></i>Profile
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/daftar-balita"} class="sidebar-link border-top">
                              <i class="fa-solid fa-baby pe-2"></i>Daftar Balita
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/daftar-puskesmas"} class="sidebar-link border-top">
                              <i class="fa-solid fa-house-medical pe-2"></i> Puskesmas
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/daftar-posyandu"} class="sidebar-link border-top">
                              <i class="fa-solid fa-hands-holding-child pe-2"></i>Kader Posyandu
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/berita"} class="sidebar-link border-top">
                              <i class="fa-solid fa-newspaper pe-2"></i>Berita
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/kelurahan/jadwal"} class="sidebar-link border-top">
                              <i class="fa-solid fa-timeline pe-2"></i>Jadwal
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={"/login-admin"} class="sidebar-link border-bottom border-top">
                              <i class="fa-solid fa-arrow-right-from-bracket pe-2"></i>Keluar
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
            <p className="mb-0 font-weight-bold text-light" style={{ fontSize: "1.2rem" }}>Kelurahan Bidara Cina</p>
          </div>
          <div className="navbar-collapse navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-icon">
                  <img src={logoKantor} className="avatar img-fluid" alt="" style={{height: "40px"}} />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to={"/kelurahan/profile"} className="dropdown-item">Profile</Link>
                  <Link to={"/login-admin"} className="dropdown-item">Keluar</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content Section */}
        {content}


      </div>
    </div>
  );
}

export default SidebarKelurahan;
