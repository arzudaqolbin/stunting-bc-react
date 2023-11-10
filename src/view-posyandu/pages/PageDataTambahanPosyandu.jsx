import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import FormDataTambahan from "../component/form-data-tambahan";
import { useParams } from "react-router-dom";

const PageDataTambahanPosyandu = () => {
  const { id } = useParams();
  return <SidebarPosyandu content={<FormDataTambahan id={id} />} />;
};

export default PageDataTambahanPosyandu;
