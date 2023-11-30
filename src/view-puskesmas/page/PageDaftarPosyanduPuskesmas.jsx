import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelDaftarPosyanduPuskesmas from "../component/TabelDaftarPosyanduPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageDaftarPosyanduPuskesmas() {
    return <SidebarPuskesmas content={<TabelDaftarPosyanduPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()}     />} />;
}

export default PageDaftarPosyanduPuskesmas;