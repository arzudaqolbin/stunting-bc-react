import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import { useParams } from 'react-router-dom';
import EditAkunPosyandu from '../component/edit-akun-posyandu';

const PageEditAkunPosyandu = () => {
    const { idPosyandu } = useParams();
    return (
        <SidebarKelurahan content={<EditAkunPosyandu idPosyandu={idPosyandu} />} />
    )
}

export default PageEditAkunPosyandu;