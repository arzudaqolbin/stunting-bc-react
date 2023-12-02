import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import TambahBerita from '../component/tambah-berita';
import { apiAuth, dataAuth, token } from "../../base/apiConfig";

const PageTambahBerita = () => {
    return (
        <SidebarKelurahan content={<TambahBerita idKelurahan={dataAuth().id} apiAuth={apiAuth()} token={token} />} />
    )
}

export default PageTambahBerita;