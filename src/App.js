import{Route, Routes, BrowserRouter as Router} from "react-router-dom";
import RoutesPosyandu from './routes/PosyanduRoutes';
import RoutesKelurahan from './routes/KelurahanRoutes';
import RoutesPuskesmas from './routes/PuskesmasRoutes';
import RoutesPublik from './routes/PublikRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
<<<<<<< HEAD
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
=======
import PageTambahPosyandu from "./view-kelurahan/pages/PageTambahPosyandu";
import PageAddBalitaPosyandu from "./view-posyandu/pages/PageAddBalitaPosyandu";
import PageAddPengukuranPosyandu from "./view-posyandu/pages/PageAddPengukuranPosyandu";
import PageDataTambahanPosyandu from "./view-posyandu/pages/PageDataTambahanPosyandu";
import PageEditPengukuranPosyandu from "./view-posyandu/pages/PageEditPengukuranPosyandu";
import PageEditPwPosyandu from "./view-posyandu/pages/PageEditPwPosyandu";
import PageEditAkunPosyandu from "./view-kelurahan/pages/PageEditAkunPosyandu";
import PageProfilePosyandu from "./view-posyandu/pages/PageProfilePosyandu";
import CalculateStunting from "./CalculateStunting";
>>>>>>> a7c04993bbd7a213986a369e98c04d6dc26c877d

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
<<<<<<< HEAD
      // <DaftarBalitaPosyandu />
      // <DaftarPengukuranBalitaPosyandu />
      // <DaftarBalitaPuskesmas />
      // <DaftarBalitaSemuaPuskesmas />
      // <DaftarPengukuranBalitaPuskesmas />
      // <DaftarPosyanduPuskesmas />
      // <DetailPosyanduPuskesmas />
      // <DaftarBalitaStunting />
      <DaftarPengukuranBalitaStunting />
      // <DaftarPosyanduKelurahan />
      // <DetailPosyanduKelurahan />
      // <DaftarPuskesmasKelurahan />
      // <DetailPuskesmasKelurahan />
=======
      // <Login />
      // <PageProfilePosyandu />
      <CalculateStunting />

>>>>>>> a7c04993bbd7a213986a369e98c04d6dc26c877d
  );
}

export default App;
