import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import ProfilePuskesmas from "../component/profile-puskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageProfilePuskesmas() {

  return <SidebarPuskesmas content={<ProfilePuskesmas idPuskesmas={dataAuth().id} apiAuth={apiAuth()}/>} />;
}

export default PageProfilePuskesmas;
