import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import FormDataTambahan from '../component/form-data-tambahan';
import AddBalita from '../component/add-balita';

const PageAddBalitaPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<AddBalita />} />
    )
}

export default PageAddBalitaPosyandu;