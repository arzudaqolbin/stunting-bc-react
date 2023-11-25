import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import ProfilePuskesmas from "../component/profile-puskesmas";
import EditPwPuskesmas from "../component/edit-pw-puskesmas";
import { dataAuth, apiAuth } from "../../base/apiConfig";

function PageEditPwPuskesmas() {
  return (
    <SidebarPuskesmas content={<EditPwPuskesmas idPuskesmas={dataAuth().id} userId={dataAuth().userId} apiAuth={apiAuth()} />} />
  );
}

export default PageEditPwPuskesmas;
