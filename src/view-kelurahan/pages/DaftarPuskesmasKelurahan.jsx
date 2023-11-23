import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPuskesmasKelurahan from "../component/TabelDaftarPuskesmasKelurahan";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function DaftarPuskesmasKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPuskesmasKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}

export default DaftarPuskesmasKelurahan;