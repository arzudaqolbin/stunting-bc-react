import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import TabelBalitaPosyandu from '../component/TabelBalitaPosyandu';

const PageTabelBalitaPosyandu = () => {
    return(
        // <SidebarPosyandu content={<TabelBayi/>} />
        <SidebarPosyandu content={<TabelBalitaPosyandu />} />
    )
}

export default PageTabelBalitaPosyandu;