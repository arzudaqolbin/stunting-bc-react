import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelDaftarPosyanduPuskesmas from "../component/TabelDaftarPosyanduPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function DaftarPosyanduPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelDaftarPosyanduPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}

export default DaftarPosyanduPuskesmas;