import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaPuskesmas from "../component/TabelBalitaPuskesmas";

function PageDaftarBalitaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelBalitaPuskesmas/>}/>

    );
}

export default PageDaftarBalitaPuskesmas;