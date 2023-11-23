import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import EditJadwal from '../component/edit-jadwal';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
import { useParams } from 'react-router-dom';

const PageEditJadwal = () => {
    let { idJadwal } = useParams()
    return(
        <SidebarKelurahan content={<EditJadwal idKelurahan={dataAuth().id} apiAuth={apiAuth()} idJadwal={idJadwal}/>} />
    )
}

export default PageEditJadwal;