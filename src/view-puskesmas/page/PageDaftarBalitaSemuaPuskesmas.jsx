import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaSemuaPuskesmas from "../component/TabelBalitaSemuaPuskesmas";

function PageDaftarBalitaSemuaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelBalitaSemuaPuskesmas/>}/>

    );
}

export default PageDaftarBalitaSemuaPuskesmas;