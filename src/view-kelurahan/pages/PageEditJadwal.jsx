import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditJadwal from '../component/edit-jadwal';

const PageEditJadwal = () => {
    return(
        <SidebarKelurahan content={<EditJadwal />} />
    )
}

export default PageEditJadwal;