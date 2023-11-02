import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahAkunPosyandu from '../component/tambah-akun-posyandu';

const PageTambahAkunPosyandu = () => {
    return(
        <SidebarKelurahan content={<TambahAkunPosyandu />} />
    )
}

export default PageTambahAkunPosyandu;