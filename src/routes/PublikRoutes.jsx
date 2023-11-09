import {Routes, Route}  from "react-router-dom";
import Beranda from "../view-publik/pages/Beranda";
import Berita from "../view-publik/pages/Berita";
import Jadwal from "../view-publik/pages/Jadwal";
import DetailBerita from "../view-publik/component/detail-berita";
import Login from "../view-publik/pages/Login";

const RoutesPublik = () => {
    return(
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/jadwal" element={<Jadwal />} />
            <Route path="/berita/:idBerita" element={<DetailBerita />} />
            {/* <Route path="/jadwal/:idJadwal" element={<Beranda />} /> */}
            {/* pencegahan */}
            <Route path="/pencegahan/stunting" element={<Beranda />} />
            <Route path="/pencegahan/underweight" element={<Beranda />} />
            <Route path="/pencegahan/wasting" element={<Beranda />} />
            {/* pengukuran */}
            <Route path="/pengukuran/stunting" element={<Beranda />} />
            <Route path="/pengukuran/underweight" element={<Beranda />} />
            <Route path="/pengukuran/wasting" element={<Beranda />} />
            {/* login */}
            <Route path="/login-admin" element={<Login />} />

        </Routes>
    )
}

export default RoutesPublik;