import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelPengukuranBalitaPuskesmas from "../component/TabelPengukuranBalitaPuskesmas";

function DaftarPengukuranBalitaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelPengukuranBalitaPuskesmas/>}/>

    );
}

export default DaftarPengukuranBalitaPuskesmas;