import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";

const RoutesKelurahan = () => {
    return(
        <Routes>
            <Route path="/" element={<Coba />} />
            {/* <Route path="/add" element={<AddPage />} />
            <Route path="/lihat" element={<LihatPage />} /> */}
        </Routes>
    )
}

export default RoutesKelurahan;