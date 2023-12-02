import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditBerita from '../component/edit-berita';
import { apiAuth, dataAuth, token } from "../../base/apiConfig";
import { useParams } from 'react-router-dom';

const PageEditBerita = () => {
    let { idBerita } = useParams()
    return (
        <SidebarKelurahan content={<EditBerita idKelurahan={dataAuth().id} apiAuth={apiAuth()} idBerita={idBerita} token={token} />} />
    )
}

export default PageEditBerita;