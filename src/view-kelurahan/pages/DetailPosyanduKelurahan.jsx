import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPosyanduKelurahan from "../component/InfoDetailPosyanduKelurahan";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function DetailPosyanduKelurahan (){
    let {idPosyandu} = useParams();
    return(
        <SidebarKelurahan content={<InfoDetailPosyanduKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} idPosyandu={idPosyandu} />}/>

    );
}

export default DetailPosyanduKelurahan;