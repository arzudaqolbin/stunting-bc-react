import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPengukuranBalitaStunting from "../component/TabelDaftarPengukuranBalitaStunting";

function DaftarPengukuranBalitaStunting (){
    return(
        <SidebarKelurahan content={<TabelDaftarPengukuranBalitaStunting/>}/>

    );
}

export default DaftarPengukuranBalitaStunting;