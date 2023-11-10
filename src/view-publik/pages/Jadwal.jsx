import React from "react";
import "../css/beranda.css"; 
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import JudulTop from "../component/JudulTop";
import ListJadwal from "../component/list-jadwal";



const Jadwal = () =>{
    return(
        <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#E4F3EF"}}>
            <JudulTop />
            <Navbar />
            <ListJadwal />
            <Footer />
        </div>
    )
}

export default Jadwal;