import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import TabelBalitaPuskesmas from "../component/TabelBalitaPuskesmas";
import { useParams } from "react-router";

function PageDaftarBalitaPuskesmas() {
  const { idPuskesmas } = useParams();
  return (
    <SidebarPuskesmas
      content={<TabelBalitaPuskesmas idPuskesmas={idPuskesmas} />}
    />
  );
}

export default PageDaftarBalitaPuskesmas;
