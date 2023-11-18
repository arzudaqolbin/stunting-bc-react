import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import FormDataTambahan from "../component/form-data-tambahan";
import { useParams } from "react-router-dom";

const PageDataTambahanPosyandu = () => {
  const { idBalita, idPosyandu } = useParams();
  return (
    <SidebarPosyandu
      content={<FormDataTambahan idBalita={idBalita} idPosyandu={idPosyandu} />}
    />
  );
};

export default PageDataTambahanPosyandu;
