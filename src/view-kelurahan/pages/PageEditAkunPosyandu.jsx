import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import { useParams } from 'react-router-dom';
import EditAkunPosyandu from '../component/edit-akun-posyandu';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageEditAkunPosyandu = () => {
    const { idPosyandu } = useParams();
    return (
        <SidebarKelurahan content={<EditAkunPosyandu idKelurahan={dataAuth().id} apiAuth={apiAuth()} idPosyandu={idPosyandu} />} />
    )
}

export default PageEditAkunPosyandu;