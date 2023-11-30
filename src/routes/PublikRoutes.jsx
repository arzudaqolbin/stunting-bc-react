import {Routes, Route}  from "react-router-dom";
import Beranda from "../view-publik/pages/Beranda";
import Berita from "../view-publik/pages/Berita";
import Jadwal from "../view-publik/pages/Jadwal";
import DetailBerita from "../view-publik/component/detail-berita";
import Login from "../view-publik/pages/Login";
import PencegahanStunting from "../view-publik/pages/pencegahan/pencegahan-stunting";
import PencegahanUnderweight from "../view-publik/pages/pencegahan/pencegahan-underweight";
import PencegahanWasting from "../view-publik/pages/pencegahan/pencegahan-wasting";
import PengukuranStunting from "../view-publik/pages/pengukuran/pengukuran-stunting";
import PengukuranUnderweight from "../view-publik/pages/pengukuran/pengukuran-underweight";
import PengukuranWasting from "../view-publik/pages/pengukuran/pengukuran-wasting";

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
            <Route path="/pencegahan/stunting" element={<PencegahanStunting />} />
            <Route path="/pencegahan/underweight" element={<PencegahanUnderweight />} />
            <Route path="/pencegahan/wasting" element={<PencegahanWasting />} />
            {/* pengukuran */}
            <Route path="/pengukuran/stunting" element={<PengukuranStunting />} />
            <Route path="/pengukuran/underweight" element={<PengukuranUnderweight />} />
            <Route path="/pengukuran/wasting" element={<PengukuranWasting />} />
            {/* login */}
            <Route path="/login-admin" element={<Login />} />

        </Routes>
    )
}

export default RoutesPublik;