import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import SidebarKelurahan from "./view-kelurahan/component/sidebar-kelurahan";
import Beranda from "./view-publik/pages/Beranda";
import DaftarBalitaPuskesmas from "./view-puskesmas/page/DaftarBalitaPuskesmas";
import DaftarBalitaKelurahan from "./view-kelurahan/pages/DaftarBalitaKelurahan";

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
      // <DaftarBalitaPuskesmas />
    <DaftarBalitaKelurahan />
  );
}

export default App;
