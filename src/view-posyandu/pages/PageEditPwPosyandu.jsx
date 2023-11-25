import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import EditPwPosyandu from "../component/edit-pw-posyandu";
import { dataAuth, apiAuth } from "../../base/apiConfig"; 

const PageEditPwPosyandu = () => {
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<EditPwPosyandu idPosyandu={dataAuth().idPosyandu} userId={dataAuth().userId} apiAuth={apiAuth()} />} />
  );
};

export default PageEditPwPosyandu;
