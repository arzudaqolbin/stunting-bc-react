import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
<<<<<<< HEAD
import PageEditDataTambahanPuskesmas from "./view-puskesmas/page/PageEditDataTambahanPuskesmas";
import Beranda from "./view-publik/pages/Beranda";
import Berita from "./view-publik/pages/Berita";
import DetailBerita from "./view-publik/component/detail-berita";
import Jadwal from "./view-publik/pages/Jadwal";
import Login from "./view-publik/pages/Login";
import DaftarBalitaPuskesmas from "./view-puskesmas/page/DaftarBalitaPuskesmas";
import PageAddPengukuranSelectedPuskesmas from "./view-puskesmas/page/PageAddPengukuranSelectedPuskesmas";
<<<<<<< HEAD
import PageEditBalitaPuskesmas from "./view-puskesmas/page/PageEditBalitaPuskesmas";
import PageEditPwPuskesmas from "./view-puskesmas/page/PageEditPwPuskesmas";
import PageProfilePuskesmas from "./view-puskesmas/page/PageProfilePuskesmas";
import DaftarBalitaKelurahan from "./view-kelurahan/pages/DaftarBalitaKelurahan";
import PageDetailBalitaKelurahan from "./view-kelurahan/pages/PageDetailBalitaKelurahan";
=======
import LihatPage from "./view-posyandu/pages/lihatpage";
import PageEditBalitaPuskesmas from "./view-puskesmas/page/PageEditBalitaPuskesmas"
>>>>>>> satrio

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
=======
import SidebarKelurahan from "./view-kelurahan/component/sidebar-kelurahan";
import Beranda from "./view-publik/pages/Beranda";
import DaftarBalitaPosyandu from "./view-posyandu/pages/DaftarBalitaPosyandu";
import DaftarPengukuranBalitaPosyandu from "./view-posyandu/pages/DaftarPengukuranBalitaPosyandu";
import DaftarBalitaPuskesmas from "./view-puskesmas/page/DaftarBalitaPuskesmas";
import DaftarBalitaSemuaPuskesmas from "./view-puskesmas/page/DaftarBalitaSemuaPuskesmas";
import DaftarPengukuranBalitaPuskesmas from "./view-puskesmas/page/DaftarPengukuranBalitaPuskesmas";
import DaftarPosyanduPuskesmas from "./view-puskesmas/page/DaftarPosyanduPuskesmas";
import DetailPosyanduPuskesmas from "./view-puskesmas/page/DetailPosyanduPuskesmas";
import DaftarBalitaStunting from "./view-kelurahan/pages/DaftarBalitaStunting";
import DaftarPengukuranBalitaStunting from "./view-kelurahan/pages/DaftarPengukuranBalitaStunting";
import DaftarPosyanduKelurahan from "./view-kelurahan/pages/DaftarPosyanduKelurahan";
import DetailPosyanduKelurahan from "./view-kelurahan/pages/DetailPosyanduKelurahan";
import DaftarPuskesmasKelurahan from "./view-kelurahan/pages/DaftarPuskesmasKelurahan";
import DetailPuskesmasKelurahan from "./view-kelurahan/pages/DetailPuskesmasKelurahan";

function App() {
  return (
<<<<<<< HEAD
      <Router>
        <Routes>
          {/* <Route path="/coba-api" element={<CalculateStunting />} /> */}
          <Route path= "/*" element={<RoutesPublik />} />
          <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
          <Route path="/posyandu/:idPosyandu/*" element={<RoutesPosyandu />} />
          <Route path="/puskesmas/:idPuskesmas/*" element={<RoutesPuskesmas />} />
        </Routes>
      </Router>
<<<<<<< HEAD
      // <DaftarBalitaPosyandu />
      // <DaftarPengukuranBalitaPosyandu />
      // <DaftarBalitaPuskesmas />
      // <DaftarBalitaSemuaPuskesmas />
      // <DaftarPengukuranBalitaPuskesmas />
      // <DaftarPosyanduPuskesmas />
      // <DetailPosyanduPuskesmas />
      // <DaftarBalitaStunting />
      // <DaftarPengukuranBalitaStunting />
      // <DaftarPosyanduKelurahan />
      // <DetailPosyanduKelurahan />
      // <DaftarPuskesmasKelurahan />
      // <DetailPuskesmasKelurahan />
=======
    <Router>
      <Routes>
        <Route path="/*" element={<RoutesPublik />} />
        <Route path="/kelurahan/*" element={<RoutesKelurahan />} />
        <Route path="/posyandu/*" element={<RoutesPosyandu />} />
        <Route path="/puskesmas/*" element={<RoutesPuskesmas />} />
      </Routes>
    </Router>
    // <Login />
    // <PageProfilePosyandu />
    // <CalculateStunting />

>>>>>>> origin/marsay
>>>>>>> c37f1057c2c2647092e1b2ae2c5b52533fa7ab41
=======
      // <Login />
      // <PageAddBalitaPosyandu/>
      // <LihatBayi/>
      // <PageProfilePosyandu />
      // <CalculateStunting />

>>>>>>> satrio
  );
}

export default App;
