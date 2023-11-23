import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarBalitaStunting from "../component/TabelDaftarBalitaStunting";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function DaftarBalitaStunting (){
    return(
        <SidebarKelurahan content={<TabelDaftarBalitaStunting idKelurahan={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}

export default DaftarBalitaStunting;