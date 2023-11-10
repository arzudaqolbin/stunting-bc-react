import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditKader from '../component/edit-kader';

const PageEditKader = () => {
    return(
        <SidebarKelurahan content={<EditKader />} />
    )
}

export default PageEditKader;