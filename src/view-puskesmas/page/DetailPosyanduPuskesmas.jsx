import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import InfoDetailPosyanduPuskesmas from "../component/InfoDetailPosyanduPuskesmas";

function DetailPosyanduPuskesmas (){
    return(
        <SidebarPuskesmas content={<InfoDetailPosyanduPuskesmas/>}/>

    );
}

export default DetailPosyanduPuskesmas;