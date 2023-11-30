import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPuskesmasKelurahan from "../component/TabelDaftarPuskesmasKelurahan";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function PageDaftarPuskesmasKelurahan (){
    return(
        <SidebarKelurahan content={<TabelDaftarPuskesmasKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}

export default PageDaftarPuskesmasKelurahan;