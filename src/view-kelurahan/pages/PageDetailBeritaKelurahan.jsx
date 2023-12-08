import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import { useParams } from 'react-router-dom';
import DetailBerita from '../../view-publik/component/detail-berita';

const PageDetailBeritaKelurahan = () => {
    return(
        <SidebarKelurahan content={<DetailBerita/>} />
    )
}

export default PageDetailBeritaKelurahan;