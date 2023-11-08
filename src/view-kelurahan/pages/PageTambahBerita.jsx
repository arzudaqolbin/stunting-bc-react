import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahBerita from '../component/tambah-berita';

const PageTambahBerita = () => {
    return(
        <SidebarKelurahan content={<TambahBerita />} />
    )
}

export default PageTambahBerita;