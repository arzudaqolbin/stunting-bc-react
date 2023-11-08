import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahJadwal from '../component/tambah-jadwal';

const PageTambahJadwal = () => {
    return(
        <SidebarKelurahan content={<TambahJadwal />} />
    )
}

export default PageTambahJadwal;