import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";

const RoutesKelurahan = () => {
    return(
        <Routes>
            {/* first path */}
            <Route path="/" element={<Coba />} />
            <Route path="/profile" element={<Coba />} />
            <Route path="/edit-pw" element={<Coba />} />
            <Route path="/daftar-balita" element={<Coba />} />
            <Route path="/daftar-puskesmas" element={<Coba />} />
            <Route path="/daftar-posyandu" element={<Coba />} />
            <Route path="/jadwal" element={<Coba />} />
            <Route path="/berita" element={<Coba />} />
            {/* balita */}
            <Route path="/detail-balita/:idBalita" element={<Coba />} />
            {/* puskesmas */}
            <Route path="/tambah-puskesmas" element={<Coba />} />
            <Route path="/detail-puskesmas/:idPuskesmas" element={<Coba />} />
            <Route path="/edit-puskesmas/:idPuskesmas" element={<Coba />} />
            <Route path="/tambah-posyandu/:idPuskesmas" element={<Coba />} />
            {/* posyandu */}
            <Route path="/tambah-posyandu" element={<Coba />} />
            <Route path="/detail-posyandu/:idPosyandu" element={<Coba />} />
            <Route path="/edit-posyandu/:idPosyandu" element={<Coba />} />
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