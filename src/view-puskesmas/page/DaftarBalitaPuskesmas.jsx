import React from 'react';
import SidebarPuskesmas from '../component/sidebar-puskesmas';
import TableBalitaPuskesmas from '../component/TabelBalitaPuskesmas';

function DaftarBalitaPuskesmas() {
  return (
        <SidebarPuskesmas content={<TableBalitaPuskesmas />} />
    );
}

export default DaftarBalitaPuskesmas;
