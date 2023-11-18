import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import ProfilePuskesmas from "../component/profile-puskesmas";
import EditBalita from "../component/edit-balita";
import { useParams } from "react-router-dom";

function PageEditBalitaPuskesmas() {
  const { idBalita } = useParams();
  const { idPuskesmas } = useParams();
  return (
    <SidebarPuskesmas
      content={<EditBalita idBalita={idBalita} idPuskesmas={idPuskesmas} />}
    />
  );
}

export default PageEditBalitaPuskesmas;
