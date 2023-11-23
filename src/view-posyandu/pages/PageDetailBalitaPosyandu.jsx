import React from 'react';
import SidebarPosyandu from '../component/sidebar-posyandu';
import DetailBalitaPosyandu from '../component/detail-balita-posyandu';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from 'react-router-dom';

const PageDetailBalitaPosyandu = () => {
    let { idBalita } = useParams() 
    return(
        // <SidebarPosyandu content={<AddBayi/>} />
        <SidebarPosyandu content={<DetailBalitaPosyandu idPosyandu={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}/>} />
    )
}

export default PageDetailBalitaPosyandu;