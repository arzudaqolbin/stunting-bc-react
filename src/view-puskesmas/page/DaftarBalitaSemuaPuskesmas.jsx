import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaSemuaPuskesmas from "../component/TabelBalitaSemuaPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function DaftarBalitaSemuaPuskesmas (){
    return(
        <SidebarPuskesmas content={<TabelBalitaSemuaPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} />}/>

    );
}
export default DaftarBalitaSemuaPuskesmas;