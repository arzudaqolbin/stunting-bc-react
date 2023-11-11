import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import FormDataTambahan from "../component/form-data-tambahan";
import AddBalita from "../component/add-balita";
import { useParams } from "react-router";

const PageAddBalitaPosyandu = () => {
  const { idPosyandu } = useParams();
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<AddBalita idPosyandu={idPosyandu} />} />
  );
};

export default PageAddBalitaPosyandu;
