import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahAkunPuskesmas from '../component/tambah-akun-puskesmas';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageTambahAkunPuskesmas = () => {
    return(
        <SidebarKelurahan content={<TambahAkunPuskesmas idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageTambahAkunPuskesmas;