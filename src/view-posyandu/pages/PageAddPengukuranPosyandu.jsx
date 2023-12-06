import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import AddPengukuran from '../component/add-pengukuran';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 

const PageAddPengukuranPosyandu = () => {
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<AddPengukuran idPosyandu={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageAddPengukuranPosyandu;