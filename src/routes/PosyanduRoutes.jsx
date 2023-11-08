import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import AddPage from "../view-posyandu/pages/addpage";
import LihatPage from "../view-posyandu/pages/lihatpage";

const RoutesPosyandu = () => {
    return(
        <Routes>
            <Route path="/:idPosyandu" element={<Coba />} />
            <Route path="/:idPosyandu/profile" element={<AddPage />} />
            {/* tambah balita */}
            <Route path="/:idPosyandu/tambah-balita" element={<LihatPage />} />
            <Route path="/:idPosyandu/tambah-balita" element={<LihatPage />} />
            {/* tambah pengukuran */}
            <Route path="/:idPosyandu/tambah-pengukuran" element={<LihatPage />} />
            <Route path="/:idPosyandu/tambah-pengukuran/:idBalita" element={<LihatPage />} />
            {/* daftar tabel balita */}
            <Route path="/:idPosyandu/daftar-balita" element={<LihatPage />} />
            {/* detail balita */}
            <Route path="/:idPosyandu/detail-balita/:idBalita" element={<LihatPage />} />
            {/* edit pengukuran balita */}
            <Route path="/:idPosyandu/edit-pengukuran/:idBalita" element={<LihatPage />} />
        </Routes>
    )
}

export default RoutesPosyandu;