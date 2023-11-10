import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarBalitaStunting from "../component/TabelDaftarBalitaStunting";

function DaftarBalitaStunting (){
    return(
        <SidebarKelurahan content={<TabelDaftarBalitaStunting/>}/>

    );
}

export default DaftarBalitaStunting;