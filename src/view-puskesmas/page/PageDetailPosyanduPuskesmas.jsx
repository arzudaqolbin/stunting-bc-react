import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import InfoDetailPosyanduPuskesmas from "../component/InfoDetailPosyanduPuskesmas";

function PageDetailPosyanduPuskesmas (){
    return(
        <SidebarPuskesmas content={<InfoDetailPosyanduPuskesmas/>}/>

    );
}

export default PageDetailPosyanduPuskesmas;