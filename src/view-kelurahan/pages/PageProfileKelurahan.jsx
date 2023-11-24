import React from 'react';
import SidebarKelurahan from '../component/sidebar-kelurahan';
import ProfileKelurahan from '../component/profile-kelurahan';
import { apiAuth, dataAuth } from "../../base/apiConfig"; 
const PageProfileKelurahan = () => {
    return (
        <SidebarKelurahan content={<ProfileKelurahan idKelurahan={dataAuth().id} apiAuth={apiAuth()} />} />
    )
}

export default PageProfileKelurahan;