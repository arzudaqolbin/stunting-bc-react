import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPuskesmasKelurahan from "../component/InfoDetailPuskesmasKelurahan";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from "react-router-dom";

function DetailPuskesmasKelurahan (){
    let { idPuskesmas } = useParams()
    return(
        <SidebarKelurahan content={<InfoDetailPuskesmasKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} idPuskesmas={idPuskesmas}/>}/>

    );
}

export default DetailPuskesmasKelurahan;