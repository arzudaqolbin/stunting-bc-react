import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahPosyandu from '../component/tambah-posyandu';

const PageTambahPosyandu = () => {
    return(
        <SidebarKelurahan content={<TambahPosyandu />} />
    )
}

export default PageTambahPosyandu;