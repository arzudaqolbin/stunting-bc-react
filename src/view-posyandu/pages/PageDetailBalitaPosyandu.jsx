import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import EditPengukuran from '../component/edit-pengukuran';
import DetailBalitaPosyandu from '../component/detail-balita-posyandu';

const PageDetailBalitaPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<DetailBalitaPosyandu />} />
    )
}

export default PageDetailBalitaPosyandu;