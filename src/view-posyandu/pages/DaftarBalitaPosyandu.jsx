import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelBalitaPosyandu from "../component/TabelBalitaPosyandu";
import { useParams } from "react-router";

function DaftarBalitaPosyandu() {
  const { idPosyandu } = useParams();
  return (
    <SidebarPosyandu
      content={<TabelBalitaPosyandu idPosyandu={idPosyandu} />}
    />
  );
}

export default DaftarBalitaPosyandu;
