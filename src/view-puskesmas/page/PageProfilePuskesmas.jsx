import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import ProfilePuskesmas from '../component/profile-puskesmas';

function PageProfilePuskesmas() {
  return (
        <SidebarPuskesmas content={<ProfilePuskesmas />} />
    );
}

export default PageProfilePuskesmas;
