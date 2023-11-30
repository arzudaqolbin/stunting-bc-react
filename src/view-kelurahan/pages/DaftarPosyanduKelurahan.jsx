import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPosyanduKelurahan from "../component/TabelDaftarPosyanduKelurahan";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function DaftarPosyanduKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPosyanduKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}

export default DaftarPosyanduKelurahan;