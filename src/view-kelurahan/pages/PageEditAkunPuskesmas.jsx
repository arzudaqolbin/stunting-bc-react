import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditAkunPuskesmas from '../component/edit-akun-puskesmas';

const PageEditAkunPuskesmas = () => {
    return(
        <SidebarKelurahan content={<EditAkunPuskesmas />} />
    )
}

export default PageEditAkunPuskesmas;