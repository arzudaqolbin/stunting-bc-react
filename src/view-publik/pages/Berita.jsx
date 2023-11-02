import React from "react";
import "../css/beranda.css"; 
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import JudulTop from "../component/JudulTop";
import ListBerita from "../component/list-berita";

const Berita = () =>{
    return(
        <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#E4F3EF"}}>
            <JudulTop />
            <Navbar />
            <ListBerita />
            <Footer />
        </div>
    )
}

export default Berita;