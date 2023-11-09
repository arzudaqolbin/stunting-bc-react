import React from "react";
import SidebarPosyandu from "../component/sidebar-posyandu";
import ProfilePosyandu from "../component/profile-posyandu";
import EditPwPosyandu from "../component/edit-pw-posyandu";
import { useParams } from "react-router-dom";

const PageEditPwPosyandu = () => {
  const { id } = useParams();
  return (
    // <SidebarPosyandu content={<AddBayi/>} />
    <SidebarPosyandu content={<EditPwPosyandu id={id} />} />
  );
};

export default PageEditPwPosyandu;
