import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import FormDataTambahan from '../component/form-data-tambahan';
import AddBalita from '../component/add-balita';
import AddPengukuran from '../component/add-pengukuran';

const PageAddPengukuranPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<AddPengukuran />} />
    )
}

export default PageAddPengukuranPosyandu;