import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import FormDataTambahan from '../component/form-data-tambahan';
import AddBalita from '../component/add-balita';
import AddPengukuran from '../component/add-pengukuran';
import AddPengukuranSelected from '../component/add-pengukuran-selected';

const PageAddPengukuranSelectedPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<AddPengukuranSelected />} />
    )
}

export default PageAddPengukuranSelectedPosyandu;