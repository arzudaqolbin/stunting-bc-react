import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import FormDataTambahan from '../component/form-data-tambahan';

const PageDataTambahanPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<FormDataTambahan />} />
    )
}

export default PageDataTambahanPosyandu;