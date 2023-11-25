import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahJadwal from '../component/tambah-jadwal';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageTambahJadwal = () => {
    return(
        <SidebarKelurahan content={<TambahJadwal idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageTambahJadwal;