import {Routes, Route}  from "react-router-dom";
import Beranda from "../view-publik/pages/Beranda";

const RoutesPublik = () => {
    return(
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/berita" element={<Beranda />} />
            <Route path="/jadwal" element={<Beranda />} />
            <Route path="/berita/:idBerita" element={<Beranda />} />
            <Route path="/jadwal/:idJadwal" element={<Beranda />} />
            {/* pencegahan */}
            <Route path="/pencegahan/stunting" element={<Beranda />} />
            <Route path="/pencegahan/underweight" element={<Beranda />} />
            <Route path="/pencegahan/wasting" element={<Beranda />} />
            {/* pengukuran */}
            <Route path="/pengukuran/stunting" element={<Beranda />} />
            <Route path="/pengukuran/underweight" element={<Beranda />} />
            <Route path="/pengukuran/wasting" element={<Beranda />} />
            {/* login */}
            <Route path="/login-admin" element={<Beranda />} />

        </Routes>
    )
}

export default RoutesPublik;