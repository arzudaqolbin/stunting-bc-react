import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import AddBalita from "../component/add-balita";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageAddBalitaPosyandu = () => {
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<AddBalita idPosyandu={dataAuth().id} apiAuth={apiAuth()} />} />
  );
};

export default PageAddBalitaPosyandu;
