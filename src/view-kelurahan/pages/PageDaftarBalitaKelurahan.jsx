import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarBalitaStunting from "../../view-kelurahan/component/TabelDaftarBalitaStunting";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function PageDaftarBalitaKelurahan() {
  return <SidebarKelurahan content={<TabelDaftarBalitaStunting idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />;
}

export default PageDaftarBalitaKelurahan;
