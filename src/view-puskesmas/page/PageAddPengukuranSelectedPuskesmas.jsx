import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import ProfilePuskesmas from '../component/profile-puskesmas';
import EditBalita from '../component/edit-balita';
import AddPengukuranSelected from '../../view-posyandu/component/add-pengukuran-selected';

function PageAddPengukuranSelectedPuskesmas() {
  return (
        <SidebarPuskesmas content={<AddPengukuranSelected />} />
    );
}

export default PageAddPengukuranSelectedPuskesmas;
