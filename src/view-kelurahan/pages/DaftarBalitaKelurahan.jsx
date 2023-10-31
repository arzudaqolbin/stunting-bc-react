import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TableBalitaPuskesmas from "../../view-puskesmas/component/TabelBalitaPuskesmas";

function DaftarBalitaKelurahan (){
    return(
        <SidebarKelurahan content={<TableBalitaPuskesmas />}/>

    );
}

export default DaftarBalitaKelurahan;