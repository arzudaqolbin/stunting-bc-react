import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import InfoDetailPuskesmasKelurahan from "../component/InfoDetailPuskesmasKelurahan";

function PageDetailPuskesmasKelurahan (){
    return(
        <SidebarKelurahan content={<InfoDetailPuskesmasKelurahan />}/>

    );
}

export default PageDetailPuskesmasKelurahan;