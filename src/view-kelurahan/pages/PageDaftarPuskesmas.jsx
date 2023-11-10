import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPuskesmasKelurahan from "../component/TabelDaftarPuskesmasKelurahan";

function PageDaftarPuskesmasKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPuskesmasKelurahan />}/>

    );
}

export default PageDaftarPuskesmasKelurahan;