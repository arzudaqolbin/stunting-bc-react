import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahPosyandu from '../component/tambah-posyandu';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageTambahPosyandu = () => {
    return(
        <SidebarKelurahan content={<TambahPosyandu idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageTambahPosyandu;