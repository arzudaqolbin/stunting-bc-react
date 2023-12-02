import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Coba from "../view-posyandu/pages/coba";
import Login from "../view-publik/pages/Login";
import PageProfileKelurahan from "../view-kelurahan/pages/PageProfileKelurahan";
import PageEditPwKelurahan from "../view-kelurahan/pages/PageEditPwKelurahan";
import PageDaftarBalitaKelurahan from "../view-kelurahan/pages/PageDaftarBalitaKelurahan";
import PageDetailBalitaKelurahan from "../view-kelurahan/pages/PageDetailBalitaKelurahan";
import PageTambahAkunPosyandu from "../view-kelurahan/pages/PageTambahAkunPosyandu";
import PageTambahAkunPuskesmas from "../view-kelurahan/pages/PageTambahAkunPuskesmas";
import PageEditKader from "../view-kelurahan/pages/PageEditKader";
import PageEditAkunPuskesmas from "../view-kelurahan/pages/PageEditAkunPuskesmas";
import PageEditAkunPosyandu from "../view-kelurahan/pages/PageEditAkunPosyandu";
import PageEditBerita from "../view-kelurahan/pages/PageEditBerita";
import PageEditJadwal from "../view-kelurahan/pages/PageEditJadwal";
import PageTambahBerita from "../view-kelurahan/pages/PageTambahBerita";
import PageTambahJadwal from "../view-kelurahan/pages/PageTambahJadwal";
import PageDaftarPuskesmasKelurahan from "../view-kelurahan/pages/PageDaftarPuskesmas";
import PageDaftarPosyanduKelurahan from "../view-kelurahan/pages/PageDaftarPosyanduKelurahan";
import PageDetailPuskesmasKelurahan from "../view-kelurahan/pages/PageDetailPuskesmasKelurahan";
import PageDetailPosyanduKelurahan from "../view-kelurahan/pages/PageDetailPosyanduKelurahan";
import PageTambahKader from "../view-kelurahan/pages/PageTambahKader";
import NotFound from "../view-publik/pages/NotFound";


const RoutesKelurahan = () => {


    return (
        <Routes>
            {/* first path */}
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<PrivateRoute element={<PageProfileKelurahan />} requiredRole="Kelurahan" />} />
            {/* <Route path="/profile" element={<PageProfileKelurahan />} /> */}
            <Route path="/edit-pw" element={<PrivateRoute element={<PageEditPwKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/daftar-balita" element={<PrivateRoute element={<PageDaftarBalitaKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/daftar-puskesmas" element={<PrivateRoute element={<PageDaftarPuskesmasKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/daftar-posyandu" element={<PrivateRoute element={<PageDaftarPosyanduKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/jadwal" element={<Coba />} />
            <Route path="/berita" element={<Coba />} />
            {/* balita */}
            <Route path="/detail-balita/:idBalita" element={<PrivateRoute element={<PageDetailBalitaKelurahan />} requiredRole="Kelurahan" />} />
            {/* puskesmas */}
            <Route path="/tambah-puskesmas" element={<PrivateRoute element={<PageTambahAkunPuskesmas />} requiredRole="Kelurahan" />} />
            <Route path="/detail-puskesmas/:idPuskesmas" element={<PrivateRoute element={<PageDetailPuskesmasKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/edit-puskesmas/:idPuskesmas" element={<PrivateRoute element={<PageEditAkunPuskesmas />} requiredRole="Kelurahan" />} />
            <Route path="/tambah-posyandu/:idPuskesmas" element={<PrivateRoute element={<PageTambahAkunPosyandu />} requiredRole="Kelurahan" />} />
            {/* posyandu */}
            <Route path="/tambah-posyandu" element={<PrivateRoute element={<PageTambahAkunPosyandu />} requiredRole="Kelurahan" />} />
            <Route path="/tambah-kader/:jabatan/:idPosyandu" element={<PrivateRoute element={<PageTambahKader />} requiredRole="Kelurahan" />} />
            <Route path="/detail-posyandu/:idPosyandu" element={<PrivateRoute element={<PageDetailPosyanduKelurahan />} requiredRole="Kelurahan" />} />
            <Route path="/edit-posyandu/:idPosyandu" element={<PrivateRoute element={<PageEditAkunPosyandu />} requiredRole="Kelurahan" />} />
            <Route path="/edit-kader/:idKader" element={<PrivateRoute element={<PageEditKader />} requiredRole="Kelurahan" />} />
            {/* jadwal */}
            <Route path="/tambah-jadwal" element={<PrivateRoute element={<PageTambahJadwal />} requiredRole="Kelurahan" />} />
            <Route path="/edit-jadwal/:idJadwal" element={<PrivateRoute element={<PageEditJadwal />} requiredRole="Kelurahan" />} />
            {/* berita */}
            <Route path="/tambah-berita" element={<PrivateRoute element={<PageTambahBerita />} requiredRole="Kelurahan" />} />
            <Route path="/detail-berita/:idBerita" element={<PrivateRoute element={<Coba />} requiredRole="Kelurahan" />} />
            <Route path="/edit-berita/:idBerita" element={<PrivateRoute element={<PageEditBerita />} requiredRole="Kelurahan" />} />

            {/* Fallback jika route tidak ditemukan */}
            <Route path="*" element={<Navigate to="/not-found" replace />} />

            {/* Halaman Not Found */}
            <Route path="/not-found" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesKelurahan;