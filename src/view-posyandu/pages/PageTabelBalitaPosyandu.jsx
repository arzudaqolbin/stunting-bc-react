import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import TabelBalitaPosyandu from "../component/TabelBalitaPosyandu";
import { useParams } from "react-router";

const PageTabelBalitaPosyandu = () => {
  const { idPosyandu } = useParams();
  return (
    <SidebarPosyandu
      content={<TabelBalitaPosyandu idPosyandu={idPosyandu} />}
    />
  );
};

export default PageTabelBalitaPosyandu;
