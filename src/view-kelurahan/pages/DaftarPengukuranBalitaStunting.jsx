import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarPengukuranBalitaStunting from "../component/TabelDaftarPengukuranBalitaStunting";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from "react-router-dom";

function DaftarPengukuranBalitaStunting (){
    let { idBalita } = useParams()
    return(
        <SidebarKelurahan content={<TabelDaftarPengukuranBalitaStunting idKelurahan={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}/>}/>

    );
}

export default DaftarPengukuranBalitaStunting;