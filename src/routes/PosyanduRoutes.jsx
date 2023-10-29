import {Routes, Route}  from "react-router-dom";
import Coba from "../view-posyandu/pages/coba";
import AddPage from "../view-posyandu/pages/addpage";
import LihatPage from "../view-posyandu/pages/lihatpage";

const RoutesPosyandu = () => {
    return(
        <Routes>
            <Route path="/" element={<Coba />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/lihat" element={<LihatPage />} />
        </Routes>
    )
}

export default RoutesPosyandu;