import React from "react";
import "../css/beranda.css"; 
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import JudulTop from "../component/JudulTop";
import DetailBerita from "../component/detail-berita";



const DetailBeritaUmum = () =>{
    return(
        <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#E4F3EF"}}>
            <JudulTop />
            <Navbar />
            <DetailBerita />
            <Footer />
        </div>
    )
}

export default DetailBeritaUmum;