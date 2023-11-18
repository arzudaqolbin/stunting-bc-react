import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPosyanduKelurahan from "../component/InfoDetailPosyanduKelurahan";
import { useParams } from "react-router-dom";

function PageDetailPosyanduKelurahan (){
    let {idPosyandu} = useParams()
    return(
        <SidebarKelurahan content={<InfoDetailPosyanduKelurahan idPosyandu={idPosyandu}/>}/>

    );
}

export default PageDetailPosyanduKelurahan;