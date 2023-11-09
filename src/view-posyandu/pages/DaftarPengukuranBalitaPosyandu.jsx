import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelPengukuranBalitaPosyandu from "../component/TabelPengukuranBalitaPosyandu";

function DaftarPengukuranBalitaPosyandu (){
    return(
        <SidebarPosyandu content={<TabelPengukuranBalitaPosyandu/>}/>

    );
}

export default DaftarPengukuranBalitaPosyandu;