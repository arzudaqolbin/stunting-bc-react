import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";

const RoutesPuskesmas = () => {
    return(
        <Routes>
            <Route path="/:idPuskesmas" element={<Coba />} />
            <Route path="/:idPuskesmas/profile" element={<Coba />} />
            <Route path="/:idPuskesmas/edit-pw" element={<Coba />} />
            {/* daftar */}
            <Route path="/:idPuskesmas/daftar-balita-puskesmas" element={<Coba />} />
            <Route path="/:idPuskesmas/daftar-balita-semua" element={<Coba />} />
            <Route path="/:idPuskesmas/daftar-posyandu" element={<Coba />} />
            {/* detail balita */}
            <Route path="/:idPuskesmas/detail-balita/:idBalita" element={<Coba />} />
            <Route path="/:idPuskesmas/edit-data-balita/:idBalita" element={<Coba />} />
            <Route path="/:idPuskesmas/edit-data-tambahan-balita/:idBalita" element={<Coba />} />
            <Route path="/:idPuskesmas/tambah-pengukuran/:idBalita" element={<Coba />} />
            <Route path="/:idPuskesmas/edit-pengukuran/:idPengukuran" element={<Coba />} />
            {/* detail posyandu */}
            <Route path="/:idPuskesmas/detail-posyandu/:idPosyandu" element={<Coba />} />
        </Routes>
    )
}

export default RoutesPuskesmas;