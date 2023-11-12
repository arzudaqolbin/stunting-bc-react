import { Routes, Route } from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import PageProfilePuskesmas from "../view-puskesmas/page/PageProfilePuskesmas";
import PageEditPwPuskesmas from "../view-puskesmas/page/PageEditPwPuskesmas";
import DaftarBalitaPuskesmas from "../view-puskesmas/page/DaftarBalitaPuskesmas";
import PageAddPengukuranSelectedPuskesmas from "../view-puskesmas/page/PageAddPengukuranSelectedPuskesmas";
import PageEditDataTambahanPuskesmas from "../view-puskesmas/page/PageEditDataTambahanPuskesmas";
import PageEditBalitaPuskesmas from "../view-puskesmas/page/PageEditBalitaPuskesmas";
import PageDetailBalitaPuskesmas from "../view-puskesmas/page/PageDetailBalitaPuskesmas";
import PageDaftarBalitaSemuaPuskesmas from "../view-puskesmas/page/PageDaftarBalitaSemuaPuskesmas";
import PageDaftarBalitaPuskesmas from "../view-puskesmas/page/PageDaftarBalitaPuskesmas";
import PageDaftarPosyanduPuskesmas from "../view-puskesmas/page/PageDaftarPosyanduPuskesmas";
import PageDetailPosyanduPuskesmas from "../view-puskesmas/page/PageDetailPosyanduPuskesmas";

const RoutesPuskesmas = () => {
    return (
        <Routes>
            <Route path="/" element={<PageProfilePuskesmas />} />
            <Route path="/profile" element={<PageProfilePuskesmas />} />
            <Route path="/edit-pw" element={<PageEditPwPuskesmas />} />
            {/* daftar */}
            <Route path="/daftar-balita-puskesmas" element={<PageDaftarBalitaPuskesmas />} />
            <Route path="/daftar-balita-semua" element={<PageDaftarBalitaSemuaPuskesmas />} />
            <Route path="/daftar-posyandu" element={<PageDaftarPosyanduPuskesmas />} />
            {/* detail balita */}
            <Route path="/detail-balita/:idBalita" element={<PageDetailBalitaPuskesmas />} />
            <Route path="/edit-data-balita/:idBalita" element={<PageEditBalitaPuskesmas />} />
            <Route path="/edit-data-tambahan-balita/:idBalita" element={<PageEditDataTambahanPuskesmas />} />
            <Route path="/tambah-pengukuran/:idBalita" element={<PageAddPengukuranSelectedPuskesmas />} />
            <Route path="/edit-pengukuran/:idPengukuran" element={<Coba />} />
            {/* detail posyandu */}
            <Route path="/detail-posyandu/:idPosyandu" element={<PageDetailPosyanduPuskesmas />} />
        </Routes>
    )
}

export default RoutesPuskesmas;