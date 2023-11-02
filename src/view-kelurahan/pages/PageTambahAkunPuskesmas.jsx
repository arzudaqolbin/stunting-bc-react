import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahAkunPuskesmas from '../component/tambah-akun-puskesmas';

const PageTambahAkunPuskesmas = () => {
    return(
        <SidebarKelurahan content={<TambahAkunPuskesmas />} />
    )
}

export default PageTambahAkunPuskesmas;