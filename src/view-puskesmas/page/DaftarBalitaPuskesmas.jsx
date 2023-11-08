import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaPuskesmas from "../component/TabelBalitaPuskesmas";

function DaftarBalitaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelBalitaPuskesmas/>}/>

    );
}

export default DaftarBalitaPuskesmas;