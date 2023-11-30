import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import EditDataTambahan from '../component/edit-data-tambahan';
import { useParams } from 'react-router-dom';
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageEditDataTambahanPuskesmas() {
  let {idBalita} = useParams()
  return (
        <SidebarPuskesmas content={<EditDataTambahan idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}     />} />
    );
}

export default PageEditDataTambahanPuskesmas;
