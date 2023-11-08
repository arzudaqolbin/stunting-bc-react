import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import ProfilePosyandu from '../component/profile-posyandu';

const PageProfilePosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<ProfilePosyandu/>} />
    )
}

export default PageProfilePosyandu;