import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import AddPengukuranSelected from '../../view-posyandu/component/add-pengukuran-selected';
import { useParams } from 'react-router-dom';
import { apiAuth, dataAuth } from "../../base/apiConfig";

function PageAddPengukuranSelectedPuskesmas() {
  let {idBalita} = useParams()
  return (
        <SidebarPuskesmas content={<AddPengukuranSelected idPuskesmas={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}     />} />
    );
}

export default PageAddPengukuranSelectedPuskesmas;
