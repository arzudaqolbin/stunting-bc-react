import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import DetailBalitaKelurahan from '../component/detail-balita-kelurahan';

const PageDetailBalitaKelurahan = () => {
    return(
        <SidebarKelurahan content={<DetailBalitaKelurahan />} />
    )
}

export default PageDetailBalitaKelurahan;