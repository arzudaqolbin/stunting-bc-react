import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import EditPwKelurahan from "../component/edit-pw-kelurahan";
import { apiAuth, dataAuth } from "../../base/apiConfig";

const PageEditPwKelurahan = () => {
  return (
    <SidebarKelurahan
      content={
        <EditPwKelurahan
          idKelurahan={dataAuth().id}
          userId={dataAuth().userId}
          apiAuth={apiAuth()}
        />
      }
    />
  );
};

export default PageEditPwKelurahan;
