import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPuskesmasKelurahan from "../component/InfoDetailPuskesmasKelurahan";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function PageDetailPuskesmasKelurahan (){
    let {idPuskesmas} = useParams()
    return(
        <SidebarKelurahan content={<InfoDetailPuskesmasKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} idPuskesmas={idPuskesmas} />}/>

    );
}

export default PageDetailPuskesmasKelurahan;