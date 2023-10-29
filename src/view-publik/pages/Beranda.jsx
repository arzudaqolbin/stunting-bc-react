import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../css/beranda.css"; 


const Beranda = () =>{
    return(
        <body className="d-flex flex-column min-vh-100" style={{backgroundColor: "#E4F3EF"}}>
            <Navbar/>
            <Footer />
            
        </body>
    )
}

export default Beranda;