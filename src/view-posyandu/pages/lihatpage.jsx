import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import LihatBayi from '../component/lihat-bayi';

const LihatPage = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<LihatBayi/>} />
    )
}

export default LihatPage;