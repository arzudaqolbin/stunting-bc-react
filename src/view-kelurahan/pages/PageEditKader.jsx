import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import { useParams } from "react-router";
import EditKader from "../component/edit-kader";
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageEditKader = () => {
  const { idKader } = useParams();
  return <SidebarKelurahan content={<EditKader idKelurahan={dataAuth().id} apiAuth={apiAuth()} idKader={idKader} />} />;
};

export default PageEditKader;
