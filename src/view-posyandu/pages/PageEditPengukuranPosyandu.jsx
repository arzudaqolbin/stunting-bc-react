import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import ProfilePosyandu from '../component/profile-posyandu';
import EditPwPosyandu from '../component/edit-pw-posyandu';
import EditPengukuran from '../component/edit-pengukuran';

const PageEditPengukuranPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<EditPengukuran />} />
    )
}

export default PageEditPengukuranPosyandu;