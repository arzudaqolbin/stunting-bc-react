import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import TabelDaftarBalitaStunting from "../../view-kelurahan/component/TabelDaftarBalitaStunting";

function PageDaftarBalitaKelurahan() {
  return <SidebarKelurahan content={<TabelDaftarBalitaStunting />} />;
}

export default PageDaftarBalitaKelurahan;
