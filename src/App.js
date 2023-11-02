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
import Login from "./view-publik/pages/Login";
import SidebarPuskesmas from "./view-puskesmas/component/sidebar-puskesmas";
import EditAkunPosyandu from "./view-kelurahan/component/edit-akun-posyandu";
import PageEditAkunPosyandu from "./view-kelurahan/pages/PageEditAkunPosyandu";
import StackedBarGender from "./view-publik/component/StackedBar";
import LineChart_Umur_0_24 from "./view-publik/component/linechart_0-24";

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
      <Beranda />
      // <LineChart_Umur_0_24 />
  );
}

export default App;
