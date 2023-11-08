import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import ProfileKelurahan from '../component/profile-kelurahan';

const PageProfileKelurahan = () => {
    return(
        <SidebarKelurahan content={<ProfileKelurahan />} />
    )
}

export default PageProfileKelurahan;