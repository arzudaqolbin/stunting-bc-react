import { Routes, Route, Navigate } from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import PrivateRoute from "./PrivateRoute";
import PageProfilePuskesmas from "../view-puskesmas/page/PageProfilePuskesmas";
import PageEditPwPuskesmas from "../view-puskesmas/page/PageEditPwPuskesmas";
import DaftarBalitaPuskesmas from "../view-puskesmas/page/DaftarBalitaPuskesmas";
import PageEditDataTambahanPuskesmas from "../view-puskesmas/page/PageEditDataTambahanPuskesmas";
import PageEditBalitaPuskesmas from "../view-puskesmas/page/PageEditBalitaPuskesmas";
import PageDetailBalitaPuskesmas from "../view-puskesmas/page/PageDetailBalitaPuskesmas";
import PageDaftarBalitaSemuaPuskesmas from "../view-puskesmas/page/PageDaftarBalitaSemuaPuskesmas";
import PageDaftarBalitaPuskesmas from "../view-puskesmas/page/PageDaftarBalitaPuskesmas";
import PageDaftarPosyanduPuskesmas from "../view-puskesmas/page/PageDaftarPosyanduPuskesmas";
import PageDetailPosyanduPuskesmas from "../view-puskesmas/page/PageDetailPosyanduPuskesmas";
import Login from "../view-publik/pages/Login";
import PageEditPengukuranPuskesmas from "../view-puskesmas/page/PageEditPengukuranPuskesmas";
import NotFound from "../view-publik/pages/NotFound";

const RoutesPuskesmas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/profile" element={<PageProfilePuskesmas />} /> */}
            <Route path="/profile" element={<PrivateRoute element={<PageProfilePuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/edit-pw" element={<PrivateRoute element={<PageEditPwPuskesmas />} requiredRole="Puskesmas" />}/>
            {/* daftar */}
            <Route path="/daftar-balita-puskesmas" element={<PrivateRoute element={<PageDaftarBalitaPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/daftar-balita-semua" element={<PrivateRoute element={<PageDaftarBalitaSemuaPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/daftar-balita-posyandu" element={<PrivateRoute element={<PageDaftarPosyanduPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/daftar-posyandu" element={<PrivateRoute element={<PageDaftarPosyanduPuskesmas />} requiredRole="Puskesmas" />}/>
            {/* detail balita */}
            <Route path="/detail-balita/:idBalita" element={<PrivateRoute element={<PageDetailBalitaPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/edit-data-balita/:idBalita" element={<PrivateRoute element={<PageEditBalitaPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/edit-data-tambahan-balita/:idBalita" element={<PrivateRoute element={<PageEditDataTambahanPuskesmas />} requiredRole="Puskesmas" />}/>
            <Route path="/edit-pengukuran/:idPengukuran" element={<PrivateRoute element={<PageEditPengukuranPuskesmas />} requiredRole="Puskesmas" />}/>
            {/* detail posyandu */}
            <Route path="/detail-posyandu/:idPosyandu" element={<PrivateRoute element={<PageDetailPosyanduPuskesmas />} requiredRole="Puskesmas" />}/>
            
            {/* Fallback jika route tidak ditemukan */}
            <Route path="*" element={<Navigate to="/not-found" replace />} />

            {/* Halaman Not Found */}
            <Route path="/not-found" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesPuskesmas;