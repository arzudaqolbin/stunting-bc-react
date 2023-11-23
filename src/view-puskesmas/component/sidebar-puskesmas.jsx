import React from "react";
import "../css/sidebar-puskesmas.css";
import { useState, useEffect } from "react";
import logoDki from '../../aset/logo-dki.png';
import logoJaktim from '../../aset/logo-jaktim.png';
import logoPuskesmas from '../../aset/logo-puskesmas.png';
import { Link, useParams } from "react-router-dom";
import { dataAuth } from "../../base/apiConfig";


const SidebarPuskesmas = ({content}) =>  {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // const {idPuskesmas} = useParams();

    // fungsi toggle
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
  
      const handleMediaQueryChange = () => {
        // Set isCollapsed ke true jika layar adalah medium atau lebih kecil
        setIsCollapsed(mediaQuery.matches);
      };
  
      handleMediaQueryChange();
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
    

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <aside id="sidenav" className={isCollapsed? "collapse" : ""} style={{ backgroundColor: "#026670" }}>
        <div className="h-100">
          <div className="sidebar-logo">
            <Link to={`/puskesmas/profile`} >
            <img src={logoDki} className="img-fluid" style={{ width: "40px" }} alt="" />
            <img src={logoJaktim} className="img-fluid" style={{ width: "45px" }} alt="" />
            </Link>
          </div>
          <ul className="sidebar-nav">
          <li class="sidebar-header">
                        Elemen Dashboard Stunting
                    </li>
                    <li class="sidebar-item">
                        <Link to={`/puskesmas/profile`} class="sidebar-link border-top">
                              <i class="fa-solid fa-user pe-2"></i>Profile
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link collapsed border-top" data-bs-target="#pages" data-bs-toggle="collapse" aria-expanded="false">
                            <i class="fa-solid fa-baby pe-2"></i>Balita
                        </a>
                        <ul id="pages" class="sidebar-dropdown collapse" data-bs-parent="#sidebar" >
                            <li class="sidebar-item">
                                <Link to={`/puskesmas/daftar-balita-semua`} class="sidebar-link ">Semua Balita</Link>
                            </li>
                            <li class="sidebar-item">
                                <Link to={`/puskesmas/daftar-balita-puskesmas`} class="sidebar-link">Balita Puskesmas</Link>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-item">
                        <Link to={`/puskesmas/daftar-posyandu`} class="sidebar-link border-bottom border-top">
                              <i class="fa-solid fa-house-medical pe-2"></i>Daftar Posyandu
                        </Link>
                    </li>
                    <li class="sidebar-item">
                        <Link to={`/login-admin`} class="sidebar-link border-bottom">
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
            <p className="mb-0 font-weight-bold text-light" style={{ fontSize: "1.2rem" }}>{dataAuth().nama}</p>
          </div>
          <div className="navbar-collapse navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-icon">
                  <img src={logoPuskesmas} className="avatar img-fluid" alt="" style={{height: "40px"}} />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to={`/puskesmas/profile`} className="dropdown-item">Profile</Link>
                  <Link to={`/login-admin`} className="dropdown-item">Keluar</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="container">ini breadcrumb</div> */}

        
        {content}


      </div>
    </div>
  );
}

export default SidebarPuskesmas;
