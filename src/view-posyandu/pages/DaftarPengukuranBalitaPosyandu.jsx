import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelPengukuranBalitaPosyandu from "../component/TabelPengukuranBalitaPosyandu";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from "react-router-dom";

function DaftarPengukuranBalitaPosyandu (){
    let {idBalita} = useParams()
    return(
        <SidebarPosyandu content={<TabelPengukuranBalitaPosyandu idPosyandu={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}/>}/>

    );
}

export default DaftarPengukuranBalitaPosyandu;