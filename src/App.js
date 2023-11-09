import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import PageEditDataTambahanPuskesmas from "./view-puskesmas/page/PageEditDataTambahanPuskesmas";
import Beranda from "./view-publik/pages/Beranda";
import Berita from "./view-publik/pages/Berita";
import DetailBerita from "./view-publik/component/detail-berita";
import Jadwal from "./view-publik/pages/Jadwal";
import Login from "./view-publik/pages/Login";
import DaftarBalitaPuskesmas from "./view-puskesmas/page/DaftarBalitaPuskesmas";
import PageAddPengukuranSelectedPuskesmas from "./view-puskesmas/page/PageAddPengukuranSelectedPuskesmas";
import PageEditBalitaPuskesmas from "./view-puskesmas/page/PageEditBalitaPuskesmas";
import PageEditPwPuskesmas from "./view-puskesmas/page/PageEditPwPuskesmas";
import PageProfilePuskesmas from "./view-puskesmas/page/PageProfilePuskesmas";
import DaftarBalitaKelurahan from "./view-kelurahan/pages/DaftarBalitaKelurahan";
import PageDetailBalitaKelurahan from "./view-kelurahan/pages/PageDetailBalitaKelurahan";

function App() {
  return (
      // <Router>
      //   <Routes>
      //     <Route path="/*" element={<RoutesPosyandu />} />
      //     <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
      //     <Route path="/posyandu/*" element={<RoutesPosyandu />} />
      //     <Route path="/puskesmas/*" element={<RoutesPuskesmas />} />
      //   </Routes>
      // </Router>
      // <Login />
      <PageAddPengukuranSelectedPuskesmas />
  );
}

export default App;
