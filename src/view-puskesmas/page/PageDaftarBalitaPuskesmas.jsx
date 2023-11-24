import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaPuskesmas from "../component/TabelBalitaPuskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageDaftarBalitaPuskesmas() {
  return (
    <SidebarPuskesmas
      content={<TabelBalitaPuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()} />}
    />
  );
}

export default PageDaftarBalitaPuskesmas;
