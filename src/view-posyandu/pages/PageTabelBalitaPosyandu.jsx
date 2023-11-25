import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelBalitaPosyandu from "../component/TabelBalitaPosyandu";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageTabelBalitaPosyandu = () => {
  return (
    <SidebarPosyandu
      content={<TabelBalitaPosyandu idPosyandu={dataAuth().id} apiAuth={apiAuth()} />}
    />
  );
};

export default PageTabelBalitaPosyandu;
