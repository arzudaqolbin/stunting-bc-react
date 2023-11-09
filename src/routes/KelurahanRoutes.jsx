import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
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


const RoutesKelurahan = () => {
    return(
        <Routes>
            {/* first path */}
            <Route path="/" element={<PageProfileKelurahan />} />
            <Route path="/profile" element={<PageProfileKelurahan />} />
            <Route path="/edit-pw" element={<PageEditPwKelurahan />} />
            <Route path="/daftar-balita" element={<PageDaftarBalitaKelurahan />} />
            <Route path="/daftar-puskesmas" element={<PageDaftarPuskesmasKelurahan />} />
            <Route path="/daftar-posyandu" element={<PageDaftarPosyanduKelurahan />} />
            <Route path="/jadwal" element={<Coba />} />
            <Route path="/berita" element={<Coba />} />
            {/* balita */}
            <Route path="/detail-balita/:idBalita" element={<PageDetailBalitaKelurahan />} />
            {/* puskesmas */}
            <Route path="/tambah-puskesmas" element={<PageTambahAkunPuskesmas />} />
            <Route path="/detail-puskesmas/:idPuskesmas" element={<PageDetailPuskesmasKelurahan />} />
            <Route path="/edit-puskesmas/:idPuskesmas" element={<PageEditAkunPuskesmas />} />
            <Route path="/tambah-posyandu/:idPuskesmas" element={<PageTambahAkunPuskesmas />} />
            {/* posyandu */}
            <Route path="/tambah-posyandu" element={<PageTambahAkunPosyandu />} />
            <Route path="/detail-posyandu/:idPosyandu" element={<PageDetailPosyanduKelurahan />} />
            <Route path="/edit-posyandu/:idPosyandu" element={<PageEditAkunPosyandu />} />
            <Route path="/edit-kader/:idKader" element={<PageEditKader />} />
            {/* jadwal */}
            <Route path="/tambah-jadwal" element={<PageTambahJadwal />} />
            <Route path="/edit-jadwal/:idJadwal" element={<PageEditJadwal />} />
            {/* berita */}
            <Route path="/tambah-berita" element={<PageTambahBerita />} />
            <Route path="/detail-berita/:idBerita" element={<Coba />} />
            <Route path="/edit-berita/:idBerita" element={<PageEditBerita />} />
        </Routes>
    )
}

export default RoutesKelurahan;