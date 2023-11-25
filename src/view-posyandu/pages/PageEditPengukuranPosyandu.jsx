import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import EditPengukuran from '../component/edit-pengukuran';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from 'react-router-dom';

const PageEditPengukuranPosyandu = () => {
    let { idPengukuran } = useParams()
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<EditPengukuran apiAuth={apiAuth()} idPengukuran={idPengukuran}/>} />
    )
}

export default PageEditPengukuranPosyandu;