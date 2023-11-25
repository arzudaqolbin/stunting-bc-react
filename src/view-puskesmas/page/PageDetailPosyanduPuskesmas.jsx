import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import InfoDetailPosyanduPuskesmas from "../component/InfoDetailPosyanduPuskesmas";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageDetailPosyanduPuskesmas (){
    let {idPosyandu} = useParams()
    return(
        <SidebarPuskesmas content={<InfoDetailPosyanduPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idPosyandu={idPosyandu} userId={dataAuth().userId} />}/>

    );
}

export default PageDetailPosyanduPuskesmas;