import { Routes, Route } from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import PageTambahAkunPuskesmas from "../view-kelurahan/pages/PageTambahAkunPuskesmas";
import PageTambahAkunPosyandu from "../view-kelurahan/pages/PageTambahAkunPosyandu";
import PageProfileKelurahan from "../view-kelurahan/pages/PageProfileKelurahan";
import PageEditAkunPuskesmas from '../view-kelurahan/pages/PageEditAkunPuskesmas';
import PageEditAkunPosyandu from "../view-kelurahan/pages/PageEditAkunPosyandu";
import PageEditPwKelurahan from "../view-kelurahan/pages/PageEditPwKelurahan";

const RoutesKelurahan = () => {
    return (
        <Routes>
            {/* first path */}
            <Route path="/" element={<Coba />} />
            <Route path="/profile" element={<PageProfileKelurahan />} />
            <Route path="/edit-pw" element={<PageEditPwKelurahan />} />
            <Route path="/daftar-balita" element={<Coba />} />
            <Route path="/daftar-puskesmas" element={<PageTambahAkunPuskesmas />} />
            <Route path="/daftar-posyandu" element={<Coba />} />
            <Route path="/jadwal" element={<Coba />} />
            <Route path="/berita" element={<Coba />} />
            {/* balita */}
            <Route path="/detail-balita/:idBalita" element={<Coba />} />
            {/* puskesmas */}
            <Route path="/tambah-puskesmas" element={<PageTambahAkunPuskesmas />} />
            <Route path="/detail-puskesmas/:idPuskesmas" element={<Coba />} />
            <Route path="/edit-puskesmas/:idPuskesmas" element={<PageEditAkunPuskesmas />} />
            <Route path="/tambah-posyandu/:idPuskesmas" element={<Coba />} />
            {/* posyandu */}
            <Route path="/tambah-posyandu" element={<PageTambahAkunPosyandu />} />
            <Route path="/detail-posyandu/:idPosyandu" element={<Coba />} />
            <Route path="/edit-posyandu/:idPosyandu" element={<PageEditAkunPosyandu />} />
            <Route path="/edit-kader/:idKader" element={<Coba />} />
            {/* jadwal */}
            <Route path="/tambah-jadwal" element={<Coba />} />
            <Route path="/tambah-jadwal" element={<Coba />} />
            <Route path="/edit-jadwal/:idJadwal" element={<Coba />} />
            {/* berita */}
            <Route path="/tambah-berita" element={<Coba />} />
            <Route path="/detail-berita/:idBerita" element={<Coba />} />
            <Route path="/edit-berita/:idBerita" element={<Coba />} />
        </Routes>
    )
}

export default RoutesKelurahan;