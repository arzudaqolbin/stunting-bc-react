import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditAkunPosyandu from '../component/edit-akun-posyandu';

const PageEditAkunPosyandu = () => {
    return(
        <SidebarKelurahan content={<EditAkunPosyandu />} />
    )
}

export default PageEditAkunPosyandu;