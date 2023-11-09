import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPuskesmasKelurahan from "../component/TabelDaftarPuskesmasKelurahan";

function DaftarPuskesmasKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPuskesmasKelurahan/>}/>

    );
}

export default DaftarPuskesmasKelurahan;