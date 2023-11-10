import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaSemuaPuskesmas from "../component/TabelBalitaSemuaPuskesmas";

function DaftarBalitaSemuaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelBalitaSemuaPuskesmas/>}/>

    );
}

export default DaftarBalitaSemuaPuskesmas;