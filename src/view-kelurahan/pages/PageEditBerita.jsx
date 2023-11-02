import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditBerita from '../component/edit-berita';

const PageEditBerita = () => {
    return(
        <SidebarKelurahan content={<EditBerita />} />
    )
}

export default PageEditBerita;