import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelBalitaPosyandu from "../component/TabelBalitaPosyandu";

function DaftarBalitaPosyandu (){
    return(
        <SidebarPosyandu content={<TabelBalitaPosyandu />}/>

    );
}

export default DaftarBalitaPosyandu;