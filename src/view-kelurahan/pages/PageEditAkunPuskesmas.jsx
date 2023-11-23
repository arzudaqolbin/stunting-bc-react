import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import { useParams } from 'react-router-dom';
import EditAkunPuskesmas from '../component/edit-akun-puskesmas';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageEditAkunPuskesmas = () => {
    const { idPuskesmas } = useParams();
    return (
        <SidebarKelurahan content={<EditAkunPuskesmas idKelurahan={dataAuth().id} apiAuth={apiAuth()} idPuskesmas={idPuskesmas} />} />
    )
}

export default PageEditAkunPuskesmas;