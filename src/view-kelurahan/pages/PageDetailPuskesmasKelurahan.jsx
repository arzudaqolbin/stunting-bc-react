import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPuskesmasKelurahan from "../component/InfoDetailPuskesmasKelurahan";
import { useParams } from "react-router-dom";

function PageDetailPuskesmasKelurahan (){
    let {idPuskesmas} = useParams()
    return(
        <SidebarKelurahan content={<InfoDetailPuskesmasKelurahan idPuskesmas={idPuskesmas} />}/>

    );
}

export default PageDetailPuskesmasKelurahan;