import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import ProfilePuskesmas from "../component/profile-puskesmas";
import { useParams } from "react-router";

function PageProfilePuskesmas() {
  const { idPuskesmas } = useParams();
  return <SidebarPuskesmas content={<ProfilePuskesmas id={idPuskesmas} />} />;
}

export default PageProfilePuskesmas;
