import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import DetailBalitaKelurahan from '../component/detail-balita-kelurahan';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from 'react-router-dom';

const PageDetailBalitaKelurahan = () => {
    let { idBalita } = useParams()
    return(
        <SidebarKelurahan content={<DetailBalitaKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} idBalita={idBalita}/>} />
    )
}

export default PageDetailBalitaKelurahan;