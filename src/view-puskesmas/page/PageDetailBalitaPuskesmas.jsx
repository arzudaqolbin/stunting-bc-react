import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import DetailBalitaPuskesmas from "../component/detail-balita-puskesmas";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageDetailBalitaPuskesmas (){
    let {idBalita} = useParams()
    return(
        <SidebarPuskesmas content={<DetailBalitaPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}    />}/>

    );
}

export default PageDetailBalitaPuskesmas;