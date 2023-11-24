import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import ProfilePosyandu from "../component/profile-posyandu";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageProfilePosyandu = () => {
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<ProfilePosyandu idPosyandu={dataAuth().id} apiAuth={apiAuth()} />} />
  );
};

export default PageProfilePosyandu;
