import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import ProfilePosyandu from "../component/profile-posyandu";
import { useParams } from "react-router-dom";

const PageProfilePosyandu = () => {
  const { id } = useParams();
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<ProfilePosyandu id={id} />} />
  );
};

export default PageProfilePosyandu;
