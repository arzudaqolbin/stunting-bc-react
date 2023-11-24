import React from "react";
import SidebarPuskesmas from "../component/sidebar-puskesmas";
import EditBalita from "../component/edit-balita";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageEditBalitaPuskesmas() {
  const { idBalita } = useParams();
  return (
    <SidebarPuskesmas
      content={<EditBalita idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita} />}
    />
  );
}

export default PageEditBalitaPuskesmas;
