import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import ProfilePosyandu from '../component/profile-posyandu';
import EditPwPosyandu from '../component/edit-pw-posyandu';

const PageEditPwPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<EditPwPosyandu />} />
    )
}

export default PageEditPwPosyandu;