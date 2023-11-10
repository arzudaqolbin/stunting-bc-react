import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPosyanduKelurahan from "../component/InfoDetailPosyanduKelurahan";

function PageDetailPosyanduKelurahan (){
    return(
        <SidebarKelurahan content={<InfoDetailPosyanduKelurahan />}/>

    );
}

export default PageDetailPosyanduKelurahan;