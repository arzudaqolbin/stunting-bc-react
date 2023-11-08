import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import ProfilePuskesmas from '../component/profile-puskesmas';
import EditPwPuskesmas from '../component/edit-pw-puskesmas';

function PageEditPwPuskesmas() {
  return (
        <SidebarPuskesmas content={<EditPwPuskesmas />} />
    );
}

export default PageEditPwPuskesmas;
