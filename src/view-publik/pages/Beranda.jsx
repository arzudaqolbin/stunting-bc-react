import React, { useState } from "react";
import "../css/beranda.css"; 
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Kalkulator from "../component/Kalkulator";
import FAQ from "../component/FAQ";
import JudulTop from "../component/JudulTop";
import Statistik from "../component/Statistik";
import SliderBerita from "../component/slider-berita";


const Beranda = () =>{
    return(
        <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#E4F3EF"}}>
            <JudulTop />
            <Navbar />
            <Banner />
            <Statistik />
            <Kalkulator />
            <SliderBerita />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Beranda;