import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import { useParams } from 'react-router-dom';
import { apiAuth } from "../../base/apiConfig";
import EditPengukuran from '../../view-posyandu/component/edit-pengukuran';

function PageEditPengukuranPuskesmas() {
  let {idPengukuran} = useParams()
  return (
        <SidebarPuskesmas content={<EditPengukuran apiAuth={apiAuth()} idPengukuran={idPengukuran}     />} />
    );
}

export default PageEditPengukuranPuskesmas;
