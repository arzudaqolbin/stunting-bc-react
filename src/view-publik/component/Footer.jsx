import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted mt-auto" style={{ backgroundColor: "#026670" }}>
      <section className="pt-1">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa-regular fa-building me-3" ></i> <span style={{ color: "#FF9F1C" }}>Kelurahan Bidara Cina</span>
              </h6>
              <p style={{ color: "#E4F3EF" }}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#FF9F1C" }}>
                Fitur
              </h6>
              <p>
                <a href="#!" className="txt-res">Cek Balita</a>
              </p>
              <p>
                <a href="#!" className="txt-res">Jadwal</a>
              </p>
              <p>
                <a href="#!" className="txt-res text-light">Berita</a>
              </p>
              <p>
                <a href="#!" className="txt-res">FAQ</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#FF9F1C" }}>Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> <span style={{ color: "#E4F3EF" }}>Jl. Tanjung Lengkong No. 30</span>
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                <span style={{ color: "#E4F3EF" }}>kbidaracina@gmail.com</span>
              </p>
              <p>
                <i className="fas fa-phone me-3"></i><span style={{ color: "#E4F3EF" }}>021 8192371</span>
              </p>
              <a className="txt-res" href="https://www.instagram.com/kelurahan.bidaracina/">
                <i className="fa-brands fa-square-instagram me-3" style={{ color: "#1e3050" }}></i>@kelurahan.bidaracina
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 text-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright: Kelurahan Bidara Cina, Jatinegara, Jakarta Timur
      </div>
    </footer>
  );
}

export default Footer;
