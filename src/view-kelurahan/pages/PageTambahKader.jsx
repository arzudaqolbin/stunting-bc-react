import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import { useParams } from "react-router";
// import EditKader from "../component/edit-kader";
import { apiAuth, dataAuth } from "../../base/apiConfig";
import TambahKader from "../component/tambah-kader";

const PageTambahKader = () => {
  const { idKader } = useParams();
  return <SidebarKelurahan content={<TambahKader idKelurahan={dataAuth().id} apiAuth={apiAuth()} idKader={idKader} />} />;
};

export default PageTambahKader;
