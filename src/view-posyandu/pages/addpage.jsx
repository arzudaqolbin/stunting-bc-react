import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import AddBayi from '../component/add-bayi';

const AddPage = () => {
    return(
        <SidebarPosyandu content={<AddBayi/>} />
    )
}

export default AddPage;