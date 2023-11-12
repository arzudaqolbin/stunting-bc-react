import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPosyanduKelurahan from "../component/TabelDaftarPosyanduKelurahan";

function DaftarPosyanduKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPosyanduKelurahan/>}/>

    );
}

export default DaftarPosyanduKelurahan;