import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import { useParams } from "react-router-dom";
import EditAkunPuskesmas from "../component/edit-akun-puskesmas";
import { apiAuth, dataAuth } from "../../base/apiConfig";
import ListBerita from "../component/ListBerita";

const PageListBerita = () => {
  const { idPuskesmas } = useParams();
  return <SidebarKelurahan content={<ListBerita apiAuth={apiAuth()} />} />;
};

export default PageListBerita;
