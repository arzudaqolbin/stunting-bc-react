import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import ProfilePuskesmas from "../component/profile-puskesmas";
import EditPwPuskesmas from "../component/edit-pw-puskesmas";
import { useParams } from "react-router";

function PageEditPwPuskesmas() {
  const { idPuskesmas } = useParams();
  return (
    <SidebarPuskesmas content={<EditPwPuskesmas idPuskesmas={idPuskesmas} />} />
  );
}

export default PageEditPwPuskesmas;
