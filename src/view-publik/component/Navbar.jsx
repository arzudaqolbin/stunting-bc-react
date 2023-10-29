import React from "react";
import logoDki from '../../aset/logo-dki.png';
import logoJaktim from '../../aset/logo-jaktim.png';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <h6 className="my-2" style={{ textAlign: "left" }}>Dashboard Stunting Kelurahan Bidara Cina</h6>
      </div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#026670" }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="sidebar-logo">
              <img src={logoDki} className="img-fluid" style={{ width: "40px" }} alt="" />
              <img src={logoJaktim} className="img-fluid" style={{ width: "45px" }} alt="" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-3 text-light" aria-current="page" href="#">
                  Beranda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mx-3 text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pencegahan
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Stunting</a></li>
                  <li><a className="dropdown-item" href="#">Underweight</a></li>
                  <li><a className="dropdown-item" href="#">Wasting</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mx-3 text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pengukuran
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Stunting</a></li>
                  <li><a className="dropdown-item" href="#">Underweight</a></li>
                  <li><a className="dropdown-item" href="#">Wasting</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3 text-light" href="#">
                  Berita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3 text-light" href="#">
                  Jadwal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
