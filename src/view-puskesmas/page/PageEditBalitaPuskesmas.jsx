import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import ProfilePuskesmas from '../component/profile-puskesmas';
import EditBalita from '../component/edit-balita';

function PageEditBalitaPuskesmas() {
  return (
        <SidebarPuskesmas content={<EditBalita />} />
    );
}

export default PageEditBalitaPuskesmas;
