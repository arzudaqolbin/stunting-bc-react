import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import { useParams } from "react-router-dom";
import { apiAuth, dataAuth } from "../../base/apiConfig";
import ListJadwal from "../component/ListJadwal";

const PageListJadwal = () => {
  const { idPuskesmas } = useParams();
  return <SidebarKelurahan content={<ListJadwal apiAuth={apiAuth()} />} />;
};

export default PageListJadwal;
