import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import ProfilePuskesmas from '../component/profile-puskesmas';
import EditPwPuskesmas from '../component/edit-pw-puskesmas';
import EditDataTambahan from '../component/edit-data-tambahan';

function PageEditDataTambahanPuskesmas() {
  return (
        <SidebarPuskesmas content={<EditDataTambahan />} />
    );
}

export default PageEditDataTambahanPuskesmas;
