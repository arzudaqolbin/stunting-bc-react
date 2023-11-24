import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import AddPengukuranSelected from '../component/add-pengukuran-selected';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from 'react-router-dom';

const PageAddPengukuranSelectedPosyandu = () => {
    let {idBalita} = useParams()
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<AddPengukuranSelected idPosyandu={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}/>} />
    )
}

export default PageAddPengukuranSelectedPosyandu;