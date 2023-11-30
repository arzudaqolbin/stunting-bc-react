import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import FormDataTambahan from "../component/form-data-tambahan";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageDataTambahanPosyandu = () => {
  const { idBalita } = useParams();
  return (
    <SidebarPosyandu
      content={<FormDataTambahan idPosyandu={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita} />}
    />
  );
};

export default PageDataTambahanPosyandu;
