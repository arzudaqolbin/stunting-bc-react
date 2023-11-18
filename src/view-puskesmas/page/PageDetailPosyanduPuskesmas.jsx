import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import InfoDetailPosyanduPuskesmas from "../component/InfoDetailPosyanduPuskesmas";
import { useParams } from "react-router-dom";

function PageDetailPosyanduPuskesmas (){
    let {idPosyandu} = useParams()
    return(
        <SidebarPuskesmas content={<InfoDetailPosyanduPuskesmas idPosyandu={idPosyandu} />}/>

    );
}

export default PageDetailPosyanduPuskesmas;