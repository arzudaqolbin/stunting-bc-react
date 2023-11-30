import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import InfoDetailPosyanduPuskesmas from "../component/InfoDetailPosyanduPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";
import { useParams } from "react-router-dom";

function DetailPosyanduPuskesmas (){
    let {idPosyandu} = useParams()
    return(
        <SidebarPuskesmas content={<InfoDetailPosyanduPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idPosyandu={idPosyandu}    />}/>

    );
}

export default DetailPosyanduPuskesmas;