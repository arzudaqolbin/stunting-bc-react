import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditPwKelurahan from '../component/edit-pw-kelurahan';

const PageEditPwKelurahan = () => {
    return(
        <SidebarKelurahan content={<EditPwKelurahan />} />
    )
}

export default PageEditPwKelurahan;