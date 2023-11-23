import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelBalitaPosyandu from "../component/TabelBalitaPosyandu";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

function DaftarBalitaPosyandu() {
  return (
    <SidebarPosyandu
      content={<TabelBalitaPosyandu idPosyandu={dataAuth().id} apiAuth={apiAuth()} />}
    />
  );
}

export default DaftarBalitaPosyandu;
