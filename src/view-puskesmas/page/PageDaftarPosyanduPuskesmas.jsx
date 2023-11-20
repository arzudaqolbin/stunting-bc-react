import React from "react";
import { useParams } from "react-router-dom";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelDaftarPosyanduPuskesmas from "../component/TabelDaftarPosyanduPuskesmas";

function PageDaftarPosyanduPuskesmas() {
    const { idPuskesmas } = useParams();
    return <SidebarPuskesmas content={<TabelDaftarPosyanduPuskesmas idPuskesmas={idPuskesmas} />} />;
}

export default PageDaftarPosyanduPuskesmas;