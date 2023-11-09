import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import DetailBalitaPuskesmas from "../component/detail-balita-puskesmas";
import TabelDaftarPosyanduPuskesmas from "../component/TabelDaftarPosyanduPuskesmas";

function PageDaftarPosyanduPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelDaftarPosyanduPuskesmas/>}/>

    );
}

export default PageDaftarPosyanduPuskesmas;