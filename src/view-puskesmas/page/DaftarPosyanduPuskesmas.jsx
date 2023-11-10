import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelDaftarPosyanduPuskesmas from "../component/TabelDaftarPosyanduPuskesmas";

function DaftarPosyanduPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelDaftarPosyanduPuskesmas/>}/>

    );
}

export default DaftarPosyanduPuskesmas;