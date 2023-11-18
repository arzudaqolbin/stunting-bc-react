import React from "react";
import SidebarKelurahan from "../component/sidebar-kelurahan";
import { useParams } from "react-router";
import EditKader from "../component/edit-kader";

const PageEditKader = () => {
  const { idKader } = useParams();
  return <SidebarKelurahan content={<EditKader id={idKader} />} />;
};

export default PageEditKader;
