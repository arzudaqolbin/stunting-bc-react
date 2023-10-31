import {Routes, Route}  from "react-router-dom";
import Beranda from "../view-publik/pages/Beranda";

const RoutesPublik = () => {
    return(
        <Routes>
            <Route path="/" element={<Beranda />} />
        </Routes>
    )
}

export default RoutesPublik;