import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import DetailBalitaPuskesmas from "../component/detail-balita-puskesmas";

function PageDetailBalitaPuskesmas (){
    return(
        <SidebarPuskesmas content={<DetailBalitaPuskesmas/>}/>

    );
}

export default PageDetailBalitaPuskesmas;