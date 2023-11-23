import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelPengukuranBalitaPuskesmas from "../component/TabelPengukuranBalitaPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from "react-router-dom";

function DaftarPengukuranBalitaPuskesmas (){
    let {idBalita} = useParams()
    return(
        <SidebarPuskesmas content={<TabelPengukuranBalitaPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita} />}/>

    );
}

export default DaftarPengukuranBalitaPuskesmas;