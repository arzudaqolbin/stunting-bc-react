import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahAkunPosyandu from '../component/tambah-akun-posyandu';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageTambahAkunPosyandu = () => {
    return(
        <SidebarKelurahan content={<TambahAkunPosyandu idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageTambahAkunPosyandu;